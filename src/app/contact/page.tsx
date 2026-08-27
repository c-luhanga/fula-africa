import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Fula Africa",
  description:
    "Get in touch with Fula Africa. We would like to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="font-display text-sm tracking-[0.3em] text-brand-red uppercase">
            Contact
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl text-brand-ink sm:text-5xl">
            We would like to hear from you
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm shadow-black/[0.03]">
            <h3 className="font-semibold text-brand-ink">Phone</h3>
            <a
              href={site.phoneHref}
              className="mt-2 block text-brand-gray transition-colors hover:text-brand-red"
            >
              {site.phone}
            </a>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm shadow-black/[0.03]">
            <h3 className="font-semibold text-brand-ink">Email</h3>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-brand-gray transition-colors hover:text-brand-red"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="font-display text-2xl text-brand-ink">
            Send us your feedback
          </h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
