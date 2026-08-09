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
