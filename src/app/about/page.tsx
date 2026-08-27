import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Fula Africa",
  description:
    "Learn about Fula Africa's mission, vision, values, story, and partnerships in the fight against human trafficking in Southern Africa.",
};

const values = [
  {
    title: "Transparency",
    body: "We operate with openness and accountability to build trust and integrity in all our actions.",
  },
  {
    title: "Dignity",
    body: "Every human life has inherent value and deserves respect and protection.",
  },
  {
    title: "Collaboration",
    body: "Together, with communities, governments, and global partners, we can create sustainable change.",
  },
  {
    title: "Empowerment",
    body: "We equip individuals and communities with tools to resist and recover from exploitation.",
  },
];

const milestones = [
  {
    year: "2016",
    body: "Investigated trafficking routes between Malawi and South Africa; findings became the documentary Malawi Trafficking, produced with Carte Blanche and aired on DStv.",
  },
  {
    year: "2017",
    body: "Officially registered as an NPO. Authored and launched the Wamama Chronicles with UNODC, at an event addressed by Deputy Minister of Justice John Jeffrey.",
    photo: "/images/milestone-2017.jpg",
  },
  {
    year: "2019",
    body: "Ran youth awareness workshops across Gauteng, including with St Thomas More Catholic Church in Centurion, and supported the rescue and repatriation of trafficking victims from Rwanda and Ghana.",
    photo: "/images/milestone-2018.jpg",
  },
  {
    year: "2022",
    body: "Supported Malawian, Mozambican, and Zimbabwean families affected by a labour-exploitation raid in Cullinan, and helped around 20 women learn sewing and other trade skills before resettling safely in Malawi.",
  },
  {
    year: "2023",
    body: "Supported 13 Malawian boys through a two-year stay in a safe house while they testified against their traffickers, ending in their safe repatriation home.",
    photo: "/images/milestone-2024.jpg",
  },
  {
    year: "2024",
    body: "Collaborated on the documentary Trafficked: Bus Ride from Hell, which highlighted the ease of human trafficking across borders.",
  },
];

