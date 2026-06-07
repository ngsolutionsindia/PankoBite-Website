import { Check } from "lucide-react"

import { watchFreeCards } from "@/config/site-content"

export function WatchFreeSection() {
  return (
    <section
      className="site-watch-free halftone-fine"
      id="watch-free"
      aria-labelledby="watch-free-heading"
    >
      <div className="site-container site-watch-free-inner">
        <div className="site-watch-free-copy">
          <span className="site-eyebrow site-eyebrow--accent">
            無料で視聴 · WATCH FOR FREE
          </span>
          <h2 id="watch-free-heading" className="site-watch-free-lines">
            <span className="site-watch-free-line">No ads.</span>
            <span className="site-watch-free-line">No sign-in.</span>
            <span className="site-watch-free-line site-watch-free-line--accent">
              No bullshit.
            </span>
          </h2>
          <p className="site-watch-free-foot site-mono">JUST PRESS PLAY.</p>
        </div>

        <ul className="site-watch-free-grid" aria-label="Why PankoBite is free">
          {watchFreeCards.map((card) => (
            <li key={card.title} className="site-watch-free-card">
              <span className="site-watch-free-card-check" aria-hidden>
                <Check className="size-4 text-accent" strokeWidth={2.5} />
              </span>
              <div className="site-watch-free-card-body">
                <span className="site-watch-free-card-jp site-jp">
                  {card.labelJa}
                </span>
                <h3 className="site-watch-free-card-title">{card.title}</h3>
                <p className="site-watch-free-card-desc">{card.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
