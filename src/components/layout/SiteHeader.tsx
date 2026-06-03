import { Download } from "lucide-react"

import { WordLogo } from "@/components/brand/Logo"
import { navLinks } from "@/config/site-content"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <nav className="site-nav">
      <div className="site-container site-nav-inner">
        <WordLogo size={24} />
        <div className="site-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn("site-nav-link-hide-sm")}
            >
              {link.label}
            </a>
          ))}
          <a href="#download" className="site-nav-cta">
            <Download className="size-[17px]" strokeWidth={1.8} aria-hidden />
            Get the app
          </a>
        </div>
      </div>
    </nav>
  )
}
