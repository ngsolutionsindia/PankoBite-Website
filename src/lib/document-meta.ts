import {
  buildBreadcrumbJsonLd,
  buildWebsiteJsonLd,
  seoForRoute,
  siteSeo,
} from "@/config/seo"
import type { AppRoute } from "@/lib/routes"

function upsertMetaByName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute("name", name)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function upsertMetaByProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute("property", property)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement("link")
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertJsonLd(id: string, data: object | null) {
  const existing = document.getElementById(id)
  if (!data) {
    existing?.remove()
    return
  }
  let el = existing as HTMLScriptElement | null
  if (!el) {
    el = document.createElement("script")
    el.type = "application/ld+json"
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/** Sync document head with the active route (SPA-friendly SEO). */
export function applyDocumentMeta(route: AppRoute) {
  const seo = seoForRoute(route)
  const indexable = seo.index !== false

  document.title = seo.title
  upsertMetaByName("description", seo.description)
  upsertMetaByName("keywords", siteSeo.keywords.join(", "))
  upsertMetaByName(
    "robots",
    indexable ? "index, follow" : "noindex, nofollow",
  )
  upsertMetaByName("theme-color", siteSeo.themeColor)

  upsertLink("canonical", seo.canonical)

  upsertMetaByProperty("og:type", route === "home" ? "website" : "article")
  upsertMetaByProperty("og:site_name", siteSeo.siteName)
  upsertMetaByProperty("og:locale", siteSeo.locale)
  upsertMetaByProperty("og:title", seo.title)
  upsertMetaByProperty("og:description", seo.description)
  upsertMetaByProperty("og:url", seo.canonical)
  upsertMetaByProperty("og:image", seo.ogImage)
  upsertMetaByProperty("og:image:width", String(siteSeo.ogImageWidth))
  upsertMetaByProperty("og:image:height", String(siteSeo.ogImageHeight))
  upsertMetaByProperty("og:image:alt", siteSeo.ogImageAlt)

  upsertMetaByName("twitter:card", siteSeo.twitterCard)
  upsertMetaByName("twitter:title", seo.title)
  upsertMetaByName("twitter:description", seo.description)
  upsertMetaByName("twitter:image", seo.ogImage)
  upsertMetaByName("twitter:image:alt", siteSeo.ogImageAlt)

  upsertJsonLd("seo-jsonld-website", route === "home" ? buildWebsiteJsonLd() : null)
  upsertJsonLd("seo-jsonld-breadcrumb", buildBreadcrumbJsonLd(route))
}
