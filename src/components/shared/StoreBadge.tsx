import type { LucideIcon } from "lucide-react"
import { Download, Smartphone, Tv } from "lucide-react"

import { cn } from "@/lib/utils"

const iconMap = {
  tv: Tv,
  mobile: Smartphone,
  download: Download,
} as const

type StoreBadgeProps = {
  icon: keyof typeof iconMap
  kicker: string
  label: string
  href?: string
  /** Suggested filename when the browser saves the linked file. */
  download?: string
  primary?: boolean
  className?: string
}

export function StoreBadge({
  icon,
  kicker,
  label,
  href = "#download",
  download,
  primary = false,
  className,
}: StoreBadgeProps) {
  const Icon = iconMap[icon] as LucideIcon

  return (
    <a
      href={href}
      download={download}
      className={cn("site-badge", className)}
      data-primary={primary ? "1" : "0"}
    >
      <Icon
        className={cn(
          "size-[26px] shrink-0",
          primary ? "text-primary-foreground" : "text-foreground"
        )}
        strokeWidth={1.5}
        aria-hidden
      />
      <div className="flex min-w-0 flex-1 flex-col items-start leading-[1.1]">
        <span className="site-badge-kicker">{kicker}</span>
        <span className="site-badge-label">{label}</span>
      </div>
    </a>
  )
}
