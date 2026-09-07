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

// book.f15trainingcentr.com is the Facebook Ads landing subdomain.
// Tags here exclude Website_Form (that's only for main f15trainingcentr.com leads)
// and include Facebook_Ad to mark the FB origin.
const SOURCE_TAGS: Record<string, string[]> = {
  "website": ["Book_Landing", "Facebook_Ad"],
  "hyrox": ["Hyrox_Landing", "Facebook_Ad"],
  "pt": ["PT_Landing", "Facebook_Ad"],
  "nutrition": ["Nutrition_Landing", "Facebook_Ad"],
  "how-to-start": ["How_To_Start_Landing", "Facebook_Ad"],
  "no-sweat-intro": ["No_Sweat_Intro_Landing", "Facebook_Ad"],
  "kids": ["Kids_Landing", "Facebook_Ad"],
  "classes": ["Classes_Landing", "Facebook_Ad"],
  "gym-247": ["Gym_247_Landing", "Facebook_Ad"],
  "contact": ["Contact_Page", "Facebook_Ad"],
  "blog": ["Blog_Lead", "Facebook_Ad"],
  "hyrox-landing": ["Hyrox_Landing"],
  "conversion-landing": ["CrossFit_Landing"],
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
  "website": "Facebook Ad Landing",
};

export async function POST(request: Request) {
  try {
    const { name, email, phone, source } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    // Email sanity check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Phone validation - E.164 format (7-15 digits, optional +, country code cannot start with 0)
    const cleanedPhone = String(phone).replace(/[\s\-().]/g, "");
    if (!/^\+?[1-9]\d{6,12}$/.test(cleanedPhone)) {
      return NextResponse.json(
        { error: "Invalid phone number. Please enter a valid international phone number." },
        { status: 400 }
      );
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
    // Fallback for unmapped sources on book subdomain - still treated as Facebook Ad landing
    const tags = SOURCE_TAGS[sourceKey] || ["Book_Landing", "Facebook_Ad"];
    const sourceLabel = SOURCE_LABEL[sourceKey] || "Facebook Ad Landing";

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
        phone: cleanedPhone,
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
