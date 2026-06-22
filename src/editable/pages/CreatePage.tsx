'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, ImageIcon, Lock, PlusCircle, Send, Sparkles } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

type DraftPost = {
  id: string
  task: TaskKey
  title: string
  category: string
  summary: string
  url: string
  image: string
  body: string
  createdAt: string
}

const STORE_KEY = 'slot4:created-posts'

const taskIcon: Record<string, typeof FileText> = {
  article: FileText,
  listing: Sparkles,
  classified: PlusCircle,
  image: ImageIcon,
  profile: Sparkles,
  pdf: FileText,
  sbm: ArrowRight,
}

const fieldClass = 'rounded-xl border border-[var(--slot4-navy)]/35 bg-white px-5 py-4 text-sm font-bold text-[var(--slot4-navy)] outline-none transition placeholder:text-slate-400 focus:border-[var(--slot4-blue)] focus:ring-4 focus:ring-[var(--slot4-blue)]/10'

const saveDraft = (draft: DraftPost) => {
  try {
    const existing = JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]')
    const list = Array.isArray(existing) ? existing : []
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft, ...list].slice(0, 50)))
  } catch {
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft]))
  }
}

export default function CreatePage() {
  const { session } = useEditableLocalAuthSession()
  const enabledTasks = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled), [])
  const [task, setTask] = useState<TaskKey>((enabledTasks[0]?.key || 'article') as TaskKey)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [created, setCreated] = useState<DraftPost | null>(null)

  const activeTask = enabledTasks.find((item) => item.key === task) || enabledTasks[0]

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const draft: DraftPost = {
      id: `draft-${Date.now()}`,
      task,
      title: title.trim(),
      category: category.trim() || 'uncategorized',
      summary: summary.trim(),
      url: url.trim(),
      image: image.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
    }
    saveDraft(draft)
    setCreated(draft)
    setTitle('')
    setCategory('')
    setSummary('')
    setUrl('')
    setImage('')
    setBody('')
  }

  if (!session) {
    return (
      <EditableSiteShell>
        <main className="min-h-screen bg-[#f5f8fd] px-4 py-14 text-[var(--slot4-navy)] sm:px-6 lg:px-10">
          <section className="mx-auto grid max-w-6xl gap-8 rounded-2xl bg-white p-6 shadow-[0_30px_90px_rgba(25,23,85,0.10)] md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div className="wire-hero-bg flex h-full min-h-80 items-center justify-center rounded-2xl text-white">
              <div className="grid h-32 w-32 place-items-center rounded-full bg-white/12 ring-1 ring-white/25">
                <Lock className="h-16 w-16 opacity-90" />
              </div>
            </div>
            <div className="self-center">
              <span className="wire-yellow-rule" />
              <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-blue)]">{pagesContent.create.locked.badge}</p>
              <h1 className="mt-5 text-5xl font-light leading-tight tracking-[-0.055em] sm:text-7xl">{pagesContent.create.locked.title}</h1>
              <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-slate-600">{pagesContent.create.locked.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/login" className="wire-button group inline-flex items-center gap-3 rounded-full bg-[var(--slot4-blue)] px-6 py-3 text-sm font-black text-white">Login <span className="wire-button-dot"><ArrowRight className="h-4 w-4" /></span></Link>
                <Link href="/signup" className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--slot4-navy)] bg-white px-6 py-3 text-sm font-black text-[var(--slot4-blue)] transition hover:bg-[var(--slot4-navy)] hover:text-white">Register</Link>
              </div>
            </div>
          </section>
        </main>
      </EditableSiteShell>
    )
  }

  return (
    <EditableSiteShell>
      <main className="min-h-screen bg-[#f5f8fd] text-[var(--slot4-navy)]">
        <section className="wire-hero-bg text-white">
          <div className="mx-auto max-w-[1660px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20 xl:px-12">
            <span className="wire-yellow-rule" />
            <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-white/70">{pagesContent.create.hero.badge}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-light leading-tight tracking-[-0.055em] sm:text-7xl">{pagesContent.create.hero.title}</h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white/75">{pagesContent.create.hero.description}</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1660px] px-4 py-10 sm:px-6 lg:px-10 lg:py-16 xl:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <aside className="rounded-2xl bg-white p-6 shadow-sm lg:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-blue)]">Publishing workspace</p>
                  <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.045em]">Choose a content type</h2>
                </div>
                <span className="hidden rounded-full bg-[#eef3fb] px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-[var(--slot4-blue)] sm:inline">Step 1</span>
              </div>
              <p className="mt-5 text-base font-semibold leading-7 text-slate-600">Select the section where this announcement should live, then add release details on the right.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {enabledTasks.map((item) => {
                  const Icon = taskIcon[item.key] || FileText
                  const active = item.key === task
                  return (
                    <button key={item.key} type="button" onClick={() => setTask(item.key)} className={`wire-card-hover rounded-xl border p-5 text-left transition ${active ? 'border-[var(--slot4-blue)] bg-[var(--slot4-navy)] text-white shadow-[0_18px_40px_rgba(25,23,85,.18)]' : 'border-[var(--slot4-navy)]/15 bg-white text-[var(--slot4-navy)]'}`}>
                      <Icon className="h-5 w-5" />
                      <span className="mt-3 block text-sm font-black">{item.label}</span>
                      <span className={`mt-1 block text-xs font-semibold ${active ? 'text-white/70' : 'text-slate-500'}`}>{item.description}</span>
                    </button>
                  )
                })}
              </div>
            </aside>

            <form onSubmit={submit} className="rounded-2xl border border-[var(--slot4-navy)]/15 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-blue)]">Create {activeTask?.label || 'post'}</p>
                  <h2 className="mt-2 text-3xl font-black tracking-[-0.045em]">{pagesContent.create.formTitle}</h2>
                </div>
                <span className="rounded-full bg-[#eef3fb] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--slot4-blue)]">{session.name}</span>
              </div>

              <div className="mt-6 grid gap-4">
                <input className={fieldClass} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Post title" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={fieldClass} value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" />
                  <input className={fieldClass} value={url} onChange={(event) => setUrl(event.target.value)} placeholder="Website or source URL" />
                </div>
                <input className={fieldClass} value={image} onChange={(event) => setImage(event.target.value)} placeholder="Featured image URL" />
                <textarea className={`${fieldClass} min-h-24`} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Short summary" required />
                <textarea className={`${fieldClass} min-h-48`} value={body} onChange={(event) => setBody(event.target.value)} placeholder="Main content, details, notes, or description" required />
              </div>

              {created ? (
                <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                  <p className="flex items-center gap-2 text-sm font-black"><CheckCircle2 className="h-5 w-5" /> {pagesContent.create.successTitle}</p>
                  <p className="mt-1 text-sm font-semibold opacity-80">{created.title}</p>
                </div>
              ) : null}

              <button type="submit" className="mt-5 inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[var(--slot4-navy)] px-6 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--slot4-blue)]">
                <Send className="h-4 w-4" /> {pagesContent.create.submitLabel}
              </button>
            </form>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
