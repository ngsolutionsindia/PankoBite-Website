import { libraryShows, type ShowId } from "@/config/site-content"
import { showGradientStyle } from "@/lib/show-gradient"

function MarqueeCard({
  title,
  showId,
  poster,
}: {
  title: string
  showId: ShowId
  poster: string
}) {
  return (
    <div className="site-marquee-card" style={showGradientStyle(showId)}>
      <img
        src={poster}
        alt={`${title} anime poster`}
        width={200}
        height={300}
        className="site-marquee-card-img"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  )
}

export function LibrarySection() {
  const loop = [...libraryShows, ...libraryShows]

  return (
    <section className="site-marquee-sec">
      <div className="site-container site-marquee-head">
        <span className="site-eyebrow site-eyebrow--accent">
          THE LIBRARY · 作品ライブラリ
        </span>
        <h2 className="site-sec-title">From shōnen epics to slice-of-life.</h2>
      </div>
      <div className="site-marquee">
        <div className="site-marquee-track">
          {loop.map((show, index) => (
            <MarqueeCard
              key={`${show.id}-${index}`}
              title={show.title}
              showId={show.id}
              poster={show.poster}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
