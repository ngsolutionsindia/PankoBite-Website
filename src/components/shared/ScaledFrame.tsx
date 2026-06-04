import type { CSSProperties, ReactNode } from "react"

import { PlaceholderImage } from "@/components/shared/PlaceholderImage"
import { cn } from "@/lib/utils"

export type ScaledFrameVariant =
  | "hero-tv"
  | "hero-phone"
  | "screen-tv"
  | "screen-phone"

type ScaledFrameProps = {
  width: number
  height: number
  scale?: number
  variant?: ScaledFrameVariant
  label: string
  className?: string
  frameClassName?: string
  children?: ReactNode
}

export function ScaledFrame({
  width,
  height,
  scale = 1,
  variant,
  label,
  className,
  frameClassName,
  children,
}: ScaledFrameProps) {
  const useResponsiveScale = variant != null

  const outerStyle: CSSProperties | undefined = useResponsiveScale
    ? undefined
    : {
        width: width * scale,
        height: height * scale,
      }

  const innerStyle: CSSProperties | undefined = useResponsiveScale
    ? undefined
    : {
        width,
        height,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
      }

  return (
    <div
      className={cn(
        "site-scaled",
        variant && `site-scaled--${variant}`,
        className
      )}
      style={
        useResponsiveScale
          ? ({
              "--base-w": width,
              "--base-h": height,
            } as CSSProperties)
          : outerStyle
      }
    >
      <div
        className="site-scaled-inner"
        style={innerStyle}
      >
        {children ?? (
          <PlaceholderImage
            label={label}
            ratio={width / height}
            className={cn(
              "size-full rounded-none border-0 shadow-none",
              frameClassName
            )}
          />
        )}
      </div>
    </div>
  )
}
