import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  label: string
  title: string
  lead?: string
  className?: string
  centered?: boolean
  id?: string
}

export function SectionHeader({
  label,
  title,
  lead,
  className,
  centered = false,
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "site-sec-head",
        centered && "site-sec-head--center",
        className
      )}
    >
      <span className="site-eyebrow site-eyebrow--accent">{label}</span>
      <h2 id={id} className="site-sec-title">
        {title}
      </h2>
      {lead ? <p className="site-sec-lead">{lead}</p> : null}
    </div>
  )
}
