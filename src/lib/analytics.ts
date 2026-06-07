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

/** Separate event names so Firebase / GA4 lists TV vs mobile without custom dimensions. */
export const appDownloadEventNames = {
  tv: "app_download_tv",
  mobile: "app_download_mobile",
} as const satisfies Record<AppDownloadVariant, string>

const routeTitles: Record<AppRoute, string> = {
  home: "PankoBite — Home",
  privacy: "PankoBite — Privacy Policy",
  terms: "PankoBite — Terms of Service",
}

let ready = false

async function ensureAnalytics() {
  if (ready) return getFirebaseAnalytics()
  await initFirebaseAnalytics()
  ready = true
  return getFirebaseAnalytics()
}

function logAppDownload(
  variant: AppDownloadVariant,
  placement: AppDownloadPlacement,
) {
  const analytics = getFirebaseAnalytics()
  if (!analytics) return

  logEvent(analytics, appDownloadEventNames[variant], {
    placement,
    app_version: appMeta.versionName,
  })
}

export async function trackPageView(route: AppRoute) {
  const analytics = await ensureAnalytics()
  if (!analytics) return

  const pagePath = route === "home" ? "/" : `/${route}`
  logEvent(analytics, "page_view", {
    page_title: routeTitles[route],
    page_location: `${globalThis.location.origin}${pagePath}`,
    page_path: pagePath,
  })
}

/** Logs a download click. Returns true when the event was queued synchronously. */
export function trackAppDownload(
  variant: AppDownloadVariant,
  placement: AppDownloadPlacement,
): boolean {
  const analytics = getFirebaseAnalytics()
  if (analytics) {
    logAppDownload(variant, placement)
    return true
  }

  void ensureAnalytics().then((readyAnalytics) => {
    if (readyAnalytics) logAppDownload(variant, placement)
  })
  return false
}

const DOWNLOAD_NAV_DELAY_MS = 300

export function followDownloadLink(
  event: { preventDefault(): void },
  href: string,
  variant: AppDownloadVariant,
  placement: AppDownloadPlacement,
) {
  if (!href.startsWith("http")) {
    trackAppDownload(variant, placement)
    return
  }

  event.preventDefault()
  trackAppDownload(variant, placement)
  globalThis.setTimeout(() => {
    globalThis.location.assign(href)
  }, DOWNLOAD_NAV_DELAY_MS)
}
