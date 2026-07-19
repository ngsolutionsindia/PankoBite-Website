import type { LucideIcon } from "lucide-react"

import { legalMeta } from "@/config/legal-meta"
import { apkDownloads, appMeta } from "@/config/site-links"
import {
  Captions,
  Grid3x3,
  MonitorSmartphone,
  Zap,
} from "lucide-react"

export const watchFreeCards = [
  {
    labelJa: "広告なし",
    title: "No ads.",
    description: "Ever. Not even a banner.",
  },
  {
    labelJa: "登録不要",
    title: "No sign-in.",
    description: "Just open and watch.",
  },
  {
    labelJa: "無料",
    title: "100% free.",
    description: "No trial. No credit card.",
  },
  {
    labelJa: "制限なし",
    title: "No limits.",
    description: "Full episodes, full quality.",
  },
] as const

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Screens", href: "#screens" },
  { label: "Platforms", href: "#platforms" },
] as const

export type ShowId =
  | "onepiece"
  | "jjk"
  | "attack"
  | "demon"
  | "spy"
  | "chainsaw"
  | "vinland"
  | "frieren"
  | "naruto"
  | "mob"
  | "mha"
  | "cowboy"
  | "sololeveling"
  | "steins"

export const libraryShows: {
  id: ShowId
  title: string
  jp: string
  poster: string
}[] = [
  {
    id: "onepiece",
    title: "One Piece",
    jp: "ワンピース",
    poster: "/library/onepiece.webp",
  },
  {
    id: "jjk",
    title: "Jujutsu Kaisen",
    jp: "呪術廻戦",
    poster: "/library/jjk.webp",
  },
  {
    id: "attack",
    title: "Attack on Titan",
    jp: "進撃の巨人",
    poster: "/library/attack.webp",
  },
  {
    id: "demon",
    title: "Demon Slayer",
    jp: "鬼滅の刃",
    poster: "/library/demon.webp",
  },
  {
    id: "spy",
    title: "Spy × Family",
    jp: "スパイファミリー",
    poster: "/library/spy.webp",
  },
  {
    id: "chainsaw",
    title: "Chainsaw Man",
    jp: "チェンソーマン",
    poster: "/library/chainsaw.webp",
  },
  {
    id: "vinland",
    title: "Vinland Saga",
    jp: "ヴィンランド・サガ",
    poster: "/library/vinland.webp",
  },
  {
    id: "frieren",
    title: "Frieren",
    jp: "葬送のフリーレン",
    poster: "/library/frieren.webp",
  },
  { id: "naruto", title: "Naruto", jp: "ナルト", poster: "/library/naruto.webp" },
  {
    id: "mob",
    title: "Mob Psycho 100",
    jp: "モブサイコ100",
    poster: "/library/mob.webp",
  },
  {
    id: "mha",
    title: "My Hero Academia",
    jp: "僕のヒーローアカデミア",
    poster: "/library/mha.webp",
  },
  {
    id: "cowboy",
    title: "Cowboy Bebop",
    jp: "カウボーイビバップ",
    poster: "/library/cowboy.webp",
  },
  {
    id: "sololeveling",
    title: "Solo Leveling",
    jp: "俺だけレベルアップな件",
    poster: "/library/sololeveling.webp",
  },
  {
    id: "steins",
    title: "Steins;Gate",
    jp: "シュタインズ・ゲート",
    poster: "/library/steins.webp",
  },
]

export const features: {
  icon: LucideIcon
  labelJa: string
  title: string
  description: string
}[] = [
  {
    icon: Grid3x3,
    labelJa: "膨大なライブラリ",
    title: "A vast, curated library",
    description:
      "One Piece to Frieren — trending, popular and the latest simulcasts, organized into rails you actually want to browse.",
  },
  {
    icon: Captions,
    labelJa: "字幕と吹替",
    title: "Sub & dub, your call",
    description:
      "Switch audio language and subtitles on the fly. Japanese, English, Spanish and Portuguese tracks on supported titles.",
  },
  {
    icon: MonitorSmartphone,
    labelJa: "どこでも続きを",
    title: "Continue across devices",
    description:
      "Start on the TV, finish on the train. Your progress and My List sync instantly between the big screen and mobile.",
  },
  {
    icon: Zap,
    labelJa: "リモコン最適化",
    title: "Built for the remote",
    description:
      "A D-pad-first interface with cinematic focus — the whole backdrop shifts to whatever you land on. No fiddly menus.",
  },
]

export const platformCards = [
  {
    id: "tv" as const,
    labelJa: "テレビ",
    title: "Android TV",
    description:
      "For Google TV, Sony, TCL, NVIDIA Shield and any Android TV box running Android 10+.",
    features: [
      "D-pad & remote optimized",
      "4K · HEVC playback",
      "Cinematic focus browsing",
    ],
    apkKicker: "SIDELOAD",
    apkLabel: "TV APK",
  },
  {
    id: "mobile" as const,
    labelJa: "モバイル",
    title: "Mobile",
    description:
      "Phones & tablets on Android 8+. Portrait browsing, landscape fullscreen player, picture-in-picture.",
    features: [
      "Download for offline viewing",
      "Background & PiP playback",
      "Syncs with your TV",
    ],
    apkKicker: "SIDELOAD",
    apkLabel: "Mobile APK",
  },
] as const

export const footerColumns = [
  {
    title: "App",
    links: [
      { label: "Features", href: "#features" },
      { label: "Screens", href: "#screens" },
      { label: "Platforms", href: "#platforms" },
    ],
  },
  {
    title: "Download",
    links: [
      { label: `TV APK v${appMeta.versionName} (sideload)`, href: apkDownloads.tv.href },
      { label: `Mobile APK v${appMeta.versionName} (sideload)`, href: apkDownloads.mobile.href },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "Share feedback",
        href: `mailto:${legalMeta.feedbackEmail}?subject=${encodeURIComponent("PankoBite Feedback")}`,
      },
    ],
  },
] as const

export const tvDetailScreen = {
  src: "/screenshots/tv-animedetail.png",
  width: 1920,
  height: 1080,
  alt: "PankoBite Android TV anime detail page with episode list",
  caption: "ANDROID TV · DETAIL",
} as const

export const mobileScreens = [
  {
    label: "HOME",
    src: "/screenshots/mobile-home.png",
    width: 1344,
    height: 2992,
    alt: "PankoBite mobile home with curated anime rows",
  },
  {
    label: "SEARCH",
    src: "/screenshots/mobile-search.png",
    width: 1344,
    height: 2992,
    alt: "PankoBite mobile search results for anime titles",
  },
  {
    label: "DETAIL",
    src: "/screenshots/mobile-animedetail.png",
    width: 1344,
    height: 2992,
    alt: "PankoBite mobile anime detail with play and episodes",
  },
  {
    label: "SCHEDULE",
    src: "/screenshots/mobile-schedule.png",
    width: 1344,
    height: 2992,
    alt: "PankoBite mobile weekly anime release schedule",
  },
] as const
