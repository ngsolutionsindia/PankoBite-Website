import { SiteFooter } from "@/components/layout/SiteFooter"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { CtaSection } from "@/components/landing/CtaSection"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { HeroSection } from "@/components/landing/HeroSection"
import { LibrarySection } from "@/components/landing/LibrarySection"
import { PlatformsSection } from "@/components/landing/PlatformsSection"
import { ScreensSection } from "@/components/landing/ScreensSection"

export function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <LibrarySection />
        <FeaturesSection />
        <ScreensSection />
        <PlatformsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