const partners = [
  {
    title: "United Nations Office on Drugs and Crime (UNODC)",
    body: "Partnered to produce and launch the Wamama Chronicles, and on the GLO.ACT programme across Southern Africa.",
    logos: ["/images/partners/unodc.png"],
  },
  {
    title: "IOM & UNICEF",
    body: "Implementing partners on victim protection, repatriation, and awareness programmes under GLO.ACT.",
    logos: ["/images/partners/iom.png", "/images/partners/unicef.png"],
  },
  {
    title: "European Union",
    body: "Co-funded GLO.ACT, the joint programme against trafficking in persons and smuggling of migrants that trained and equipped Fula Africa.",
    logos: ["/images/partners/eu.png"],
  },
  {
    title: "National Prosecuting Authority & the Hawks",
    body: "Working with South African law enforcement to support investigations and pursue justice for victims.",
    logos: ["/images/partners/npa.png"],
  },
  {
    title: "National Freedom Network (NFN)",
    body: "Member of South Africa's umbrella civil society network coordinating the fight against trafficking in persons.",
    logos: ["/images/partners/nfn.png"],
  },
  {
    title: "Interpol Southern Africa & SARPCCO",
    body: "Sharing findings and intelligence with regional police cooperation bodies to help disrupt trafficking networks.",
    logos: ["/images/partners/interpol.png"],
  },
  {
    title: "Malawian Consulate & High Commission",
    body: "Ongoing collaboration on prevention, awareness, and support for Malawian nationals vulnerable to trafficking in South Africa.",
  },
  {
    title: "Department of Social Development",
    body: "Collaborating on victim support services, training, and awareness campaigns across South African provinces.",
  },
  {
    title: "Counter Trafficking in Persons (CTIP)",
    body: "Core member of this interfaith group, coordinated by the Catholic Bishops' Conference of Southern Africa, organising annual awareness marches.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-ink/80" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
          <p className="font-display text-sm tracking-[0.3em] text-brand-red uppercase">
            About Us
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl text-white sm:text-5xl">
            Who We Are
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-white/70">
            Fula Africa is a nonprofit organization based in South Africa,
            dedicated to eradicating human trafficking in the Southern
            African Development Community (SADC) region. With a mission to
            uphold the dignity of vulnerable populations and disrupt
            trafficking networks, we work tirelessly to create safer
            communities.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
            We believe in empowering individuals and communities with
            knowledge, resources, and support to resist exploitation and
            build brighter futures.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-display text-sm tracking-[0.3em] text-brand-red uppercase">
            Our Mission
          </p>
          <h2 className="mt-4 font-display text-3xl leading-snug text-brand-ink sm:text-4xl">
            &ldquo;Promoting humanity through dignity.&rdquo;
          </h2>
          <p className="mt-6 leading-relaxed text-brand-gray">
            Fula Africa is an inclusive organisation dedicated to innovation,
            effectiveness, and relevance in equipping and protecting the
            rights and dignity of victims of human trafficking &mdash;
            working toward a world that protects, promotes, and meets the
            needs and rights of vulnerable and marginalised people.
          </p>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <div key={value.title}>
              <p className="font-display text-4xl text-brand-red/25">
                0{i + 1}
              </p>
              <h3 className="mt-2 font-display text-xl text-brand-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <h2 className="font-display text-3xl text-brand-ink">Our Story</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-brand-gray">
            Fula Africa was founded with a vision to address the growing
            human trafficking crisis in Southern Africa. Initially starting
            as a grassroots organization, it has grown into a trusted leader
            in the fight against modern slavery.
          </p>

          <div className="mt-12 space-y-10 border-l-2 border-brand-red/20 pl-8">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="relative flex flex-col gap-5 sm:flex-row sm:items-start"
              >
                <div className="absolute -left-[41px] top-1 h-3 w-3 rounded-full bg-brand-red" />
                {milestone.photo && (
                  <div className="relative h-40 w-full flex-shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-40">
                    <Image
                      src={milestone.photo}
                      alt={`Fula Africa in ${milestone.year}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-display text-xl text-brand-red">
                    {milestone.year}
                  </p>
                  <p className="mt-2 max-w-xl leading-relaxed text-brand-gray">
                    {milestone.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-2xl leading-relaxed text-brand-gray">
            Fula Africa&rsquo;s journey continues as we amplify our efforts to
            disrupt trafficking networks, support survivors, and educate
            communities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg shadow-black/10">
            <Image
              src="/images/milestone-2017.jpg"
              alt="Wamama Chronicles launch event with UNODC and GLO.ACT"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-display text-sm tracking-[0.3em] text-brand-red uppercase">
              Our Book
            </p>
            <h2 className="mt-4 font-display text-3xl text-brand-ink">
              Wamama Chronicles
            </h2>
            <p className="mt-5 leading-relaxed text-brand-gray">
              &ldquo;Wamama&rdquo; is a Bantu word for women in the Tumbuka
              language. The Wamama Chronicles tell the stories of several
              women whom traffickers and smugglers subjected to abuse while
              leaving Malawi in search of a better life in South Africa. The
              book is a stark reminder of the horrors trafficking victims and
              smuggled migrants experience at the hands of criminals — and an
              awareness-raising tool for the public, law enforcement, and
              agencies with a duty to protect vulnerable migrants.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-gray">
              Authored by co-founders Claudius G.W. Zindoga and Charles E.
              Luhanga, and launched in partnership with UNODC under its
              GLO.ACT programme.
            </p>
            <a
              href={`mailto:${site.email}?subject=Wamama%20Chronicles`}
              className="mt-7 inline-flex rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Get a copy
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl text-brand-ink">Partnerships</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-brand-gray">
            Human trafficking is a transnational crime, and Fula Africa
            collaborates with a range of partners to maximize impact.
          </p>

          <p className="mt-14 text-xs font-semibold uppercase tracking-wide text-brand-gray">
            Key Partners
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {partners
              .filter((partner) => partner.logos)
              .map((partner) => (
                <div
                  key={partner.title}
                  className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm shadow-black/[0.03]"
                >
                  <div className="mb-5 flex items-center gap-5">
                    {partner.logos!.map((logo) => (
                      <div key={logo} className="relative h-9 w-24">
                        <Image
                          src={logo}
                          alt=""
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                    ))}
                  </div>
                  <h3 className="font-semibold text-brand-ink">
                    {partner.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                    {partner.body}
                  </p>
                </div>
              ))}
          </div>

          <p className="mt-14 text-xs font-semibold uppercase tracking-wide text-brand-gray">
            Also Working With
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {partners
              .filter((partner) => !partner.logos)
              .map((partner) => (
                <div
                  key={partner.title}
                  className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm shadow-black/[0.03]"
                >
                  <h3 className="font-semibold text-brand-ink">
                    {partner.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                    {partner.body}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-ink">
        <div className="absolute inset-0">
          <Image src="/images/cta-bg.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-brand-ink/85" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center lg:px-8">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Join us for a better life and beautiful future
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/60">
            Join us on our mission to end human trafficking. Together, we can
            protect the vulnerable, support survivors, and create a future
            free from exploitation.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate/"
              className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Donate Now
            </Link>
            <Link
              href="/contact/"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
