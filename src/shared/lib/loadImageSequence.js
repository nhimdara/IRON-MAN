export function loadImageSequence({
  count,
  path,
  onFirstFrame,
  onProgress,
  concurrency = 6,
}) {
  const images = Array(count);
  let cancelled = false;
  let nextIndex = 0;
  let completed = 0;

  const loadNext = () => {
    if (cancelled || nextIndex >= count) return;

    const index = nextIndex++;
    const image = new Image();
    images[index] = image;
    image.decoding = "async";

    const complete = () => {
      if (cancelled) return;
      completed += 1;
      if (index === 0 && image.naturalWidth) onFirstFrame?.();
      if (completed === count || completed % 5 === 0) {
        onProgress?.(completed / count);
      }
      loadNext();
    };

    image.onload = complete;
    image.onerror = complete;
    image.src = path(index);
  };

  for (let index = 0; index < Math.min(concurrency, count); index += 1) {
    loadNext();
  }

  return {
    images,
    cancel() {
      cancelled = true;
      images.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    },
  };
}
