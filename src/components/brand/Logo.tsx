import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"

type StampMarkProps = {
  size?: number
  className?: string
}

export function StampMark({ size = 44, className }: StampMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={cn("block shrink-0", className)}
      aria-hidden
    >
      <rect
        x="8"
        y="8"
        width="104"
        height="104"
        rx="26"
        className="fill-accent"
      />
      <rect
        x="14"
        y="14"
        width="92"
        height="92"
        rx="21"
        fill="none"
        stroke="color-mix(in oklch, var(--foreground) 50%, transparent)"
        strokeWidth="2"
      />
      <text
        x="60"
        y="80"
        textAnchor="middle"
        fill="var(--accent-foreground)"
        fontFamily="var(--font-display)"
        fontStyle="italic"
        fontSize={60}
        letterSpacing={-4}
      >
        NG
      </text>
    </svg>
  )
}

type WordLogoProps = {
  size?: number
  className?: string
}

export function WordLogo({ size = 26, className }: WordLogoProps) {
  return (
    <a
      href="#"
      className={cn("site-wordmark-wrap inline-flex items-center gap-3.5", className)}
      style={{ "--logo-size": `${size}px` } as CSSProperties}
    >
      <StampMark size={size * 1.5} className="site-wordmark-stamp" />
      <span className="site-wordmark font-heading leading-none text-foreground">
        <span className="italic">NG</span> Anime
        <span className="text-accent">.</span>
      </span>
    </a>
  )
}
