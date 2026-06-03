import { ImageIcon } from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"

type PlaceholderImageProps = {
  label?: string
  ratio?: number
  className?: string
}

export function PlaceholderImage({
  label = "Screenshot placeholder",
  ratio = 16 / 9,
  className,
}: PlaceholderImageProps) {
  return (
    <AspectRatio
      ratio={ratio}
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-muted",
        className
      )}
    >
      <div className="halftone-fine flex size-full flex-col items-center justify-center gap-2 bg-card p-4 text-center">
        <ImageIcon className="size-8 text-muted-foreground" aria-hidden />
        <span className="font-mono text-xs text-muted-foreground">{label}</span>
      </div>
    </AspectRatio>
  )
}
