import type { LegalSection } from "@/content/legal-types"
import { legalMeta } from "@/config/legal-meta"

export const privacyPolicyTitle = "Privacy Policy"

export const privacyPolicyIntro =
  "This Privacy Policy explains how we (“we”, “us”, “our”) handle information in connection with the PankoBite mobile and Android TV applications and this website. PankoBite is a third-party client: we do not operate the streaming services or host the anime catalog."

export const privacyPolicySections: LegalSection[] = [
  {
    id: "scope",
    title: "1. Scope",
    paragraphs: [
      "This policy applies to the PankoBite apps (Android mobile and Android TV) and the promotional website at which you are reading it. It does not govern third-party websites, APIs, CDNs, or video hosts that the app contacts when you browse or play content.",
    ],
  },
  {
    id: "no-accounts",
    title: "2. No accounts or central profiles",
    paragraphs: [
      "PankoBite does not require sign-in. We do not run a user account system and we do not maintain a central server database of your identity, email, or password for the app.",
    ],
  },
  {
    id: "local-data",
    title: "3. Data stored on your device",
    paragraphs: [
      "To provide features such as Continue Watching, My List, playback position, preferences, and optional offline downloads, the app stores data locally on your device (for example via on-device databases or cache files). This data stays on your device unless you clear app storage, uninstall the app, or use device backup features provided by your OS vendor.",
      "We do not receive copies of this on-device watch history or lists unless you voluntarily send them to us (for example in a support email).",
    ],
  },
  {
    id: "analytics",
    title: "4. App analytics (Firebase)",
    paragraphs: [
      "We use Firebase Analytics (Google) in the PankoBite mobile and Android TV apps to measure aggregate product usage, such as first opens (installs), active users, session duration, screens viewed, and app version. This helps us understand how the apps are used and improve them. Analytics does not require sign-in and is separate from your on-device watch history and lists.",
      "Mobile and TV builds are distinguished in reports using an app variant label (mobile or tv). We do not use Firebase Analytics to show ads inside PankoBite.",
    ],
  },
  {
    id: "network",
    title: "5. Network requests to third parties",
    paragraphs: [
      legalMeta.thirdPartyDisclosure,
      "When you search, browse, or stream, the app sends requests over the internet to independent third-party services (including catalog/metadata APIs and streaming endpoints). Those requests may include information such as search terms, title identifiers, episode numbers, user-agent strings, and standard HTTP metadata required for the request to work.",
      "We do not control how those third parties collect, log, retain, or share data. Their practices are governed by their own policies and terms.",
    ],
  },
  {
    id: "website",
    title: "6. This website",
    paragraphs: [
      "This site is primarily informational (app description, download links, and legal documents). We do not use sign-in on this site.",
      "We use Firebase Analytics (Google) on this website to measure aggregate traffic (page views) and when visitors click APK download links (which variant was chosen and which section of the page). The mobile and TV apps use the same Firebase project for aggregate app usage metrics (see section 4). Analytics does not require an account.",
      "If the site is hosted by a provider (for example a static host or CDN), that provider may process technical logs (IP address, browser type, requested URL, timestamps) for security and delivery. We use that information only for operating and protecting the site, not for selling personal data.",
    ],
  },
  {
    id: "no-sale",
    title: "7. We do not sell your personal information",
    paragraphs: [
      "We do not sell, rent, or trade personal information to data brokers. We do not run in-app advertising networks in PankoBite as distributed by us. Firebase Analytics (sections 4 and 6) is used for product metrics, not to serve third-party ads in the app or on this site.",
    ],
  },
  {
    id: "children",
    title: "8. Children",
    paragraphs: [
      "PankoBite is not directed at children under 13 (or the minimum age required in your region). We do not knowingly collect personal information from children. If you believe a child has provided us personal information, contact us and we will take reasonable steps to delete it.",
    ],
  },
  {
    id: "security",
    title: "9. Security",
    paragraphs: [
      "We apply reasonable measures for a small client application, but no method of transmission or storage is completely secure. Use the app at your own risk.",
    ],
  },
  {
    id: "rights",
    title: "10. Your choices and rights",
    paragraphs: [
      "You can delete local app data through your device settings. Depending on where you live, you may have rights to access, correct, or delete personal information we hold about you (typically limited to information you send us directly, such as support correspondence). Contact us using the email below.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes",
    paragraphs: [
      "We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do. Continued use of the app or site after changes means you accept the updated policy.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact",
    paragraphs: [
      "Questions about this policy: email us at the address in the footer of this page.",
    ],
  },
]
