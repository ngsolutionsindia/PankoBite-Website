import type { LegalSection } from "@/content/legal-types"
import { legalMeta } from "@/config/legal-meta"

export const termsTitle = "Terms & Conditions"

export const termsIntro =
  "Please read these Terms & Conditions (“Terms”) carefully before using NG Anime. By installing, accessing, or using NG Anime (mobile app, Android TV app, or this website), you agree to be bound by these Terms. If you do not agree, do not use NG Anime."

export const termsSections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "1. Who we are and what NG Anime is",
    paragraphs: [
      "NG Anime is offered by NG Solutions as an independent third-party client application. We are not the owner, operator, licensor, or authorized representative of any anime studio, distributor, broadcaster, or of the third-party websites and APIs that provide catalog data and streaming URLs.",
      "NG Anime is a convenience layer: a user interface for Android phones, tablets, and Android TV that helps you browse metadata and open streams made available by third parties.",
      legalMeta.thirdPartyDisclosure,
    ],
  },
  {
    id: "no-hosting",
    title: "2. We do not host or store the anime library",
    paragraphs: [
      "NG Solutions does not upload, host, store, or permanently distribute anime video files on our own servers as part of the catalog. Video and images are requested from third-party services and CDNs when you use the app.",
      "Any optional offline downloads or caches are stored locally on your device under your control, not on servers operated by us for redistribution.",
    ],
  },
  {
    id: "third-party",
    title: "3. Third-party content and services",
    paragraphs: [
      "All titles, artwork, descriptions, episode lists, and stream links are supplied by independent third parties. We do not verify copyright status, territorial rights, or licensing for any content.",
      "Third-party services may change, break, rate-limit, or withdraw access at any time without notice. We are not responsible for the accuracy, legality, quality, availability, or security of third-party content or endpoints.",
      "Your use of third-party services may also be subject to their own terms and policies. You are responsible for reviewing and complying with them where applicable.",
    ],
  },
  {
    id: "copyright",
    title: "4. Copyright and intellectual property",
    paragraphs: [
      "Anime, trademarks, logos, and related materials belong to their respective owners. NG Anime and this website do not claim ownership of third-party intellectual property.",
      "We respect intellectual property rights. If you believe content accessible through NG Anime infringes your rights, contact us with sufficient detail (work identified, URL or title in app, your contact information, and a good-faith statement). We are a tool provider, not the primary host of streams; we will review notices and may take reasonable steps within our control (for example updating the app to disable access to specific sources where technically feasible).",
      "Repeat infringers or users who misuse the app to facilitate unlawful activity may be refused support or future updates at our discretion.",
    ],
  },
  {
    id: "lawful-use",
    title: "5. Your responsibility and lawful use",
    paragraphs: [
      "You are solely responsible for how you use NG Anime and for ensuring your use complies with applicable laws in your location, including copyright and consumer protection laws.",
      "You agree not to use NG Anime to harass others, probe or attack networks, circumvent technical measures unlawfully, redistribute streams commercially, or engage in activity that violates law or third-party rights.",
    ],
  },
  {
    id: "no-warranty",
    title: "6. Disclaimer of warranties",
    paragraphs: [
      "NG ANIME AND THIS WEBSITE ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.",
      "We do not warrant uninterrupted or error-free operation, compatibility with every device, or that content will remain available.",
    ],
  },
  {
    id: "liability",
    title: "7. Limitation of liability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, NG SOLUTIONS AND ITS DEVELOPERS, OFFICERS, CONTRACTORS, AND AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS INTERRUPTION, ARISING FROM OR RELATED TO YOUR USE OF NG ANIME OR THIRD-PARTY CONTENT, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF THESE TERMS OR YOUR USE OF NG ANIME WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR NG ANIME IN THE TWELVE MONTHS BEFORE THE CLAIM (TYPICALLY ZERO, AS THE APP IS FREE) OR (B) FIFTY US DOLLARS (USD $50).",
      "Some jurisdictions do not allow certain limitations; in those cases, our liability is limited to the fullest extent permitted by law.",
    ],
  },
  {
    id: "indemnity",
    title: "8. Indemnification",
    paragraphs: [
      "You agree to defend, indemnify, and hold harmless NG Solutions and its developers from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from your use of NG Anime, your violation of these Terms, your violation of any law or third-party right, or any dispute between you and a third-party content provider.",
    ],
  },
  {
    id: "app-distribution",
    title: "9. Distribution and sideloading",
    paragraphs: [
      "NG Anime may be distributed outside official app stores (for example via APK sideloading). You are responsible for enabling installs from unknown sources and for verifying that you obtained the build from a source you trust.",
      "We are not responsible for modified, repackaged, or malware-infected copies distributed by others.",
    ],
  },
  {
    id: "updates",
    title: "10. Changes and termination",
    paragraphs: [
      "We may modify these Terms, discontinue features, or stop distributing NG Anime at any time. Material changes will be reflected by updating the “Last updated” date. Continued use after changes constitutes acceptance.",
      "We may terminate or suspend your ability to use NG Anime immediately if we believe you violated these Terms or if required for legal or technical reasons.",
    ],
  },
  {
    id: "governing-law",
    title: "11. Governing law and disputes",
    paragraphs: [
      "These Terms are governed by the laws applicable in {{governingLawRegion}}, without regard to conflict-of-law rules, except where mandatory consumer protections in your country require otherwise.",
      "You agree that disputes will be resolved in the courts of that region unless local law requires a different forum. Nothing prevents either party from seeking injunctive relief for intellectual property misuse.",
    ],
  },
  {
    id: "misc",
    title: "12. General",
    paragraphs: [
      "If any provision of these Terms is held invalid, the remaining provisions remain in effect. Our failure to enforce a provision is not a waiver. These Terms are the entire agreement between you and NG Solutions regarding NG Anime and supersede prior understandings on the same subject.",
      "You may not assign your rights under these Terms without our consent. We may assign our rights in connection with a reorganization or sale of the project.",
    ],
  },
  {
    id: "contact",
    title: "13. Contact",
    paragraphs: [
      "Legal notices and copyright inquiries: email us at the address in the footer of this page.",
    ],
  },
]
