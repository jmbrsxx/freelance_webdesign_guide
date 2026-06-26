import React from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import aiVeterinaryImage from '../images/Aiveterinary.png'
import flTradesPreviewImage from '../images/FLTradesPreview.png'
import watchesImage from '../images/watches.png'

type Feature = {
  code: string
  title: string
  desc: string
}

type Testimonial = {
  name: string
  title: string
  quote: string
}

type PortfolioProject = {
  title: string
  description: string
  image: StaticImageData
  href: string
}

const features: Feature[] = [
  { code: '01', title: 'Market Positioning', desc: 'Choose a niche, shape your offer, and stop competing as another generalist.' },
  { code: '02', title: 'Portfolio Proof', desc: 'Build samples and case studies that make trust easier for first-time buyers.' },
  { code: '03', title: 'Pricing Control', desc: 'Set rates from income goals, project scope, and value instead of guesswork.' },
  { code: '04', title: 'Client Acquisition', desc: 'Use outreach, referrals, platforms, content, and partnerships without chasing noise.' },
  { code: '05', title: 'Sales Structure', desc: 'Run discovery calls, proposals, and contracts with a repeatable close process.' },
  { code: '06', title: 'Delivery Systems', desc: 'Protect timelines, manage clients, and turn finished projects into recurring work.' },
]

const courseAssets = [
  'Rate calculator built from income targets',
  'Cold email and follow-up templates',
  'Discovery call question map',
  'Proposal and contract structure',
  'Delivery checklist with 25 quality points',
  'Recurring revenue examples',
]

const testimonials: Testimonial[] = [
  {
    name: 'Michael Carter',
    title: 'Freelance Web Designer | Austin, Texas',
    quote:
      'Before joining this course, I had no idea how to consistently find clients. I was building websites, but nobody was paying me for them. The client outreach and sales lessons completely changed that. Within two months, I closed three clients and made back my investment many times over. This course gave me a real system instead of just theory.',
  },
  {
    name: 'Sarah Mitchell',
    title: 'Graphic Designer & Aspiring Freelancer | Manchester, UK',
    quote:
      "I've taken several online courses before, but this was the first one that showed exactly how to start and grow a freelance web design business. The step-by-step process made everything easy to follow, and the templates saved me hours of work. I landed my first client only three weeks after implementing what I learned.",
  },
]

const portfolioProjects: PortfolioProject[] = [
  {
    title: 'AI Veterinary Assistant',
    description: 'A polished AI product site for veterinary workflow support.',
    image: aiVeterinaryImage,
    href: 'https://www.vetz.ai/en',
  },
  {
    title: 'Chrono Customs',
    description: 'A refined ecommerce experience for custom watches.',
    image: watchesImage,
    href: 'https://chronocustoms.com/',
  },
  {
    title: 'FL Trades',
    description: 'A direct, conversion-focused landing page for a trading brand.',
    image: flTradesPreviewImage,
    href: 'https://fltrades.net/',
  },
]

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 inline-flex border border-red-700 bg-red-700 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-white">
      {children}
    </p>
  )
}

function FeaturePanel({ feature }: { feature: Feature }) {
  return (
    <article className="group border-l-4 border-black bg-white p-5 shadow-[7px_7px_0_#0a0a0a] transition hover:-translate-y-1 hover:border-red-700">
      <p className="mb-5 font-mono text-xs font-bold text-red-700">{feature.code}</p>
      <h3 className="mb-2 text-lg font-black text-black">{feature.title}</h3>
      <p className="text-sm leading-6 text-zinc-650">{feature.desc}</p>
    </article>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="relative bg-zinc-950 p-7 text-white">
      <div className="absolute right-0 top-0 h-12 w-12 bg-red-700" />
      <p className="mb-7 text-base leading-7 text-zinc-100">&quot;{testimonial.quote}&quot;</p>
      <div className="border-t border-red-700 pt-5">
        <h3 className="font-black">{testimonial.name}</h3>
        <p className="mt-1 text-sm text-zinc-400">{testimonial.title}</p>
      </div>
    </article>
  )
}

