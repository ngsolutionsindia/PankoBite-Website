import { ScaledFrame } from "@/components/shared/ScaledFrame"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { mobileScreens } from "@/config/site-content"

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
            width={1920}
            height={1080}
            variant="screen-tv"
            label="Android TV — Detail & episodes"
            className="site-device-frame site-device-frame--tv"
          />
          <span className="site-screens-cap site-mono">ANDROID TV · DETAIL</span>
        </div>

        <div className="site-screens-phones">
          {mobileScreens.map((screen) => (
            <div key={screen.label} className="site-screens-phone-item">
              <ScaledFrame
                width={390}
                height={844}
                variant="screen-phone"
                label={`Mobile — ${screen.label}`}
                className="site-device-frame site-device-frame--phone"
              />
              <span className="site-screens-cap site-mono">{screen.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
