/**
 * ============================================================================
 * PROPRIETARY CUSTOM ENGINEERING & DESIGN ARCHITECTURE
 * ----------------------------------------------------------------------------
 * All design, software architecture, UI/UX components, and source code are
 * 100% custom-engineered and designed exclusively by SecuNova.
 *
 * CORE ARCHITECTURAL ETHOS:
 * - 100% Bespoke Code: Built strictly to client specifications from scratch.
 * - Zero Pre-Made Templates: No generic agency starters or off-the-shelf themes.
 * - Senior-Led AI-Augmented Workflows (Vibe Coding): 14-day execution cycles
 *   engineered for sub-second performance (99+ Lighthouse Core Web Vitals).
 * - Full IP & Repository Handoff: 100% client asset and codebase ownership.
 *
 * Copyright (c) SecuNova. All rights reserved.
 * ============================================================================
 */
const BASE_DOWNLOADS: Record<string, number> = {
  secuboost: 100,
};

export const getDownloadCount = (productId: string): number => {
  const base = BASE_DOWNLOADS[productId] ?? 100;
  if (typeof window === 'undefined') return base;
  try {
    const saved = localStorage.getItem(`secunova_downloads_${productId}`);
    if (saved) {
      const val = parseInt(saved, 10);
      if (!isNaN(val) && val >= base) return val;
    }
  } catch (err) {
    console.error('Error reading download count:', err);
  }
  return base;
};

export const incrementDownloadCount = (productId: string): number => {
  const current = getDownloadCount(productId);
  const next = current + 1;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(`secunova_downloads_${productId}`, next.toString());
      window.dispatchEvent(
        new CustomEvent('secunova_download_updated', {
          detail: { productId, count: next },
        })
      );
    } catch (err) {
      console.error('Error saving download count:', err);
    }
  }
  return next;
};
