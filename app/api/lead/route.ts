import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    // Split name into first/last
    const parts = name.trim().split(/\s+/);
    const firstName = parts[0];
    const lastName = parts.slice(1).join(" ") || "";

    // Create contact in GHL
    const ghlApiKey = process.env.GHL_API_KEY;
    const ghlLocationId = process.env.GHL_LOCATION_ID;

    if (ghlApiKey && ghlLocationId) {
      await fetch("https://services.leadconnectorhq.com/contacts/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${ghlApiKey}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          locationId: ghlLocationId,
          source: "Landing Page - First Step Intro",
          tags: ["landing-page-lead", "first-step-intro"],
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
