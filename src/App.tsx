import { useSyncExternalStore } from "react"

import { SiteFooter } from "@/components/layout/SiteFooter"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { CtaSection } from "@/components/landing/CtaSection"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { HeroSection } from "@/components/landing/HeroSection"
import { LibrarySection } from "@/components/landing/LibrarySection"
import { WatchFreeSection } from "@/components/landing/WatchFreeSection"
import { PlatformsSection } from "@/components/landing/PlatformsSection"
import { ScreensSection } from "@/components/landing/ScreensSection"
import { pathnameToRoute } from "@/lib/routes"
import { PrivacyPage } from "@/pages/PrivacyPage"
import { TermsPage } from "@/pages/TermsPage"

function subscribeToPathname(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange)
  return () => window.removeEventListener("popstate", onStoreChange)
}

function getPathnameSnapshot() {
  return window.location.pathname
}

function LandingPage() {
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
        <WatchFreeSection />
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

export function App() {
  const pathname = useSyncExternalStore(
    subscribeToPathname,
    getPathnameSnapshot,
    () => "/",
  )
  const route = pathnameToRoute(pathname)

  if (route === "privacy") return <PrivacyPage />
  if (route === "terms") return <TermsPage />
  return <LandingPage />
}

export default App
