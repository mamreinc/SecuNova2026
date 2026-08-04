#!/bin/bash
# ========================================
# BUILD SCRIPT - SecuNova Consulting
# Works locally (macOS/Windows) and on Linux CI
# (Cloudflare Pages / Netlify) where headless Chrome
# needs its runtime libraries installed first.
# ========================================
set -e

# Install headless Chrome runtime dependencies on Linux build environments.
if command -v apt-get >/dev/null 2>&1; then
  echo "[build] installing Chrome runtime libraries..."
  if [ "$(id -u)" -eq 0 ]; then
    apt-get update -qq
    apt-get install -y -qq --no-install-recommends \
      libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 \
      libxkbcommon0 libatspi2.0-0 libxcomposite1 libxdamage1 libxfixes3 \
      libxrandr2 libgbm1 libasound2 libpango-1.0-0 libcairo2 libdbus-1-3 \
      libx11-xcb1 fonts-liberation
  elif command -v sudo >/dev/null 2>&1; then
    sudo -n apt-get update -qq
    sudo -n apt-get install -y -qq --no-install-recommends \
      libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 \
      libxkbcommon0 libatspi2.0-0 libxcomposite1 libxdamage1 libxfixes3 \
      libxrandr2 libgbm1 libasound2 libpango-1.0-0 libcairo2 libdbus-1-3 \
      libx11-xcb1 fonts-liberation
  fi
fi

# Run the standard production build (tsc + vite + prerender).
npm run build
