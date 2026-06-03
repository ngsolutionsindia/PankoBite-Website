import { features } from "@/config/site-content"

export function FeaturesSection() {
  return (
    <section className="site-features" id="features">
      <div className="site-container">
        <div className="site-sec-head">
          <span className="site-eyebrow site-eyebrow--accent">
            WHY NG ANIME · 特徴
          </span>
          <h2 className="site-sec-title">
            Designed like a manga.
            <br />
            Runs like a flagship.
          </h2>
        </div>
        <div className="site-feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="site-feature-card halftone-fine">
                <div className="site-feature-icon">
                  <Icon className="size-[26px] text-accent" aria-hidden />
                </div>
                <span className="site-feature-jp site-jp">{feature.labelJa}</span>
                <h3 className="site-feature-title">{feature.title}</h3>
                <p className="site-feature-body">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
