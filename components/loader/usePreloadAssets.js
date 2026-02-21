/**
 * Preloads a list of images and reports progress.
 * @param {string[]} images - Array of image URLs.
 * @param {function} onProgress - Callback for progress (0-100).
 */
export const preloadImages = (images = [], onProgress) => {
  if (images.length === 0) return Promise.resolve();
  let loadedCount = 0;
  return Promise.all(
    images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          onProgress(Math.round((loadedCount / images.length) * 100));
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          onProgress(Math.round((loadedCount / images.length) * 100));
          resolve(); // Resolve anyway to not block
        };
      });
    }),
  );
};

/**
 * Preloads fonts using document.fonts API.
 * @param {string[]} fonts - Array of font names.
 */
export const preloadFonts = async (fonts = []) => {
  if (fonts.length === 0) return Promise.resolve();
  await Promise.all(
    fonts.map((font) =>
      document.fonts.load(`1em ${font}`).catch((e) => console.warn(e)),
    ),
  );
};

/**
 * "Warms" Vimeo URLs by fetching a small HEAD request or just returning immediately.
 * Vimeo player handles its own buffering, so we mainly wait for images/fonts.
 */
export const warmVideos = async (urls = []) => {
  // We can't easily preload Vimeo iframes without mounting them,
  // but we can ensure the connection is open or just simulate weight.
  return Promise.resolve();
};
