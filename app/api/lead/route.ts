import { NextResponse } from "next/server";

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

// Pipeline routing per source
const PIPELINE_ROUTING: Record<string, { pipelineId: string; stageId: string }> = {
  "nutrition": {
    pipelineId: "D674AJvIaG06OUxSqyjT",  // Nutrition Pipeline
    stageId: "5d0d06c2-0889-4795-bf1e-3deefdef84f2",  // New Lead
  },
  "pt": {
    pipelineId: "07GbZl0n9tJpB53krOKT",  // Personal Training Pipeline
    stageId: "3491b572-db2d-4618-8370-242d9f83192a",  // New Lead
  },
};

// Default: Acquisition Pipeline
const DEFAULT_PIPELINE_ID = "HpZymvQIQsXH4QR6Nf7I";
const DEFAULT_STAGE_ID = "8c869c1e-fdf0-4aef-80c1-9cd1a2406c40";

// Map source -> tags to apply
const SOURCE_TAGS: Record<string, string[]> = {
  "hyrox": ["Website_Form", "Hyrox_Landing"],
  "pt": ["Website_Form", "PT_Landing"],
  "nutrition": ["Website_Form", "Nutrition_Landing"],
  "how-to-start": ["Website_Form", "How_To_Start_Landing"],
  "no-sweat-intro": ["Website_Form", "No_Sweat_Intro_Landing"],
  "kids": ["Website_Form", "Kids_Landing"],
  "classes": ["Website_Form", "Classes_Landing"],
  "gym-247": ["Website_Form", "Gym_247_Landing"],
  "contact": ["Website_Form", "Contact_Page"],
  "blog": ["Website_Form", "Blog_Lead"],
  "hyrox-landing": ["Website_Form", "Hyrox_Landing"],
  "conversion-landing": ["Website_Form", "CrossFit_Landing"],
};

// Map source -> opportunity name prefix
const SOURCE_LABEL: Record<string, string> = {
  "hyrox": "Hyrox Consultation",
  "pt": "Personal Training Consultation",
  "nutrition": "Nutrition Challenge",
  "how-to-start": "How To Start Consultation",
  "no-sweat-intro": "No Sweat Intro",
  "kids": "Kids Free Trial",
  "classes": "Classes Enquiry",
  "gym-247": "24/7 Gym Enquiry",
  "contact": "Contact Form",
  "blog": "Blog Lead",
  "hyrox-landing": "Hyrox Consultation",
  "conversion-landing": "CrossFit Consultation",
};

export async function POST(request: Request) {
  try {
    const { name, email, phone, source } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      console.error("GHL credentials missing");
      return NextResponse.json({ success: true });
    }

    const parts = name.trim().split(/\s+/);
    const firstName = parts[0];
    const lastName = parts.slice(1).join(" ") || "";

    const sourceKey = (source || "").toLowerCase();
    const tags = SOURCE_TAGS[sourceKey] || ["Website_Form"];
    const sourceLabel = SOURCE_LABEL[sourceKey] || "Website Form";

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Version: GHL_API_VERSION,
      Accept: "application/json",
    };

    // 1. Check if contact already exists (by email)
    const searchRes = await fetch(
      `${GHL_API_BASE}/contacts/search/duplicate?locationId=${locationId}&email=${encodeURIComponent(email)}`,
      { headers }
    );
    const searchData = await searchRes.json();
    const existingContact = searchData?.contact;

    if (existingContact) {
      // Contact exists - just add tags, don't create opportunity
      await fetch(`${GHL_API_BASE}/contacts/${existingContact.id}/tags`, {
        method: "POST",
        headers,
        body: JSON.stringify({ tags }),
      });
      return NextResponse.json({ success: true, existing: true });
    }

    // 2. Contact doesn't exist - create them
    const contactRes = await fetch(`${GHL_API_BASE}/contacts/`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        firstName,
        lastName,
        name: name.trim(),
        email,
        phone,
        locationId,
        source: sourceLabel,
        tags,
      }),
    });

    if (!contactRes.ok) {
      console.error("GHL contact create failed:", contactRes.status);
      return NextResponse.json({ success: true });
    }

    const contactData = await contactRes.json();
    const contactId = contactData?.contact?.id;

    if (!contactId) {
      console.error("GHL contact created but no ID returned");
      return NextResponse.json({ success: true });
    }

    // 3. Create opportunity in the correct pipeline
    const routing = PIPELINE_ROUTING[sourceKey];
    const pipelineId = routing ? routing.pipelineId : DEFAULT_PIPELINE_ID;
    const stageId = routing ? routing.stageId : DEFAULT_STAGE_ID;

    await fetch(`${GHL_API_BASE}/opportunities/`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        pipelineId,
        pipelineStageId: stageId,
        locationId,
        contactId,
        name: `${sourceLabel} - ${name.trim()}`,
        status: "open",
      }),
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Lead route error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
