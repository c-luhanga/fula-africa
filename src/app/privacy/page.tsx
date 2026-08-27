import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Fula Africa",
  description:
    "How Fula Africa collects, uses, and protects information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
      <p className="font-display text-sm tracking-[0.3em] text-brand-red uppercase">
        Privacy
      </p>
      <h1 className="mt-4 font-display text-4xl text-brand-ink sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-6 leading-relaxed text-brand-gray">
        Fula Africa (NPO {site.regNumber}) respects your privacy. This page
        explains, in plain terms, what information this website collects and
        how it&rsquo;s used, in line with South Africa&rsquo;s Protection of
        Personal Information Act (POPIA).
      </p>

      <h2 className="mt-12 font-display text-2xl text-brand-ink">
        What we collect
      </h2>
      <p className="mt-4 leading-relaxed text-brand-gray">
        The only personal information this site collects is what you choose
        to submit through the contact form on the{" "}
        <a href="/contact/" className="text-brand-red underline">
          Contact
        </a>{" "}
        page: your name, email address, subject, and message. This site does
        not use cookies, analytics, or advertising trackers, and does not
        require you to create an account.
      </p>

      <h2 className="mt-10 font-display text-2xl text-brand-ink">
        How we use it
      </h2>
      <p className="mt-4 leading-relaxed text-brand-gray">
        Information submitted through the contact form is used only to
        respond to your enquiry. We do not sell, rent, or share it with third
        parties for marketing purposes.
      </p>

      <h2 className="mt-10 font-display text-2xl text-brand-ink">
        Third-party processing
      </h2>
      <p className="mt-4 leading-relaxed text-brand-gray">
        Contact form submissions are delivered to us using{" "}
        <a
          href="https://formspree.io"
          target="_blank"
          rel="noreferrer"
          className="text-brand-red underline"
        >
          Formspree
        </a>
        , a third-party form processing service. Formspree handles the
        submission on our behalf and is subject to its own{" "}
        <a
          href="https://formspree.io/legal/privacy-policy"
          target="_blank"
          rel="noreferrer"
          className="text-brand-red underline"
        >
          privacy policy
        </a>
        .
      </p>

      <h2 className="mt-10 font-display text-2xl text-brand-ink">
        Your rights
      </h2>
      <p className="mt-4 leading-relaxed text-brand-gray">
        You can ask us what information we hold about you, request that it be
        corrected, or ask us to delete it, at any time by emailing{" "}
        <a href={`mailto:${site.email}`} className="text-brand-red underline">
          {site.email}
        </a>
        .
      </p>

      <h2 className="mt-10 font-display text-2xl text-brand-ink">
        Contact
      </h2>
      <p className="mt-4 leading-relaxed text-brand-gray">
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${site.email}`} className="text-brand-red underline">
          {site.email}
        </a>{" "}
        or {site.phone}.
      </p>
    </section>
  );
}
