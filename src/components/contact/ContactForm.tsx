"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { TextureButton } from "@/components/ui/texture-button";

/**
 * No backend. The form composes a mailto: link so the visitor's own mail app
 * opens with the message pre-filled. Nothing leaves this page, which is stated
 * under the button. Wire a real endpoint later without changing the fields.
 */
export function ContactForm() {
  const f = site.contactPage.form;
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  const subject = encodeURIComponent(`Website for ${business || "my business"}`);
  const body = encodeURIComponent(`${message}\n\n${name}${business ? `, ${business}` : ""}`);
  const href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;

  const field =
    "mt-1.5 w-full rounded-[14px] bg-white px-4 py-3 text-[16px] text-[var(--ink)] outline-none transition-[box-shadow] duration-[180ms] focus-visible:[box-shadow:0_0_0_3px_var(--wisteria)]";
  const border = { border: "1.5px solid color-mix(in srgb, var(--wisteria) 50%, transparent)" };

  return (
    <form
      action={href}
      method="get"
      onSubmit={(e) => { e.preventDefault(); window.location.href = href; }}
      className="grid gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-[14px] font-semibold">
          {f.name}
          <input className={field} style={border} name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="block text-[14px] font-semibold">
          {f.business}
          <input className={field} style={border} name="business" autoComplete="organization" value={business} onChange={(e) => setBusiness(e.target.value)} />
        </label>
      </div>
      <label className="block text-[14px] font-semibold">
        {f.message}
        <textarea className={`${field} min-h-[140px] resize-y`} style={border} name="message" placeholder={f.placeholder} value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <div className="mt-2 flex flex-col items-start gap-3">
        <TextureButton type="submit" variant="garden" size="lg" className="min-h-[48px]">
          <span className="flex items-center gap-2"><Mail className="h-4 w-4" aria-hidden="true" />{f.submit}</span>
        </TextureButton>
        <p className="text-[13px] text-[var(--ink-soft)]">{f.note}</p>
      </div>
    </form>
  );
}
