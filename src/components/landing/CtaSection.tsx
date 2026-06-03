import { Grid3x3 } from "lucide-react"

import { StoreBadge } from "@/components/shared/StoreBadge"
import { siteLinks } from "@/config/site-links"

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
          Free to start. No ads interrupting the story. Cancel anytime.
        </p>
        <div className="site-hero-ctas site-hero-ctas--center">
          <StoreBadge
            icon="tv"
            kicker="DOWNLOAD FOR"
            label="Android TV"
            href={siteLinks.playStoreTv}
            primary
          />
          <StoreBadge
            icon="play"
            kicker="GET IT ON"
            label="Google Play"
            href={siteLinks.playStoreMobile}
            primary
          />
        </div>
        <div className="site-dlband-scan">
          <div className="site-qr" aria-hidden>
            <Grid3x3
              className="size-[34px] text-primary-foreground"
              strokeWidth={1.2}
            />
          </div>
          <span className="site-mono">
            SCAN ON YOUR TV
            <br />
            TO INSTALL INSTANTLY
          </span>
        </div>
      </div>
    </section>
  )
}
