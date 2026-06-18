import Link from 'next/link'
import { ArrowRight, CheckCircle2, Radio, ShieldCheck } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const highlights = [
  { icon: Radio, title: 'Media-ready releases', text: 'Clear announcement pages designed for public updates, launch notes, and brand visibility.' },
  { icon: ShieldCheck, title: 'Reliable presentation', text: 'Structured content blocks keep posts readable even when optional images or summaries are missing.' },
  { icon: CheckCircle2, title: 'Simple discovery', text: 'Search, categories, related posts, and responsive layouts help readers move through updates quickly.' },
]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f5f8fd] text-[var(--slot4-navy)]">
        <section className="wire-hero-bg text-white">
          <div className="mx-auto max-w-[1660px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24 xl:px-12">
            <span className="wire-yellow-rule" />
            <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-white/70">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-light leading-tight tracking-[-0.055em] sm:text-7xl">
              Media distribution built for clear stories.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-white/78">{pagesContent.about.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1660px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:py-20 xl:px-12">
          <article className="rounded-2xl bg-white p-7 shadow-sm sm:p-10 lg:p-14">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--slot4-blue)]">About {SITE_CONFIG.name}</p>
            <div className="article-content mt-8">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <Link href="/contact" className="wire-button group mt-8 inline-flex items-center gap-4 rounded-full bg-[var(--slot4-blue)] px-6 py-3 text-lg font-black text-white">
              Contact us <span className="wire-button-dot"><ArrowRight className="h-5 w-5" /></span>
            </Link>
          </article>

          <aside className="grid gap-5">
            {highlights.map((item, index) => (
              <div key={item.title} className="wire-card-hover rounded-2xl bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-[#e9eff8] text-[var(--slot4-blue)]"><item.icon className="h-7 w-7" /></span>
                  <span className="text-sm font-black text-[var(--slot4-blue)]">0{index + 1}</span>
                </div>
                <h2 className="mt-6 text-3xl font-black leading-tight">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
