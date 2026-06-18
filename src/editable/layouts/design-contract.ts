import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#f5f8fd',
  '--slot4-page-text': '#080845',
  '--slot4-panel-bg': '#edf3fb',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#39405f',
  '--slot4-soft-muted-text': '#6f7790',
  '--slot4-accent': '#f2bb3f',
  '--slot4-accent-fill': '#f2bb3f',
  '--slot4-accent-soft': '#fff3cf',
  '--slot4-dark-bg': '#191755',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#e8eef8',
  '--slot4-cream': '#f5f8fd',
  '--slot4-warm': '#ffffff',
  '--slot4-lavender': '#3156a8',
  '--slot4-gray': '#eef2f8',
  '--slot4-blue': '#3156a8',
  '--slot4-navy': '#191755',
  '--slot4-navy-2': '#292b74',
  '--slot4-body-gradient': 'linear-gradient(180deg, #f5f8fd 0%, #ffffff 48%, #eef3fb 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-[#191755]/15',
  darkBorder: 'border-white/20',
  shadow: 'shadow-[0_10px_30px_rgba(17,17,17,0.08)]',
  shadowStrong: 'shadow-[0_24px_70px_rgba(17,17,17,0.18)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.78))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1620px] px-4 sm:px-6 lg:px-10 xl:px-12',
    sectionY: 'py-12 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-px bg-black/15 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start',
    rail: 'flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[230px] shrink-0 snap-start sm:w-[260px]',
  },
  type: {
    eyebrow: 'text-[11px] font-black uppercase tracking-[0.2em]',
    heroTitle: 'text-4xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[5.4rem]',
    sectionTitle: 'text-3xl font-black leading-none tracking-[-0.045em] sm:text-4xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    soft: `border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: `inline-flex items-center justify-center gap-3 rounded-full bg-[var(--slot4-blue)] px-6 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(49,86,168,0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--slot4-navy)]`,
    secondary: `inline-flex items-center justify-center gap-3 rounded-full border-2 border-[var(--slot4-navy)] bg-white px-6 py-3 text-sm font-black text-[var(--slot4-blue)] transition hover:-translate-y-0.5 hover:bg-[var(--slot4-navy)] hover:text-white`,
    accent: `inline-flex items-center justify-center gap-3 rounded-full bg-[var(--slot4-blue)] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[var(--slot4-navy)]`,
  },
  media: {
    frame: `relative overflow-hidden ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(17,17,17,0.14)]',
    fade: 'transition duration-300 hover:opacity-75',
  },
} as const

export const aiLayoutRules = [
  'All visible layout decisions belong inside src/editable; keep data, SEO, API, and route logic untouched.',
  'Use a Business Wire inspired navy masthead, deep blue panels, yellow accents, rounded release cards, and strong media distribution sections.',
  'Keep dynamic post fetching intact and never replace backend posts with mock arrays.',
  'Use postHref() for all post links so route aliases and task-specific detail pages remain functional.',
  'Prioritize readable desktop and mobile layouts with broad story columns and a focused long-form article measure.',
  'Branding must remain dynamic from SITE_CONFIG; never hardcode a reference publication name or logo.',
] as const
