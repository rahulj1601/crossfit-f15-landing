"use client";

import { useEffect } from "react";

/**
 * Step 2 of the application: the F15 fitness quiz.
 *
 * The lead form in the landing page modal is configured in GoHighLevel to
 * redirect here after submission, and this survey is configured to send the
 * visitor on to /book. Both of those hops are GHL settings, so this route has
 * to keep existing at /survey for the funnel to stay unbroken.
 */
const SURVEY_URL = "https://api.leadconnectorhq.com/widget/survey/MFRj5Q9RZw6cLgX0eDTU";

export function SurveyEmbed() {
  useEffect(() => {
    // The GHL embed script resizes the iframe to fit each question.
    if (document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src={SURVEY_URL}
      id="MFRj5Q9RZw6cLgX0eDTU"
      title="F15 fitness quiz"
      style={{ width: "100%", height: "100%", border: "none", display: "block" }}
      scrolling="no"
    />
  );
}
