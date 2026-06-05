import { StoreBadge } from "@/components/shared/StoreBadge"
import { apkDownloads } from "@/config/site-links"

export function CtaSection() {
  return (
    <section className="site-dlband" id="download">
      <div className="site-dlband-kanji site-jp" aria-hidden>
        観
      </div>
      <div className="halftone-fine site-dlband-dots" aria-hidden />
      <div className="site-container site-dlband-inner">
        <span className="site-eyebrow site-dlband-eyebrow">
          START WATCHING TONIGHT
        </span>
        <h2 className="site-dlband-title">
          Your next binge is
          <br />
          one download away.
        </h2>
        <p className="site-dlband-sub">
          Free to watch. No ads. Download the APK and sideload — no store required.
        </p>
        <div className="site-hero-ctas site-hero-ctas--center">
          <StoreBadge
            icon="tv"
            kicker="SIDELOAD"
            label={apkDownloads.tv.label}
            href={apkDownloads.tv.href}
            download={apkDownloads.tv.filename}
            appVariant="tv"
            placement="cta"
            primary
          />
          <StoreBadge
            icon="mobile"
            kicker="SIDELOAD"
            label={apkDownloads.mobile.label}
            href={apkDownloads.mobile.href}
            download={apkDownloads.mobile.filename}
            appVariant="mobile"
            placement="cta"
          />
        </div>
      </div>
    </section>
  )
}
