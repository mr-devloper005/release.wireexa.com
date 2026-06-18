import Link from 'next/link'
import { ArrowRight, BarChart3, Megaphone, PieChart, Search, Send, ShieldCheck, TrendingUp } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { CompactIndexCard, getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref, RailPostCard } from '@/editable/cards/PostCards'

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

function safePosts(posts: SitePost[]) {
  return posts.filter((post) => post && (post.slug || post.id) && post.title)
}

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

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const release = safePosts(posts)[0]
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-16 sm:py-20`}>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <SectionTitle title="News Releases" />
            {release ? (
              <Link href={postHref(primaryTask, release, primaryRoute)} className="group mt-8 block max-w-6xl">
                <p className="text-base text-slate-500">{release.publishedAt ? new Date(release.publishedAt).toLocaleString() : 'Latest update'}</p>
                <h2 className="mt-3 text-2xl font-black leading-tight tracking-[-.035em] text-[var(--slot4-navy)] sm:text-3xl">{release.title}</h2>
                <p className="mt-3 line-clamp-2 text-xl leading-8 text-slate-800">{getEditableExcerpt(release, 150) || 'Read the complete announcement and related media details.'}</p>
              </Link>
            ) : (
              <div className="mt-8 rounded-3xl border border-dashed border-[var(--slot4-navy)]/20 bg-[var(--slot4-page-bg)] p-8">
                <h2 className="text-2xl font-black text-[var(--slot4-navy)]">No releases published yet</h2>
                <p className="mt-2 text-slate-600">New media announcements will appear here automatically.</p>
              </div>
            )}
          </div>
          <Link href="/search" className="wire-button group inline-flex items-center gap-4 self-start rounded-full border-2 border-[var(--slot4-navy)] bg-white px-6 py-3 text-xl font-black text-[var(--slot4-blue)]">
            See all news <RoundArrow />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const items = safePosts(posts)
  const featured = items.slice(1, 5)
  if (!featured.length) return null
  return (
    <section className="bg-[#f4f7fc]">
      <div className={`${dc.shell.section} py-16 sm:py-20`}>
        <SectionTitle title="Featured News" />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          {featured[0] ? (
            <Link href={postHref(primaryTask, featured[0], primaryRoute)} className="group wire-card-hover overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--slot4-media-bg)]">
                <img src={getEditablePostImage(featured[0])} alt={featured[0].title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--slot4-blue)]">Featured release</p>
                <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-.04em] text-[var(--slot4-navy)]">{featured[0].title}</h3>
                <p className="mt-3 line-clamp-3 text-lg leading-8 text-slate-600">{getEditableExcerpt(featured[0], 210)}</p>
              </div>
            </Link>
          ) : null}
          <div className="grid gap-6">
            {featured.slice(1, 3).map((post, index) => (
              <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group wire-card-hover grid overflow-hidden rounded-xl bg-white shadow-sm sm:grid-cols-[44%_1fr]">
                <div className="relative min-h-56 overflow-hidden bg-[var(--slot4-media-bg)]">
                  <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--slot4-blue)]">0{index + 1} / {getEditableCategory(post)}</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-[var(--slot4-navy)]">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-slate-600">{getEditableExcerpt(post, 140)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="wire-marquee mt-8">
          <div className="wire-marquee-track gap-5">
            {[...items.slice(4, 12), ...items.slice(4, 12)].map((post, index) => (
              <div key={`${post.id || post.slug}-${index}`} className="w-[270px] shrink-0">
                <RailPostCard post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const items = safePosts(collected.length ? collected : posts)
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
              <img src={items[0] ? getEditablePostImage(items[0]) : '/placeholder.svg?height=900&width=1200'} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-[#69cfd2]/75" />
              <div className="absolute bottom-0 right-0 h-24 w-44 bg-[radial-gradient(circle,#f2bb3f_2px,transparent_3px)] [background-size:22px_22px]" />
            </div>
            <EditableContactLeadForm />
          </div>
        </div>
      </section>

      {items.length ? (
        <section className="bg-white">
          <div className={`${dc.shell.section} py-16`}>
            <div className="grid gap-10 lg:grid-cols-[1fr_.7fr]">
              <div>
                <SectionTitle label="More updates" title="The briefing" />
                <div className="mt-6 grid gap-3">
                  {items.slice(0, 5).map((post, index) => <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
                </div>
              </div>
              <form action="/search" className="self-start rounded-2xl border border-[var(--slot4-navy)]/15 bg-[#f5f8fd] p-7 shadow-sm">
                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[.2em] text-[var(--slot4-blue)]"><Search className="h-4 w-4" /> Search releases</div>
                <input name="q" placeholder="Search stories" className="mt-5 h-14 w-full rounded-xl border border-[var(--slot4-navy)]/20 bg-white px-4 outline-none focus:border-[var(--slot4-blue)]" />
                <button className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--slot4-navy)] px-5 py-3 font-black text-white">Search <ArrowRight className="h-4 w-4" /></button>
              </form>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}

export function EditableHomeCta() {
  return null
}
