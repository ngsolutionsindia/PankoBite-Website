import { ScaledFrame } from "@/components/shared/ScaledFrame"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { mobileScreens, tvDetailScreen } from "@/config/site-content"

export function ScreensSection() {
  return (
    <section className="site-screens" id="screens">
      <div className="site-container">
        <SectionHeader
          label="A LOOK INSIDE · 画面"
          title="Two screens. One identity."
          lead="The same ink-and-paper system scales from a 65-inch living-room TV down to a phone in portrait — every pixel deliberate."
          centered
        />

        <div className="site-screens-tv">
          <ScaledFrame
            width={tvDetailScreen.width}
            height={tvDetailScreen.height}
            variant="screen-tv"
            label={tvDetailScreen.alt}
            className="site-device-frame site-device-frame--tv"
          >
            <img
              src={tvDetailScreen.src}
              alt={tvDetailScreen.alt}
              width={tvDetailScreen.width}
              height={tvDetailScreen.height}
              className="site-device-screenshot"
              loading="lazy"
              decoding="async"
            />
          </ScaledFrame>
          <span className="site-screens-cap site-mono">
            {tvDetailScreen.caption}
          </span>
        </div>

        <div className="site-screens-phones">
          {mobileScreens.map((screen) => (
            <div key={screen.label} className="site-screens-phone-item">
              <ScaledFrame
                width={screen.width}
                height={screen.height}
                variant="screen-phone"
                label={screen.alt}
                className="site-device-frame site-device-frame--phone site-device-frame--screens-phone"
              >
                <img
                  src={screen.src}
                  alt={screen.alt}
                  width={screen.width}
                  height={screen.height}
                  className="site-device-screenshot site-device-screenshot--blend"
                  loading="lazy"
                  decoding="async"
                />
              </ScaledFrame>
              <span className="site-screens-cap site-mono">{screen.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
