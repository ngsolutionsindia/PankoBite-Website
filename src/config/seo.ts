import { appMeta } from "@/config/site-links"
import type { AppRoute } from "@/lib/routes"

/** Canonical production origin (Firebase Hosting). */
export const siteOrigin = "https://pankobite.web.app"

export const siteSeo = {
  siteName: appMeta.name,
  locale: "en_US",
  twitterCard: "summary_large_image" as const,
  /** Default share image — 1200×630 recommended. */
  ogImagePath: "/og-image.jpg",
  ogImageAlt: "PankoBite — stream anime on Android TV and mobile",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  themeColor: "#0a0a0c",
  keywords: [
    "PankoBite",
    "Panko Bite",
    "anime streaming",
    "Android TV anime",
    "free anime app",
    "anime APK",
    "sub and dub",
    "watch anime on TV",
    "Android anime app",
  ],
} as const

type RouteSeo = {
  title: string
  description: string
  /** Path without origin, e.g. "/" or "/privacy". */
  path: string
  /** When false, ask crawlers not to index (rarely needed). */
  index?: boolean
}

export const routeSeo: Record<AppRoute, RouteSeo> = {
  home: {
    title: "PankoBite — Free Anime App for Android TV & Mobile",
    description:
      "PankoBite is a free anime streaming app for Android TV and phones. Download the APK — no ads, no sign-in, sub & dub, continue watching across devices.",
    path: "/",
  },
  privacy: {
    title: "Privacy Policy · PankoBite",
    description:
      "How PankoBite handles device data, Firebase analytics, and third-party network requests. No accounts or central profiles.",
    path: "/privacy",
  },
  terms: {
    title: "Terms & Conditions · PankoBite",
    description:
      "Terms of use for the PankoBite anime streaming app and website, including third-party content and sideloading notices.",
    path: "/terms",
  },
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`
  if (normalized === "/") return siteOrigin
  return `${siteOrigin}${normalized}`
}

export function seoForRoute(route: AppRoute): RouteSeo & {
  canonical: string
  ogImage: string
} {
  const meta = routeSeo[route]
  return {
    ...meta,
    canonical: absoluteUrl(meta.path),
    ogImage: absoluteUrl(siteSeo.ogImagePath),
  }
}

/** JSON-LD for the marketing site + Android apps. */
export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteOrigin}/#website`,
        url: siteOrigin,
        name: siteSeo.siteName,
        alternateName: ["Panko Bite", "PankoBite Anime"],
        description: routeSeo.home.description,
        publisher: { "@id": `${siteOrigin}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${siteOrigin}/#organization`,
        name: siteSeo.siteName,
        alternateName: "Panko Bite",
        url: siteOrigin,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/brand/panko-icon-reversed.png"),
        },
        brand: {
          "@type": "Brand",
          name: siteSeo.siteName,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: appMeta.name,
        alternateName: ["Panko Bite", "PankoBite Anime App"],
        operatingSystem: "Android, Android TV",
        applicationCategory: "MultimediaApplication",
        applicationSubCategory: "Anime Streaming",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        downloadUrl: siteOrigin,
        softwareVersion: appMeta.versionName,
        url: siteOrigin,
        description: routeSeo.home.description,
        image: absoluteUrl(siteSeo.ogImagePath),
        author: { "@id": `${siteOrigin}/#organization` },
      },
    ],
  }
}

export function buildBreadcrumbJsonLd(route: AppRoute) {
  if (route === "home") return null

  const page = routeSeo[route]
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteOrigin,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title.replace(` · ${siteSeo.siteName}`, ""),
        item: absoluteUrl(page.path),
      },
    ],
  }
}

/** Kept for analytics title alignment. */
export function analyticsTitleForRoute(route: AppRoute): string {
  return routeSeo[route].title
}
