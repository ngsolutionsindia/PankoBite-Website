import { LegalDocument } from "@/components/legal/LegalDocument"
import { LegalPageShell } from "@/components/legal/LegalPageShell"
import { legalMeta } from "@/config/legal-meta"
import {
  privacyPolicyIntro,
  privacyPolicySections,
  privacyPolicyTitle,
} from "@/content/privacy-policy"

export function PrivacyPage() {
  return (
    <LegalPageShell>
      <LegalDocument
        title={privacyPolicyTitle}
        intro={privacyPolicyIntro}
        sections={privacyPolicySections}
        lastUpdated={legalMeta.lastUpdated}
        contactEmail={legalMeta.contactEmail}
      />
    </LegalPageShell>
  )
}
