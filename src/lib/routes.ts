export type AppRoute = "home" | "privacy" | "terms"

export function pathnameToRoute(pathname: string): AppRoute {
  const path = pathname.replace(/\/$/, "") || "/"
  if (path === "/privacy") return "privacy"
  if (path === "/terms") return "terms"
  return "home"
}

export function routeToPath(route: AppRoute): string {
  if (route === "privacy") return "/privacy"
  if (route === "terms") return "/terms"
  return "/"
}
