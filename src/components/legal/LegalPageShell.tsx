import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"

import { WordLogo } from "@/components/brand/Logo"
import { SiteFooter } from "@/components/layout/SiteFooter"

type LegalPageShellProps = {
  children: ReactNode
}

export function LegalPageShell({ children }: LegalPageShellProps) {
  return (
    <>
      <header className="legal-page-nav">
        <div className="site-container legal-page-nav-inner">
          <a href="/" className="legal-back" aria-label="Back to home">
            <ArrowLeft className="size-4" aria-hidden />
            Home
          </a>
          <WordLogo size={22} />
          <nav className="legal-page-links" aria-label="Legal documents">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </nav>
        </div>
      </header>
      <main className="legal-page-main">
        <div className="site-container legal-page-container">{children}</div>
      </main>
      <SiteFooter />
    </>
  )
}
