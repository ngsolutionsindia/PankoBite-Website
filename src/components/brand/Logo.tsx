import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"

type WordLogoProps = {
  size?: number
  className?: string
}

export function WordLogo({ size = 26, className }: WordLogoProps) {
  return (
    <a
      href="#"
      className={cn("site-wordmark-wrap inline-flex items-center", className)}
      style={{ "--logo-size": `${size}px` } as CSSProperties}
    >
      <img
        src="/brand/panko-lockup.svg"
        alt="PankoBite"
        className="site-wordmark-image block h-auto max-w-full shrink-0"
        style={{ height: `calc(var(--logo-size) * 1.85)` }}
        draggable={false}
      />
    </a>
  )
}
