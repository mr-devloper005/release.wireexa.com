import Link from 'next/link'
import { ArrowRight, BarChart3, Megaphone, PieChart, Send, ShieldCheck, TrendingUp } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const services = [
  { icon: TrendingUp, title: 'Optimized Press Reach', body: 'Targeted distribution options help announcements reach relevant publishers, editors, and public audiences.' },
  { icon: Send, title: 'Press Release Distribution', body: 'Publish important company updates through a clean, media-ready release experience.' },
  { icon: ShieldCheck, title: 'Financial Disclosures', body: 'Present regulated updates, corporate milestones, and market notices with clarity.' },
  { icon: Megaphone, title: 'Investor Relations', body: 'Keep stakeholders informed with timely releases and structured announcement pages.' },
  { icon: BarChart3, title: 'Insights and Analytics', body: 'Track the rhythm of coverage and organize updates around audience interest.' },
  { icon: PieChart, title: 'Reputation Updates', body: 'Share brand stories, milestones, and public statements in a polished newsroom format.' },
]

const clients = ['exicom', 'WNS', 'PHILIPS', 'motorola', 'HITACHI', 'exicom', 'TATA', 'makeMyTrip']

const testimonials = [
  ['What sets this distribution experience apart is the responsive support and clear publishing flow. Our updates are easy to prepare, review, and share.', 'Rahul Mathur, Communications Lead'],
  ['From understanding how press release dissemination works to final distribution, the process feels seamless and reliable for recurring announcements.', 'Vipul Gara, Investor Relations'],
  ['The servicing team is cooperative, efficient, and focused on helping outreach efforts land with the right context.', 'Aniruddha Basu, Corporate Communications'],
  ['A polished newsroom makes it easier to present stories professionally and keep brand visibility consistent across campaigns.', 'Meera Shah, Brand Strategy'],
]

function SectionTitle({ label, title, light = false }: { label?: string; title: string; light?: boolean }) {
  return (
    <div>
      <span className="wire-yellow-rule" />
      {label ? <p className={`mt-5 text-xs font-black uppercase tracking-[.22em] ${light ? 'text-white/70' : 'text-[var(--slot4-blue)]'}`}>{label}</p> : null}
      <h2 className={`mt-3 text-4xl font-black leading-tight tracking-[-.04em] sm:text-5xl ${light ? 'text-white' : 'text-[var(--slot4-navy)]'}`}>{title}</h2>
    </div>
  )
}

function RoundArrow() {
  return <span className="wire-button-dot"><ArrowRight className="h-5 w-5" /></span>
}

