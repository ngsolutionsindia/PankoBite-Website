import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  const googleSiteVerification = env.VITE_GOOGLE_SITE_VERIFICATION?.trim()

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "html-seo-inject",
        transformIndexHtml(html) {
          if (!googleSiteVerification) return html
          const tag = `    <meta name="google-site-verification" content="${googleSiteVerification}" />\n`
          return html.replace("</head>", `${tag}  </head>`)
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
