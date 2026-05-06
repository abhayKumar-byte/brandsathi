"use client";

import { useState, useEffect, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null);

  useEffect(() => {
    if (!message) return;
    const t = window.setTimeout(() => setMessage(null), 5000);
    return () => window.clearTimeout(t);
  }, [message]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      form.querySelectorAll<HTMLElement>(":invalid")[0]?.focus();
      return;
    }
    form.classList.add("was-validated");
    setSending(true);
    setMessage(null);

    const formData = new FormData(form);
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      });
      const data = await response.json();
      if (response.ok) {
        setMessage({ text: data.message ?? "Success", ok: true });
        form.reset();
        form.classList.remove("was-validated");
      } else {
        setMessage({ text: data.message ?? "Error", ok: false });
      }
    } catch {
      setMessage({ text: "Something went wrong!", ok: false });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} id="contact-form" className="needs-validation" noValidate>
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
        <input type="checkbox" className="hidden" style={{ display: "none" }} name="botcheck" readOnly />
        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-hidden focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
            name="name"
          />
          <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">Please provide your full name.</div>
        </div>
        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            name="email"
            required
            className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-hidden focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          />
          <div className="empty-feedback text-red-400 text-sm mt-1">Please provide your email address.</div>
          <div className="invalid-feedback text-red-400 text-sm mt-1">Please provide a valid email address.</div>
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            required
            placeholder="Your Message"
            className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-hidden h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          />
          <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">Please enter your message.</div>
        </div>
        <Button type="submit" size="lg" block disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </Button>
        {message && (
          <div className={`mt-3 text-center ${message.ok ? "text-green-500" : "text-red-500"}`}>{message.text}</div>
        )}
      </form>
      <style jsx global>{`
        .invalid-feedback,
        .empty-feedback {
          display: none;
        }
        .was-validated :placeholder-shown:invalid ~ .empty-feedback {
          display: block;
        }
        .was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
          display: block;
        }
        .was-validated :invalid {
          border-color: #dc3545;
        }
      `}</style>
    </>
  );
}
