import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"

type WordLogoProps = {
  size?: number
  className?: string
  href?: string
}

export function WordLogo({
  size = 26,
  className,
  href = "/",
}: WordLogoProps) {
  return (
    <a
      href={href}
      className={cn("site-wordmark-wrap inline-flex items-center", className)}
      style={{ "--logo-size": `${size}px` } as CSSProperties}
      aria-label="PankoBite home"
    >
      <img
        src="/brand/panko-lockup.svg"
        alt="PankoBite"
        width={180}
        height={48}
        className="site-wordmark-image block h-auto max-w-full shrink-0"
        style={{ height: `calc(var(--logo-size) * 1.85)` }}
        draggable={false}
      />
    </a>
  )
}
