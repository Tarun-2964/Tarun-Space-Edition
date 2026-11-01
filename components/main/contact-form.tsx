"use client";

import { type FormEvent, useState } from "react";

import { PROFILE } from "@/constants";

const field =
  "w-full rounded-lg bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] focus:border-[#7042f8] outline-none px-4 py-3 text-white placeholder:text-gray-500";

export const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") ?? "");
    const email = String(d.get("email") ?? "");
    const subject = String(d.get("subject") ?? "") || `Portfolio enquiry from ${name}`;
    const message = String(d.get("message") ?? "");
    const body = `${message}\n\n— ${name} (${email})`;

    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm text-gray-300">
          Name
          <input name="name" required placeholder="Your name" className={field} />
        </label>
        <label className="flex flex-col gap-1 text-sm text-gray-300">
          Email
          <input name="email" type="email" required placeholder="you@example.com" className={field} />
        </label>
      </div>
      <label className="flex flex-col gap-1 text-sm text-gray-300">
        Subject
        <input name="subject" placeholder="What is this about?" className={field} />
      </label>
      <label className="flex flex-col gap-1 text-sm text-gray-300">
        Message
        <textarea name="message" required rows={6} placeholder="Tell me about your project or opportunity…" className={field} />
      </label>
      <button type="submit" className="button-primary text-white rounded-lg py-3 px-8 self-start">
        Send Message
      </button>
      {sent && (
        <p className="text-sm text-gray-400" role="status">
          Your email app should open with the message ready to send. If it doesn&apos;t, email me directly at{" "}
          <a className="text-[#b49bff] underline" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
          .
        </p>
      )}
    </form>
  );
};
