'use client'

import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Search', href: '/search' },
  { label: 'Login', href: '/login' },
  { label: 'Register', href: '/signup' },
]

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const visibleLinks = session ? footerLinks.filter((item) => item.href !== '/login' && item.href !== '/signup') : footerLinks

  return (
    <footer className="bg-[linear-gradient(180deg,#262b74_0%,#3156a8_100%)] text-white">
      <div className="mx-auto max-w-[1660px] px-4 py-12 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="wire-logo-mark">rw</span>
              <span className="text-3xl font-light tracking-[-.055em]"><span>release</span><span className="font-black">wire</span></span>
              <span className="sr-only">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-6 max-w-md text-base leading-7 text-white/72">
              Press release distribution, brand announcements, and media updates presented in a clean public newsroom.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {visibleLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full border border-white/18 px-5 py-3 text-center font-black transition hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)]">
                {item.label}
              </Link>
            ))}
            {session ? (
              <button type="button" onClick={logout} className="rounded-full border border-white/18 px-8 py-3 text-center font-black transition hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)]">
                Logout
              </button>
            ) : null}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/45 pt-6 text-sm text-white/70">
          Copyright © {year} {SITE_CONFIG.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
