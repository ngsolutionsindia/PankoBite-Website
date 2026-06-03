import type { CSSProperties } from "react"

import type { ShowId } from "@/config/site-content"

export function showGradientStyle(id: ShowId): CSSProperties {
  return {
    background: `linear-gradient(160deg, var(--show-${id}-from), var(--show-${id}-to))`,
  }
}
