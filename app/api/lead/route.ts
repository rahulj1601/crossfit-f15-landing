import { NextResponse } from "next/server";

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

// Acquisition Pipeline (read from GHL)
const ACQUISITION_PIPELINE_ID = "HpZymvQIQsXH4QR6Nf7I";
const NEW_LEAD_STAGE_ID = "8c869c1e-fdf0-4aef-80c1-9cd1a2406c40";

// Map source -> tags to apply
const SOURCE_TAGS: Record<string, string[]> = {
  "hyrox": ["Website_Form", "Hyrox_Landing"],
  "pt": ["Website_Form", "PT_Landing"],
  "nutrition": ["Website_Form", "Nutrition_Landing"],
  "how-to-start": ["Website_Form", "How_To_Start_Landing"],
  "no-sweat-intro": ["Website_Form", "No_Sweat_Intro_Landing"],
};

// Map source -> opportunity name prefix
const SOURCE_LABEL: Record<string, string> = {
  "hyrox": "Hyrox Consultation",
  "pt": "Personal Training Consultation",
  "nutrition": "Nutrition Challenge",
  "how-to-start": "How To Start Consultation",
  "no-sweat-intro": "No Sweat Intro",
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
      // Fail gracefully if not configured - still return success to user
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

    // 1. Create or upsert contact
    const contactRes = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
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
      const err = await contactRes.text();
      console.error("GHL contact upsert failed:", contactRes.status, err);
      return NextResponse.json({ success: true });
    }

    const contactData = await contactRes.json();
    const contactId = contactData?.contact?.id || contactData?.id;

    if (!contactId) {
      console.error("GHL contact created but no ID returned");
      return NextResponse.json({ success: true });
    }

    // 2. Create opportunity in Acquisition Pipeline at "New Lead - To Call" stage
    const oppRes = await fetch(`${GHL_API_BASE}/opportunities/`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        pipelineId: ACQUISITION_PIPELINE_ID,
        pipelineStageId: NEW_LEAD_STAGE_ID,
        locationId,
        contactId,
        name: `${sourceLabel} - ${name.trim()}`,
        status: "open",
      }),
    });

    if (!oppRes.ok) {
      const err = await oppRes.text();
      console.error("GHL opportunity create failed:", oppRes.status, err);
      // Contact is still created, so return success
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Lead route error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
