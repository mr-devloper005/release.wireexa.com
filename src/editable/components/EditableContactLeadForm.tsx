'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function EditableContactLeadForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')
    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data?.message || 'Unable to send your message.')
      setStatus('success')
      setMessage(data?.message || 'Thanks. Your message has been received.')
      form.reset()
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Unable to send your message.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field name="name" label="Name" placeholder="Name *" required />
        <Field name="phone" label="Contact" placeholder="Contact *" required />
      </div>
      <Field name="email" type="email" label="Email" placeholder="Email *" required />
      <div className="grid gap-4 md:grid-cols-2">
        <Field name="subject" label="Company" placeholder="Company *" required />
        <label className="sr-only" htmlFor="region">Region</label>
        <select id="region" name="region" defaultValue="" className="h-[3.65rem] rounded-xl border border-[var(--slot4-navy)] bg-white px-6 text-xl text-slate-400 outline-none transition focus:border-[var(--slot4-blue)]">
          <option value="" disabled>Region *</option>
          <option>North & East</option>
          <option>West</option>
          <option>South</option>
          <option>International</option>
        </select>
      </div>
      <label className="sr-only" htmlFor="lead-message">Message</label>
      <label className="grid">
        <textarea id="lead-message" name="message" required rows={6} placeholder="Message *" className="rounded-xl border border-[var(--slot4-navy)] bg-white px-6 py-5 text-xl outline-none transition placeholder:text-slate-400 focus:border-[var(--slot4-blue)]" />
      </label>
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {message ? (
        <div className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm font-bold ${status === 'success' ? 'border-emerald-800 bg-emerald-50 text-emerald-800' : 'border-red-700 bg-red-50 text-red-700'}`}>
          {status === 'success' ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : null}
          <span>{message}</span>
        </div>
      ) : null}
      <button type="submit" disabled={status === 'submitting'} className="wire-button group mt-3 inline-flex h-[3.65rem] w-fit items-center justify-center gap-4 rounded-full border-2 border-[var(--slot4-navy)] bg-transparent px-6 text-xl font-black text-[var(--slot4-blue)] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        Get in touch <span className="wire-button-dot"><span aria-hidden>→</span></span>
      </button>
    </form>
  )
}

function Field({ name, label, type = 'text', placeholder, required = false }: { name: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <label className="grid">
      <span className="sr-only">{label}</span>
      <input name={name} type={type} required={required} placeholder={placeholder} className="h-[3.65rem] rounded-xl border border-[var(--slot4-navy)] bg-white px-6 text-xl outline-none transition placeholder:text-slate-400 focus:border-[var(--slot4-blue)]" />
    </label>
  )
}
