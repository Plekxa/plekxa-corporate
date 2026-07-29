"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError("");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      category: String(form.get("category") || "general"),
      topic: String(form.get("topic") || ""),
      message: String(form.get("message") || ""),
      company: String(form.get("company") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !result?.ok) {
        throw new Error(result?.error || "We could not send your message.");
      }

      formElement.reset();
      setState("sent");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not send your message.",
      );
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Name
          <input name="name" required autoComplete="name" maxLength={120} />
        </label>
        <label>
          Email
          <input type="email" name="email" required autoComplete="email" maxLength={254} />
        </label>
      </div>

      <label>
        What can we help with?
        <select name="category" defaultValue="general">
          <option value="general">General enquiry</option>
          <option value="creator">Creator partnership</option>
          <option value="business">Business partnership</option>
          <option value="press">Press and media</option>
          <option value="careers">Careers</option>
          <option value="legal">Legal</option>
        </select>
      </label>

      <label>
        Subject
        <input name="topic" required maxLength={180} />
      </label>

      <label>
        Message
        <textarea name="message" rows={8} required minLength={10} maxLength={5000} />
      </label>

      <label className="contact-honeypot" aria-hidden="true">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>

      <button className="pill-button pill-button--dark" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send enquiry"}
      </button>

      <p className="form-status" aria-live="polite">
        {state === "sent" && (
          <span className="form-success">Thank you. Your enquiry has been sent.</span>
        )}
        {state === "error" && (
          <span className="form-error">
            {error} Please email <a href="mailto:info@plekxa.com">info@plekxa.com</a>.
          </span>
        )}
      </p>
    </form>
  );
}
