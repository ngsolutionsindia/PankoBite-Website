/** Keep in sync with PankoBite/mobile & tv build.gradle.kts defaultConfig. */
export const appMeta = {
  name: "PankoBite",
  packageId: "com.pankobite.app",
  versionName: "1.1",
  versionCode: 2,
  minAndroid: "Android 9+",
  minApi: 28,
} as const

/** Public APK host — ngsolutionsindia/PankoBite-releases (see scripts/create-github-release.ps1). */
const apkReleaseTag = `v${appMeta.versionName}`
const apkReleaseBase = `https://github.com/ngsolutionsindia/PankoBite-releases/releases/download/${apkReleaseTag}`

export const siteLinks = {
  apkTv: `${apkReleaseBase}/tv-release.apk`,
  apkMobile: `${apkReleaseBase}/mobile-release.apk`,
  privacy: "/privacy",
  terms: "/terms",
} as const

export const apkDownloads = {
  tv: {
    href: siteLinks.apkTv,
    filename: `tv-release-v${appMeta.versionName}.apk`,
    label: `Android TV APK v${appMeta.versionName}`,
  },
  mobile: {
    href: siteLinks.apkMobile,
    filename: `mobile-release-v${appMeta.versionName}.apk`,
    label: `Mobile APK v${appMeta.versionName}`,
  },
} as const
