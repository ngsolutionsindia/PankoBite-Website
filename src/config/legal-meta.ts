/** Shared metadata for legal pages (website + app references). */
export const legalMeta = {
  appName: "PankoBite",
  operatorName: "PankoBite",
  operatorRole: "independent app developer",
  lastUpdated: "June 7, 2026",
  /** Privacy, terms, and legal notices. */
  contactEmail: "pankobite+tnc@gmail.com",
  /** App feedback and general user suggestions. */
  feedbackEmail: "pankobite+feedback@gmail.com",
  thirdPartyDisclosure:
    "PankoBite retrieves metadata and stream URLs from independent third-party services (which may include publicly accessible websites such as streaming catalog sites). We are not affiliated with, endorsed by, or operated by any such site.",
  /** Update to your actual legal jurisdiction (e.g. "India", "United States"). */
  governingLawRegion: "the operator's principal place of business",
} as const
