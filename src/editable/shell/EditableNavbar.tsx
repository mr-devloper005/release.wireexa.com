'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CircleUserRound, Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Search', href: '/search' },
  { label: 'Login', href: '/login' },
]

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const visibleLinks = session ? navLinks.filter((item) => item.href !== '/login') : navLinks

  return (
    <header className="sticky top-0 z-50 bg-[var(--slot4-navy)] text-white shadow-[0_1px_0_rgba(255,255,255,.08)]">
      <div className="mx-auto grid min-h-[7.2rem] max-w-[1660px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex items-center gap-4 lg:hidden">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link href="/" className="flex min-w-0 items-center gap-3 justify-self-start">
          <img src="/favicon.png" alt="" className="h-11 w-11 rounded-full bg-white object-contain p-1" />
          <span className="max-w-[42vw] truncate text-2xl font-light tracking-[-.055em] sm:text-4xl">
            <span className="font-light">release</span><span className="font-black">wire</span>
          </span>
          <span className="sr-only">{SITE_CONFIG.name}</span>
        </Link>

        <nav className="hidden items-center justify-center gap-8 text-[.95rem] font-black lg:flex">
          {visibleLinks.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-[var(--slot4-accent)]">{item.label}</Link>)}
        </nav>

        <div className="flex items-center justify-end gap-3 sm:gap-4">
          {session ? (
            <>
              <span className="hidden max-w-40 truncate text-sm font-black text-white/85 sm:inline">Hi, {session.name}</span>
              <Link href="/create" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-black transition hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)] sm:inline-flex">Create</Link>
              <button type="button" onClick={logout} className="rounded-full bg-[var(--slot4-blue)] px-4 py-2 text-sm font-black text-white transition hover:bg-[var(--slot4-accent)] hover:text-[var(--slot4-navy)]">Logout</button>
            </>
          ) : (
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-[var(--slot4-blue)] px-3 py-2 text-sm font-black text-white sm:px-4">
              <CircleUserRound className="h-5 w-5" /> Register
            </Link>
          )}
          <Link href="/search" aria-label="Search" className="hidden h-11 w-11 items-center justify-center rounded-full lg:flex"><Search className="h-5 w-5 text-white/75 transition hover:text-[var(--slot4-accent)]" /></Link>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/15 bg-[var(--slot4-navy)] px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {[...visibleLinks, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Register', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl bg-white/8 px-4 py-3 text-sm font-black">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-2xl bg-white/8 px-4 py-3 text-left text-sm font-black">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
