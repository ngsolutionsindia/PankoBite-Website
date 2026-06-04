/** Keep in sync with NgAnime/mobile & tv build.gradle.kts defaultConfig. */
export const appMeta = {
  name: "NG Anime",
  packageId: "com.ngsolutions.nganime",
  versionName: "1.0",
  versionCode: 1,
  minAndroid: "Android 9+",
  minApi: 28,
} as const

export const siteLinks = {
  apkTv: "/downloads/tv-release.apk",
  apkMobile: "/downloads/mobile-release.apk",
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
