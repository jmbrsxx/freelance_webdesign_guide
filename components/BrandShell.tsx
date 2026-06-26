import Link from 'next/link'
import type { ReactNode } from 'react'

type BrandShellProps = {
  children: ReactNode
  compact?: boolean
}

export function BrandNav() {
  return (
    <nav className="sticky top-0 z-50 border-b-2 border-black bg-[#f6f2ec]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3 font-black uppercase tracking-tight text-black">
          <span className="grid h-9 w-9 place-items-center bg-black text-red-600">27</span>
          <span>Freelance Business Course</span>
        </Link>
        <div className="flex items-center gap-4 text-sm font-bold uppercase">
          <Link href="/free-course" className="hidden text-zinc-700 hover:text-red-700 sm:block">
            Preview
          </Link>
          <Link href="/paid-course" className="bg-red-700 px-4 py-2 text-white hover:bg-black">
            Get the course
          </Link>
        </div>
      </div>
    </nav>
  )
}

export function BrandFooter() {
  return (
    <footer className="border-t-2 border-black bg-black py-10 text-zinc-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-black uppercase text-white">Freelance Business Course</h3>
          <p className="mt-2 text-sm">A practical guide to building a sustainable freelance business.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/terms" className="hover:text-red-400">Terms</Link>
          <Link href="/privacy" className="hover:text-red-400">Privacy</Link>
          <Link href="/refund" className="hover:text-red-400">Refund</Link>
          <Link href="/contact" className="hover:text-red-400">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default function BrandShell({ children, compact = false }: BrandShellProps) {
  return (
    <div className="min-h-screen bg-[#f6f2ec] text-black">
      <BrandNav />
      <main className={`mx-auto max-w-6xl px-5 ${compact ? 'py-12' : 'py-16'}`}>
        {children}
      </main>
      <BrandFooter />
    </div>
  )
}
