import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { initFirebaseAnalytics } from "@/lib/firebase"

void initFirebaseAnalytics()

document.documentElement.classList.add("dark")
document.documentElement.style.colorScheme = "dark"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
