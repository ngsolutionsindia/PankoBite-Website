import { Mail } from "lucide-react"

import { SectionHeader } from "@/components/shared/SectionHeader"
import { legalMeta } from "@/config/legal-meta"

const feedbackMailto = `mailto:${legalMeta.feedbackEmail}?subject=${encodeURIComponent("PankoBite Feedback")}`

export function FeedbackSection() {
  return (
    <section
      className="site-feedback"
      id="feedback"
      aria-labelledby="feedback-heading"
    >
      <div className="site-container site-feedback-inner">
        <SectionHeader
          id="feedback-heading"
          centered
          label="フィードバック · SHARE FEEDBACK"
          title="Help us make PankoBite better"
          lead="Found a bug, have a feature idea, or want to share your experience? We'd love to hear from you — email NG Solutions and tell us what you think."
        />
        <a href={feedbackMailto} className="site-feedback-email">
          <Mail className="size-4" aria-hidden />
          <span>{legalMeta.feedbackEmail}</span>
        </a>
      </div>
    </section>
  )
}
