import LightRays from "@/components/effects/LightRays"
import { ScaledFrame } from "@/components/shared/ScaledFrame"
import { StoreBadge } from "@/components/shared/StoreBadge"
import { apkDownloads } from "@/config/site-links"

export function HeroSection() {
  return (
    <header className="site-hero">
      <div className="site-hero-bg" aria-hidden />
      <div className="site-hero-scrim" aria-hidden />
      <LightRays
        className="site-hero-rays"
        raysOrigin="top-center"
        raysColor="#4f52b8"
        raysSpeed={1.5}
        lightSpread={1.9}
        rayLength={1.4}
        fadeDistance={1.1}
        followMouse
        mouseInfluence={0.1}
        noiseAmount={0.06}
        distortion={0.05}
      />
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
            <span className="site-hero-brand">PankoBite</span>
            <span className="site-hero-tagline">
              Every series.
              <br />
              One <em>ink-clean</em> app.
            </span>
          </h1>
          <p className="site-hero-sub">
            PankoBite is the free anime streaming app for Android TV and mobile —
            thousands of subbed & dubbed titles, a manga-crafted interface, and
            watch history that follows you from the big screen to your pocket.
          </p>
          <div className="site-hero-ctas">
            <StoreBadge
              icon="tv"
              kicker="SIDELOAD"
              label={apkDownloads.tv.label}
              href={apkDownloads.tv.href}
              download={apkDownloads.tv.filename}
              appVariant="tv"
              placement="hero"
              primary
            />
            <StoreBadge
              icon="mobile"
              kicker="SIDELOAD"
              label={apkDownloads.mobile.label}
              href={apkDownloads.mobile.href}
              download={apkDownloads.mobile.filename}
              appVariant="mobile"
              placement="hero"
            />
          </div>
          <div className="site-hero-meta">
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
          >
            <img
              src="/screenshots/tv-home.png"
              alt="PankoBite on Android TV showing the anime home browse screen"
              width={1920}
              height={1080}
              className="site-device-screenshot"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </ScaledFrame>
          <div className="site-hero-phone">
            <ScaledFrame
              width={1344}
              height={2992}
              variant="hero-phone"
              label="Mobile — Home"
              className="site-device-frame site-device-frame--phone"
            >
              <img
                src="/screenshots/mobile-home.png"
                alt="PankoBite mobile app home screen with anime recommendations"
                width={1344}
                height={2992}
                className="site-device-screenshot"
                loading="eager"
                decoding="async"
              />
            </ScaledFrame>
          </div>
        </div>
      </div>
    </header>
  )
}
