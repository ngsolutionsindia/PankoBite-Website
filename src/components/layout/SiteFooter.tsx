import { WordLogo } from "@/components/brand/Logo"
import { footerColumns } from "@/config/site-content"
import { apkDownloads } from "@/config/site-links"
import { followDownloadLink } from "@/lib/analytics"

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
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => {
                    if (link.href === apkDownloads.tv.href) {
                      followDownloadLink(event, link.href, "tv", "footer")
                    } else if (link.href === apkDownloads.mobile.href) {
                      followDownloadLink(event, link.href, "mobile", "footer")
                    }
                  }}
                >
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
