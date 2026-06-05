import { Check, Smartphone, Tv } from "lucide-react"

import { SectionHeader } from "@/components/shared/SectionHeader"
import { StoreBadge } from "@/components/shared/StoreBadge"
import { platformCards } from "@/config/site-content"
import { apkDownloads } from "@/config/site-links"

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
            const isTv = platform.id === "tv"
            const apk = isTv ? apkDownloads.tv : apkDownloads.mobile

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
                    icon={platform.id === "tv" ? "tv" : "mobile"}
                    kicker={platform.apkKicker}
                    label={apk.label}
                    href={apk.href}
                    download={apk.filename}
                    appVariant={isTv ? "tv" : "mobile"}
                    placement="platforms"
                    primary
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
