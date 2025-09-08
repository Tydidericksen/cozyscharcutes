// Performance monitoring utilities
export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
  return result;
};

// Image loading performance
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Batch preload images
export const preloadImages = async (srcs) => {
  const promises = srcs.map(src => preloadImage(src));
  return Promise.allSettled(promises);
};

// Check if user is on slow connection
export const isSlowConnection = () => {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    return connection.effectiveType === 'slow-2g' || 
           connection.effectiveType === '2g' ||
           connection.saveData === true;
  }
  return false;
};

// Optimize based on connection
export const getOptimizedImageSrc = (src, isSlow = false) => {
  if (isSlow) {
    // For slow connections, you could return a lower quality version
    // This would require having multiple versions of images
    return src;
  }
  return src;
};
