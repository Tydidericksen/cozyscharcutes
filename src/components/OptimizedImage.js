import React, { useState, useRef, useEffect } from 'react';

// Optimized image component with compression and lazy loading
const OptimizedImage = ({ src, alt, onClick, className = '', placeholder = null }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef();
  const observerRef = useRef();

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observerRef.current?.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px' // Start loading earlier
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div 
      ref={imgRef} 
      className={`optimized-image-container ${className}`}
      onClick={onClick}
    >
      {/* Placeholder while not in view or loading */}
      {(!inView || (!loaded && !error)) && (
        <div className="image-placeholder">
          {placeholder ? (
            <img src={placeholder} alt="Loading..." className="placeholder-image" />
          ) : (
            <div className="loading-spinner"></div>
          )}
        </div>
      )}

      {/* Actual image - only render when in view */}
      {inView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          style={{ 
            display: loaded ? 'block' : 'none',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          loading="lazy"
          decoding="async"
        />
      )}

      {/* Error state */}
      {error && (
        <div className="image-error">
          <p>Failed to load image</p>
        </div>
      )}

      {/* Overlay for clickable images */}
      {onClick && (
        <div className="image-overlay">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M12 10h-2v3H9v-3H7V9h2V6h1v3h2v1z"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
