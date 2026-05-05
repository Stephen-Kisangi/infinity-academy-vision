import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import campusImg from "@/assets/campus.jpg";
import { useState } from "react";
import { z } from "zod";
import { SCHOOL, waLink } from "@/lib/school";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Infinity View Academy" },
      { name: "description", content: "Visit, call, email or WhatsApp Infinity View Academy in Ruai, Nairobi." },
      { property: "og:title", content: "Contact Infinity View Academy" },
      { property: "og:description", content: "We'd love to hear from your family." },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().min(1, "Choose a subject").max(120),
  message: z.string().trim().min(5, "Please write a short message").max(1000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      subject: String(fd.get("subject") || ""),
      message: String(fd.get("message") || ""),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const { name, phone, subject, message } = parsed.data;
    const text = [
      `Hello ${SCHOOL.name},`, ``,
      `My name is ${name}.`,
      phone ? `Phone: ${phone}` : null,
      `Subject: ${subject}`, ``, message,
    ].filter(Boolean).join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from your family."
        subtitle="Visit our school, call us, or chat on WhatsApp — we typically reply within minutes during school hours."
        image={campusImg}
      />

      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Get in Touch</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Send us a message on WhatsApp</h2>
            <p className="mt-4 text-muted-foreground">
              Fill in the form — when you click send, we'll open WhatsApp with your message ready to deliver.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              <Field label="Full name *" name="name" type="text" error={errors.name} />
              <Field label="Phone (optional)" name="phone" type="tel" error={errors.phone} />
              <div>
                <label className="text-sm font-semibold text-primary">Subject *</label>
                <select name="subject" defaultValue=""
                  className="mt-2 w-full rounded-full px-5 py-3 bg-card border border-border focus:border-brand-orange focus:outline-none transition-colors">
                  <option value="" disabled>Choose a topic</option>
                  <option>Admissions inquiry</option>
                  <option>Schedule a school visit</option>
                  <option>Fees & payments</option>
                  <option>Transport</option>
                  <option>General question</option>
                </select>
                {errors.subject && <p className="mt-1 text-xs text-brand-red">{errors.subject}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-primary">Message *</label>
                <textarea name="message" rows={5} maxLength={1000}
                  className="mt-2 w-full rounded-3xl px-5 py-3 bg-card border border-border focus:border-brand-orange focus:outline-none transition-colors resize-none" />
                {errors.message && <p className="mt-1 text-xs text-brand-red">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-whatsapp">Send via WhatsApp</button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="feature-card">
              <h3 className="text-xl">Visit Us</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {SCHOOL.address.line1}<br />
                {SCHOOL.address.line2}<br />
                {SCHOOL.address.line3}
              </p>
              <p className="mt-3 text-sm text-brand-orange font-semibold">{SCHOOL.hours}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <a href={`tel:${SCHOOL.phonePrimaryTel}`} className="feature-card hover:border-brand-orange">
                <h3 className="text-lg">Call</h3>
                <p className="mt-3 block text-primary font-semibold">{SCHOOL.phonePrimary}</p>
              </a>
              <a href={`mailto:${SCHOOL.email}`} className="feature-card hover:border-brand-orange">
                <h3 className="text-lg">Email</h3>
                <p className="mt-3 block text-primary font-semibold break-all">{SCHOOL.email}</p>
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-[4/3]">
              <iframe title="Infinity View Academy location" src={SCHOOL.mapsEmbed}
                width="100%" height="100%" style={{ border: 0 }}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type, error }: { label: string; name: string; type: string; error?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold text-primary">{label}</label>
      <input name={name} type={type} maxLength={100}
        className="mt-2 w-full rounded-full px-5 py-3 bg-card border border-border focus:border-brand-orange focus:outline-none transition-colors" />
      {error && <p className="mt-1 text-xs text-brand-red">{error}</p>}
    </div>
  );
}
