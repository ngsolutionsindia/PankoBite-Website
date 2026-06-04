import { LegalDocument } from "@/components/legal/LegalDocument"
import { LegalPageShell } from "@/components/legal/LegalPageShell"
import { legalMeta } from "@/config/legal-meta"
import type { LegalSection } from "@/content/legal-types"
import {
  termsIntro,
  termsSections,
  termsTitle,
} from "@/content/terms-of-service"

function withGoverningLaw(
  sections: LegalSection[],
  region: string,
): LegalSection[] {
  return sections.map((section) => ({
    ...section,
    paragraphs: section.paragraphs.map((p) =>
      p.replace(/\{\{governingLawRegion\}\}/g, region),
    ),
  }))
}

export function TermsPage() {
  const sections = withGoverningLaw(
    termsSections,
    legalMeta.governingLawRegion,
  )

  return (
    <LegalPageShell>
      <LegalDocument
        title={termsTitle}
        intro={termsIntro}
        sections={sections}
        lastUpdated={legalMeta.lastUpdated}
        contactEmail={legalMeta.contactEmail}
      />
    </LegalPageShell>
  )
}
