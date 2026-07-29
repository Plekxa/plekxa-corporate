import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  category?: unknown;
  topic?: unknown;
  message?: unknown;
  company?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot field. Bots commonly fill every field.
    if (clean(body.company, 100)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 254).toLowerCase();
    const category = clean(body.category, 80) || "general";
    const topic = clean(body.topic, 180);
    const message = clean(body.message, 5000);

    if (!name || !EMAIL_RE.test(email) || !topic || message.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Please complete all fields with a valid email address." },
        { status: 400 },
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Contact form: Supabase environment variables are missing.");
      return NextResponse.json(
        { ok: false, error: "The contact service is not configured." },
        { status: 503 },
      );
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/support_requests`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name,
        email,
        topic,
        category,
        message,
        status: "new",
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Contact form: support request insert failed", response.status, details);
      return NextResponse.json(
        { ok: false, error: "Your enquiry could not be saved." },
        { status: 502 },
      );
    }

    // Optional email notification. The enquiry is already safely stored if this fails.
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const from = process.env.CONTACT_FROM_EMAIL || "Plekxa Website <website@plekxa.com>";
      const notify = process.env.CONTACT_TO_EMAIL || "info@plekxa.com";
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [notify],
          reply_to: email,
          subject: `Website enquiry: ${topic}`,
          text: `Name: ${name}\nEmail: ${email}\nCategory: ${category}\nSubject: ${topic}\n\n${message}`,
        }),
        cache: "no-store",
      });
      if (!emailResponse.ok) {
        console.error("Contact form: notification email failed", await emailResponse.text());
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { ok: false, error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
