'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Send story ideas, corrections, source material, and publication questions.' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Discuss distribution, syndication, newsroom collaborations, and campaigns.' },
  { icon: Mail, title: 'General support', body: 'Reach the team for account, publishing, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f5f8fd] text-[var(--slot4-navy)]">
        <section className="wire-hero-bg text-white">
          <div className="mx-auto max-w-[1660px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20 xl:px-12">
            <span className="wire-yellow-rule" />
            <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-white/70">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-5xl text-5xl font-light leading-tight tracking-[-0.055em] sm:text-7xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-3xl border-l-4 border-[var(--slot4-accent)] pl-5 text-lg font-semibold leading-8 text-white/76">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1660px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-10 lg:py-20 xl:px-12">
          <aside className="grid gap-5">
            {desks.map((desk, index) => (
              <div key={desk.title} className="wire-card-hover rounded-2xl bg-white p-7 shadow-sm sm:p-9">
                <div className="flex items-center justify-between"><desk.icon className="h-6 w-6 text-[var(--slot4-blue)]" /><span className="text-xs font-black text-[var(--slot4-blue)]">0{index + 1}</span></div>
                <h2 className="mt-6 text-3xl font-black">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-10 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-blue)]">Send a message</p>
            <h2 className="mt-3 text-4xl font-black">{pagesContent.contact.formTitle}</h2>
            <div className="mt-8">
            <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
