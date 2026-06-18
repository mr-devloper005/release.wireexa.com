import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowUp, ChevronLeft } from 'lucide-react'
import { EditableNavbar } from '@/editable/shell/EditableNavbar'
import { EditableFooter } from '@/editable/shell/EditableFooter'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

export function EditableSiteShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div id="top" className={`${dc.shell.page} flex min-h-screen flex-col ${className}`}>
      <EditableNavbar />
      <div className="min-h-0 flex-1">{children}</div>
      <EditableFooter />
      <Link href="/" aria-label="Back to home" className="fixed right-0 top-1/2 z-40 hidden h-16 w-11 -translate-y-1/2 items-center justify-center rounded-l-full bg-[var(--slot4-navy)] text-white shadow-xl transition hover:bg-[var(--slot4-blue)] sm:flex">
        <ChevronLeft className="h-8 w-8" />
      </Link>
      <a href="#top" aria-label="Scroll to top" className="fixed bottom-5 right-5 z-40 grid h-[4.25rem] w-[4.25rem] place-items-center rounded-full bg-[var(--slot4-accent)] text-[var(--slot4-navy)] shadow-[0_16px_34px_rgba(25,23,85,.22)] transition hover:-translate-y-1 hover:bg-[#ffc64f]">
        <ArrowUp className="h-10 w-10 stroke-[3]" />
      </a>
    </div>
  )
}
