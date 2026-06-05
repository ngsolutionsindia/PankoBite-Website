import { logEvent } from "firebase/analytics"

import { appMeta } from "@/config/site-links"
import { getFirebaseAnalytics, initFirebaseAnalytics } from "@/lib/firebase"
import type { AppRoute } from "@/lib/routes"

export type AppDownloadVariant = "tv" | "mobile"

export type AppDownloadPlacement =
  | "hero"
  | "cta"
  | "platforms"
  | "footer"

const routeTitles: Record<AppRoute, string> = {
  home: "NG Anime — Home",
  privacy: "NG Anime — Privacy Policy",
  terms: "NG Anime — Terms of Service",
}

let ready = false

async function ensureAnalytics() {
  if (ready) return getFirebaseAnalytics()
  await initFirebaseAnalytics()
  ready = true
  return getFirebaseAnalytics()
}

export async function trackPageView(route: AppRoute) {
  const analytics = await ensureAnalytics()
  if (!analytics) return

  const pagePath = route === "home" ? "/" : `/${route}`
  logEvent(analytics, "page_view", {
    page_title: routeTitles[route],
    page_location: `${window.location.origin}${pagePath}`,
    page_path: pagePath,
  })
}

export async function trackAppDownload(
  variant: AppDownloadVariant,
  placement: AppDownloadPlacement,
) {
  const analytics = await ensureAnalytics()
  if (!analytics) return

  logEvent(analytics, "app_download", {
    app_variant: variant,
    placement,
    app_version: appMeta.versionName,
  })
}
