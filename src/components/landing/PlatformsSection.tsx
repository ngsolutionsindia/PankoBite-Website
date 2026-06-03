import { Check, Smartphone, Tv } from "lucide-react"

import { SectionHeader } from "@/components/shared/SectionHeader"
import { StoreBadge } from "@/components/shared/StoreBadge"
import { platformCards } from "@/config/site-content"
import { siteLinks } from "@/config/site-links"

const platformIcons = {
  tv: Tv,
  mobile: Smartphone,
} as const

export function PlatformsSection() {
  return (
    <section className="site-platforms" id="platforms">
      <div className="site-container">
        <SectionHeader
          label="GET IT EVERYWHERE · 対応機器"
          title="Pick your screen."
          centered
        />
        <div className="site-plat-grid">
          {platformCards.map((platform) => {
            const Icon = platformIcons[platform.id]
            const playHref =
              platform.id === "tv"
                ? siteLinks.playStoreTv
                : siteLinks.playStoreMobile
            const apkHref =
              platform.id === "tv" ? siteLinks.apkTv : siteLinks.apkMobile

            return (
              <div key={platform.id} className="site-plat-card">
                <div className="site-plat-icon">
                  <Icon
                    className="size-10 text-foreground"
                    strokeWidth={1.4}
                    aria-hidden
                  />
                </div>
                <span className="site-plat-jp site-jp">{platform.labelJa}</span>
                <h3 className="site-plat-title">{platform.title}</h3>
                <p className="site-plat-body">{platform.description}</p>
                <ul className="site-plat-list">
                  {platform.features.map((item) => (
                    <li key={item}>
                      <Check
                        className="size-4 shrink-0 text-accent"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="site-plat-ctas">
                  <StoreBadge
                    icon="play"
                    kicker={platform.playStoreKicker}
                    label={platform.playStoreLabel}
                    href={playHref}
                    primary
                  />
                  <StoreBadge
                    icon="download"
                    kicker={platform.apkKicker}
                    label={platform.apkLabel}
                    href={apkHref}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
