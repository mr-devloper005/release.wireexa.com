import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f5f8fd] text-[var(--slot4-navy)]">
        <section className="mx-auto grid min-h-[calc(100vh-7.2rem)] max-w-[1660px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-20 xl:px-12">
          <div className="flex flex-col justify-center rounded-2xl bg-white p-7 shadow-sm sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-blue)]">Create account</p>
            <h1 className="mt-3 text-4xl font-black">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 border-t border-[var(--slot4-navy)]/15 pt-5 text-sm text-slate-600">Already have an account? <Link href="/login" className="font-black text-[var(--slot4-blue)] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="wire-hero-bg flex flex-col justify-center rounded-2xl p-8 text-white sm:p-12 lg:p-16">
            <span className="wire-yellow-rule" />
            <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-white/70">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-5xl font-light leading-tight tracking-[-0.055em] sm:text-7xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-lg font-semibold leading-8 text-white/75">{pagesContent.auth.signup.description}</p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
