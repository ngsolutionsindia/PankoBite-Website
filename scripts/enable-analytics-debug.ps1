# Enable Firebase Analytics DebugView for website download events.
# Usage: .\scripts\enable-analytics-debug.ps1
# Optional: .\scripts\enable-analytics-debug.ps1 -Port 5173
param(
    [int]$Port = 5173
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
$EnvFile = Join-Path $Root ".env.local"

if (-not (Test-Path $EnvFile)) {
    Write-Host "Missing .env.local — copy .env.example and add your Firebase web config first." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Website download analytics — DebugView" -ForegroundColor Cyan
Write-Host "======================================="
Write-Host ""
Write-Host "Starting dev server with analytics debug mode ..."
Write-Host "  URL: http://localhost:$Port/?firebase_analytics_debug=1"
Write-Host ""
Write-Host "Firebase Console:"
Write-Host "  pankobite -> Analytics -> DebugView"
Write-Host ""
Write-Host "Test these download events (click each APK button):"
Write-Host "  app_download_tv      Android TV APK"
Write-Host "  app_download_mobile  Mobile APK"
Write-Host ""
Write-Host "Event parameters on each download:"
Write-Host "  placement   hero | cta | platforms | footer"
Write-Host "  app_version current APK version from site config"
Write-Host ""
Write-Host "Also expect page_view when the landing page loads."
Write-Host ""
Write-Host "GA4 report (website downloads, after events accumulate):"
Write-Host "  Explore -> Blank -> Rows: Event name"
Write-Host "  Filter: Event name matches app_download_tv OR app_download_mobile"
Write-Host "  Values: Event count"
Write-Host "  Breakdown: placement (register custom dimension in GA4 Admin first)"
Write-Host ""
Write-Host "Production site without this script:"
Write-Host "  https://YOUR-DOMAIN/?firebase_analytics_debug=1"
Write-Host ""

Push-Location $Root
$env:VITE_FIREBASE_ANALYTICS_DEBUG = "true"
try {
    npx vite --port $Port
} finally {
    Remove-Item Env:VITE_FIREBASE_ANALYTICS_DEBUG -ErrorAction SilentlyContinue
    Pop-Location
}