function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-zinc-300 bg-white transition hover:-translate-y-1 hover:border-red-700 hover:shadow-[8px_8px_0_#b91c1c]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <Image
          src={project.image}
          alt={`${project.title} website preview`}
          fill
          className="object-cover grayscale transition duration-300 group-hover:scale-105 group-hover:grayscale-0"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-2 font-black text-black">{project.title}</h3>
        <p className="text-sm leading-6 text-zinc-600">{project.description}</p>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f2ec] text-black">
      <nav className="sticky top-0 z-50 border-b-2 border-black bg-[#f6f2ec]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3 font-black uppercase tracking-tight text-black">
            <span className="grid h-9 w-9 place-items-center bg-black text-red-600">27</span>
            <span>Freelance Business Course</span>
          </Link>
          <div className="flex items-center gap-4 text-sm font-bold uppercase">
            <Link href="/free-course" className="hidden text-zinc-700 hover:text-red-700 sm:block">
              Preview
            </Link>
            <Link href="/paid-course" className="bg-red-700 px-4 py-2 text-white hover:bg-black">
              Get the course
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative overflow-hidden border-b-2 border-black bg-[linear-gradient(135deg,rgba(185,28,28,0.16)_0_12px,transparent_12px_24px)]">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-black lg:block" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
            <div>
              <SectionKicker>No fluff. Build the business.</SectionKicker>
              <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-black md:text-7xl">
                Freelance web design with a client system behind it.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-800">
                A practical course for turning design and development skill into paid projects: positioning,
                pricing, outreach, sales, contracts, delivery, and recurring revenue.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/paid-course" className="border-2 border-black bg-red-700 px-7 py-4 text-center font-black uppercase text-white shadow-[6px_6px_0_#0a0a0a] transition hover:-translate-y-1">
                  View full course ($27)
                </Link>
                <Link href="/free-course" className="border-2 border-black bg-[#f6f2ec] px-7 py-4 text-center font-black uppercase text-black transition hover:bg-black hover:text-white">
                  Free preview
                </Link>
              </div>
            </div>

            <div className="relative border-2 border-black bg-[#f6f2ec] p-5 shadow-[10px_10px_0_#b91c1c]">
              <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                Course inventory
              </p>
              <div className="grid grid-cols-3 border-2 border-black text-center">
                {[
                  ['8', 'modules'],
                  ['96', 'pages'],
                  ['47', 'lessons'],
                ].map(([value, label]) => (
                  <div key={label} className="border-r-2 border-black p-4 last:border-r-0">
                    <p className="text-4xl font-black text-red-700">{value}</p>
                    <p className="mt-1 text-xs font-bold uppercase text-zinc-700">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {courseAssets.map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-zinc-300 pb-3 text-sm font-semibold">
                    <span className="h-2 w-2 bg-red-700" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10 max-w-2xl">
            <SectionKicker>The curriculum</SectionKicker>
            <h2 className="text-4xl font-black uppercase tracking-tight">A field manual for getting paid.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <FeaturePanel key={feature.code} feature={feature} />
            ))}
          </div>
        </section>

        <section className="border-y-2 border-black bg-black text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionKicker>Why it works</SectionKicker>
              <h2 className="text-4xl font-black uppercase tracking-tight">Systems beat scattered effort.</h2>
            </div>
            <p className="text-lg leading-8 text-zinc-200">
              Most freelancers do not fail because they lack taste or technical skill. They fail because the business
              side is improvised. This course turns that invisible work into a repeatable operating system: who to
              target, what to sell, how to price it, how to ask for the sale, and how to deliver without chaos.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10 max-w-2xl">
            <SectionKicker>Proof</SectionKicker>
            <h2 className="text-4xl font-black uppercase tracking-tight">Students who used the system.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </section>

        <section className="relative border-y-2 border-black bg-[#efe7dd] px-5 py-20">
          <Link
            href="https://joaomateus.online"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-5 top-5 text-sm font-black uppercase text-red-700 underline-offset-4 hover:underline"
          >
            portfolio
          </Link>
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <SectionKicker>Built work</SectionKicker>
              <h2 className="text-4xl font-black uppercase tracking-tight">Portfolio examples with real edges.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {portfolioProjects.map((project) => (
                <PortfolioCard key={project.href} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-5 py-20 md:grid-cols-2">
          <div className="border-2 border-black bg-white p-8">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-700">Free track</p>
            <h3 className="mb-5 text-2xl font-black uppercase">Modules 1-3</h3>
            <ul className="space-y-3 text-zinc-700">
              <li>Mindset and market reality</li>
              <li>Skills, tools, and tech stack</li>
              <li>Portfolio that converts</li>
            </ul>
            <Link href="/free-course" className="mt-7 block border-2 border-black px-5 py-3 text-center font-black uppercase hover:bg-black hover:text-white">
              Start free
            </Link>
          </div>

          <div className="border-2 border-black bg-red-700 p-8 text-white shadow-[10px_10px_0_#0a0a0a]">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-100">Full system</p>
            <h3 className="mb-3 text-2xl font-black uppercase">All 8 modules</h3>
            <p className="mb-2 text-5xl font-black">$27</p>
            <p className="mb-7 text-red-100">Lifetime access. PDF plus online course. Future updates included.</p>
            <Link href="/paid-course" className="block border-2 border-black bg-black px-5 py-3 text-center font-black uppercase text-white hover:bg-white hover:text-black">
              View full course
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-black bg-black py-10 text-zinc-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-black uppercase text-white">Freelance Business Course</h3>
            <p className="mt-2 text-sm">A practical guide to building a sustainable freelance business.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/terms" className="hover:text-red-400">Terms</Link>
            <Link href="/privacy" className="hover:text-red-400">Privacy</Link>
            <Link href="/refund" className="hover:text-red-400">Refund</Link>
            <Link href="/contact" className="hover:text-red-400">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
