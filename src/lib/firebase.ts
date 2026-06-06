import { initializeApp, type FirebaseApp } from "firebase/app"
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

function hasAnalyticsConfig(): boolean {
  return Boolean(
    firebaseConfig.apiKey &&
      firebaseConfig.appId &&
      firebaseConfig.projectId,
  )
}

let app: FirebaseApp | null = null
let analytics: Analytics | null = null
let initPromise: Promise<Analytics | null> | null = null

export function initFirebaseAnalytics(): Promise<Analytics | null> {
  if (!hasAnalyticsConfig() || typeof window === "undefined") {
    return Promise.resolve(null)
  }

  if (initPromise) return initPromise

  initPromise = (async () => {
    if (!(await isSupported())) return null
    app = initializeApp(firebaseConfig)
    analytics = getAnalytics(app)
    enableDebugModeIfRequested()
    return analytics
  })()

  return initPromise
}

export function getFirebaseAnalytics(): Analytics | null {
  return analytics
}

function enableDebugModeIfRequested() {
  const fromEnv = import.meta.env.VITE_FIREBASE_ANALYTICS_DEBUG === "true"
  const fromUrl = globalThis.location?.search.includes("firebase_analytics_debug=1")
  if (!fromEnv && !fromUrl) return
  if (!firebaseConfig.measurementId) return

  const gtag = (globalThis as { gtag?: (...args: unknown[]) => void }).gtag
  gtag?.("config", firebaseConfig.measurementId, { debug_mode: true })
}
