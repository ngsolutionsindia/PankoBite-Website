import { Star } from "lucide-react"

import { ScaledFrame } from "@/components/shared/ScaledFrame"
import { StoreBadge } from "@/components/shared/StoreBadge"
import { siteLinks } from "@/config/site-links"

export function HeroSection() {
  return (
    <header className="site-hero">
      <div className="site-hero-bg" aria-hidden />
      <div className="site-hero-scrim" aria-hidden />
      <div className="halftone-fine site-hero-dots" aria-hidden />
      <div className="site-hero-kanji site-jp" aria-hidden>
        動
      </div>

      <div className="site-container site-hero-grid">
        <div className="site-hero-copy">
          <div className="site-hero-eyebrow">
            <span className="site-stamp site-jp">配信中</span>
            <span className="site-eyebrow site-eyebrow--accent">
              STREAM ANIME · TV & MOBILE
            </span>
          </div>
          <h1 className="site-hero-title">
            Every series.
            <br />
            One <em>ink-clean</em> app.
          </h1>
          <p className="site-hero-sub">
            Thousands of subbed & dubbed titles, a manga-crafted interface, and
            your watch history that follows you from the big screen to your
            pocket. Built for Android TV remotes and phones alike.
          </p>
          <div className="site-hero-ctas">
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
            />
          </div>
          <div className="site-hero-meta">
            <span>
              <Star
                className="size-[15px] fill-accent text-accent"
                aria-hidden
              />
              4.9 · 60K ratings
            </span>
            <span className="dot" aria-hidden>
              ·
            </span>
            <span>12,000+ episodes</span>
            <span className="dot" aria-hidden>
              ·
            </span>
            <span>No ads on the story</span>
          </div>
        </div>

        <div className="site-hero-devices">
          <ScaledFrame
            width={1920}
            height={1080}
            variant="hero-tv"
            label="Android TV — Home"
            className="site-device-frame site-device-frame--tv"
          />
          <div className="site-hero-phone">
            <ScaledFrame
              width={390}
              height={844}
              variant="hero-phone"
              label="Mobile — Home"
              className="site-device-frame site-device-frame--phone"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
