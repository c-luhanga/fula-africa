import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";

const pillars = [
  {
    title: "Health",
    body: "Your donations help us provide immediate care and assistance to survivors of human trafficking, ensuring access to medical, psychological, and emotional support.",
    photo: "/images/pillar-health.jpg",
  },
  {
    title: "Education",
    body: "With your support, we raise awareness in schools and communities, equipping people with knowledge to prevent human trafficking and protect vulnerable populations.",
    photo: "/images/pillar-education.jpg",
  },
];

const gallery = [
  {
    photo: "/images/gallery-march.jpg",
    caption: "Marching against human trafficking in Johannesburg",
  },
  {
    photo: "/images/gallery-outreach-team.jpg",
    caption: "Community outreach at a public awareness event",
  },
  {
    photo: "/images/gallery-tv-interview.jpg",
    caption: "Founder Ephraim Luhanga on national television",
  },
  {
    photo: "/images/gallery-materials.jpg",
    caption: "Distributing awareness materials with our partners",
  },
];

const founders = [
  {
    name: "Ephraim C. Luhanga",
    role: "Founder",
    photo: "/images/founder-ephraim.jpg",
  },
  {
    name: "Claudius G.W Zindoga",
    role: "Co-Founder",
    photo: "/images/founder-claudius.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-cream">
        <div className="pointer-events-none absolute -bottom-16 -left-20 hidden h-[28rem] w-[28rem] opacity-[0.06] lg:block">
          <Image src="/images/logo-full.gif" alt="" fill unoptimized className="object-contain" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-8 lg:py-32">
          <div>
            <p className="font-display text-sm tracking-[0.3em] text-brand-red uppercase">
              Fula Africa
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-brand-ink sm:text-5xl lg:text-6xl">
              Together, we can end human trafficking.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-gray">
              Empowering communities, supporting survivors, and disrupting
              trafficking networks across Southern Africa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/donate/"
                className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
              >
                Donate Now
              </Link>
              <Link
                href="/about/"
                className="rounded-full border border-brand-ink/15 px-7 py-3.5 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-ink/40"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xl shadow-black/10 sm:aspect-[16/10] lg:aspect-[4/5]">
            <Image
              src="/images/hero-outreach.jpg"
              alt="Fula Africa volunteers at a community awareness event"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="bg-brand-ink text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-3 lg:px-8">
          <div className="text-center sm:text-left">
            <div className="font-display text-4xl text-brand-red sm:text-5xl">
              <Counter to={13} />
            </div>
            <p className="mt-3 text-sm text-white/60">
              Malawian survivors supported through a two-year court case and repatriated home, 2023
            </p>
          </div>
          <div className="text-center sm:text-left">
            <div className="font-display text-4xl text-brand-red sm:text-5xl">
              <Counter to={20} suffix="+" />
            </div>
            <p className="mt-3 text-sm text-white/60">
              women equipped with new skills and safely resettled
            </p>
          </div>
          <div className="text-center sm:text-left">
            <div className="font-display text-4xl text-brand-red sm:text-5xl">
              <Counter to={2017} duration={2200} grouped={false} />
            </div>
            <p className="mt-3 text-sm text-white/60">
              fighting trafficking in the SADC region since
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-brand-ink sm:text-4xl">
            How you&rsquo;re changing lives
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm shadow-black/[0.03]"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={pillar.photo}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="h-1 w-12 rounded-full bg-brand-red" />
                <h3 className="mt-6 font-display text-2xl text-brand-ink">
                  {pillar.title}
                </h3>
                <p className="mt-4 leading-relaxed text-brand-gray">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/donate/"
            className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            Donate Now
          </Link>
          <Link
            href="/about/"
            className="rounded-full border border-brand-ink/15 px-7 py-3.5 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-ink/40"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-brand-ink sm:text-4xl">
              Our work in action
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <div key={item.photo} className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                  <Image
                    src={item.photo}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm leading-snug text-brand-gray">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Survivor testimonial */}
      <section className="bg-brand-ink">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <p className="font-display text-sm tracking-[0.3em] text-brand-red uppercase">
            In Their Own Words
          </p>
          <blockquote className="mt-6 font-display text-2xl leading-relaxed text-white sm:text-3xl">
            &ldquo;We stayed about three years. Thank God that we made it
            home. We also want to thank Fula Africa, through Mr. Luhanga and
            Claudius Zindoga, who have been supporting and been with us
            through thick and thin, dark and light, until we came
            home.&rdquo;
          </blockquote>
          <p className="mt-8 text-sm text-white/60">
            One of 13 Malawian survivors Fula Africa supported through a
            two-year safe house stay while testifying against their
            traffickers, in a letter written after returning home, 2023
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center lg:px-8">
          <h2 className="font-display text-3xl text-brand-ink sm:text-4xl">
            Our Founders
          </h2>

          <div className="mx-auto mt-12 grid max-w-xl gap-8 sm:grid-cols-2">
            {founders.map((founder) => (
              <div key={founder.name} className="text-center">
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-md">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg text-brand-ink">
                  {founder.name}
                </h3>
                <p className="text-sm text-brand-red">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