export function EditableHomeHero(_props: HomeSectionProps) {
  return (
    <section className="wire-hero-bg relative min-h-[calc(100vh-7.2rem)] overflow-hidden text-white">
      <div className="absolute left-1/2 top-28 h-2 w-40 -translate-x-1/2 origin-center bg-[var(--slot4-accent)] wire-pulse-line" />
      <div className={`${dc.shell.section} flex min-h-[calc(100vh-7.2rem)] items-center justify-center py-20 text-center`}>
        <div className="max-w-6xl wire-float">
          <h1 className="text-5xl font-light leading-[1.22] tracking-[-.05em] sm:text-7xl lg:text-[5.25rem]">
            India&apos;s Trusted Source<br />
            <span className="font-light">for Corporate News</span>
          </h1>
          <p className="mx-auto mt-9 max-w-6xl text-xl leading-8 text-white sm:text-2xl">
            Our press release distribution services help you gain media coverage by sharing news with top agencies and outlets across India.
            <br className="hidden lg:block" />Grow visibility. Share announcements. Reach wider audiences.
          </p>
          <p className="mx-auto mt-10 max-w-5xl text-xs leading-6 text-white/86">
            {SITE_CONFIG.name} is an independent media distribution surface for public announcements, release pages, and brand updates.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="wire-button group inline-flex items-center gap-4 rounded-full bg-[var(--slot4-blue)] px-6 py-3 text-xl font-black text-white shadow-[0_18px_40px_rgba(0,0,0,.18)]">
              Submit a press release <RoundArrow />
            </Link>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail(_props: HomeSectionProps) {
  return null
}

export function EditableMagazineSplit(_props: HomeSectionProps) {
  return null
}

export function EditableTimeCollections(_props: HomeSectionProps) {
  return (
    <>
      <section className="bg-[linear-gradient(180deg,#292b74_0%,#3156a8_100%)] text-white">
        <div className={`${dc.shell.section} py-16 sm:py-24`}>
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.35fr] lg:items-start">
            <div>
              <SectionTitle title="Our Services" light />
              <p className="mt-5 max-w-2xl text-xl leading-8 text-white">We empower brands to craft precise press releases that inform, influence, and engage. If you have news to share, this newsroom can help present it with maximum visibility and impact.</p>
            </div>
            <div className="grid gap-7 md:grid-cols-2">
              {services.map((service, index) => (
                <Link key={service.title} href="/contact" className={`group wire-card-hover rounded-xl bg-white p-8 text-[var(--slot4-navy)] ${index === 0 ? 'md:-mt-4' : ''}`}>
                  <div className="flex items-center gap-6">
                    <span className="grid h-28 w-28 shrink-0 place-items-center rounded-full bg-[#e9eff8] text-[var(--slot4-blue)]"><service.icon className="h-10 w-10" /></span>
                    <div className="min-w-0">
                      <h3 className="text-2xl font-black leading-tight">{service.title}</h3>
                      <p className="mt-3 line-clamp-2 text-lg leading-7 text-slate-800">{service.body}</p>
                    </div>
                    <RoundArrow />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${dc.shell.section} py-16 sm:py-20`}>
          <SectionTitle title="Our Key Clients" />
          <div className="wire-marquee mt-12">
            <div className="wire-marquee-track items-center gap-20 py-4">
              {[...clients, ...clients].map((client, index) => (
                <span key={`${client}-${index}`} className="shrink-0 text-4xl font-black tracking-[-.04em] text-slate-900">{client}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8fd]">
        <div className={`${dc.shell.section} py-16 sm:py-20`}>
          <SectionTitle title="What Our Clients Say" />
          <div className="mt-8 overflow-hidden">
            <div className="wire-testimonial-track gap-9">
              {[...testimonials, ...testimonials].map(([quote, author], index) => (
                <figure key={`${author}-${index}`} className="w-[min(42rem,86vw)] shrink-0 rounded-xl border-2 border-[var(--slot4-navy)] bg-white/70 p-8">
                  <blockquote className="grid grid-cols-[56px_1fr] gap-5 text-xl leading-8 text-slate-900">
                    <span className="text-7xl font-black leading-none text-[var(--slot4-blue)]">“</span>
                    <span>{quote}</span>
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3 pl-20 text-lg font-black text-slate-950"><span className="h-1 w-14 bg-[var(--slot4-navy)]" /> {author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8fd]">
        <div className={`${dc.shell.section} py-16 sm:py-20`}>
          <SectionTitle title="Let's Get Your Story Heard" />
          <p className="mt-7 text-xl leading-8 text-black">Want tomorrow&apos;s media coverage? Register with us to get your press release distributed across top-tier media channels.</p>
          <div className="mt-12 grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
            <div className="relative min-h-[29rem] overflow-hidden rounded-none bg-[var(--slot4-media-bg)]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#e8f1fb_0%,#ffffff_48%,#dbe7fb_100%)]" />
              <div className="absolute left-1/2 top-1/2 grid h-52 w-52 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-center text-2xl font-black text-[var(--slot4-navy)] shadow-[0_24px_70px_rgba(25,23,85,.14)]">Your story<br />goes here</div>
              <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-[#69cfd2]/75" />
              <div className="absolute bottom-0 right-0 h-24 w-44 bg-[radial-gradient(circle,#f2bb3f_2px,transparent_3px)] [background-size:22px_22px]" />
            </div>
            <EditableContactLeadForm />
          </div>
        </div>
      </section>
    </>
  )
}

export function EditableHomeCta() {
  return null
}
