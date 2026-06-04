import { WordLogo } from "@/components/brand/Logo"
import { footerColumns } from "@/config/site-content"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer-inner">
        <div className="site-footer-brand">
          <WordLogo size={22} />
          <p className="site-footer-tag">
            アニメ・ストリーム — stream anime on every screen.
          </p>
        </div>
        <div className="site-footer-cols">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <span className="site-footer-h">{column.title}</span>
              {column.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="site-container site-footer-base">
        <span className="site-mono">© 2026 NG ANIME · NG-BRAND-01</span>
        <span className="site-mono">MADE WITH 朱 INK</span>
      </div>
    </footer>
  )
}
