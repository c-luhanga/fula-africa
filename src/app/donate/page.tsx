import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate | Fula Africa",
  description:
    "Support Fula Africa's mission to end human trafficking in Southern Africa. Every contribution helps protect the vulnerable and support survivors.",
};

const bankRows = [
  { label: "Bank", value: site.bank.bankName },
  { label: "Account Holder", value: site.bank.accountHolder },
  { label: "Account Type", value: site.bank.accountType },
  { label: "Account Number", value: site.bank.accountNumber },
];

export default function DonatePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-ink">
        <div className="absolute inset-0">
          <Image
            src="/images/donate-hero.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-ink/85" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center lg:px-8">
          <p className="font-display text-sm tracking-[0.3em] text-brand-red uppercase">
            Donate
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl text-white sm:text-5xl">
            Your generosity drives change
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/60">
            Every contribution, no matter how small, ignites change within
            communities across Africa. Your support helps us disrupt
            trafficking networks and protect the vulnerable.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
        <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm shadow-black/[0.03] sm:p-10">
          <h2 className="font-display text-2xl text-brand-ink">
            Bank Transfer Details
          </h2>
          <p className="mt-3 text-sm text-brand-gray">
            You can donate directly via EFT using the details below.
          </p>

          <dl className="mt-8 divide-y divide-black/5 border-y border-black/5">
            {bankRows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <dt className="text-sm font-semibold text-brand-gray">
                  {row.label}
                </dt>
                <dd className="font-display text-lg text-brand-ink">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-sm leading-relaxed text-brand-gray">
            Prefer another way to give, or want to discuss a partnership or
            larger contribution? Reach out to us at{" "}
            <a href={`mailto:${site.email}`} className="text-brand-red underline">
              {site.email}
            </a>{" "}
            or{" "}
            <a href={site.phoneHref} className="text-brand-red underline">
              {site.phone}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
