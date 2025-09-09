import React, { useState, useEffect, useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/Gallery.css';

// Function to shuffle array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Get all image filenames without importing them yet
const getImageFilenames = () => {
  try {
    const imageContext = require.context('../assets/gallery', false, /\.(jpg|jpeg|png|gif)$/i);
    return imageContext.keys();
  } catch (error) {
    console.warn('Could not load gallery images:', error);
    return [];
  }
};

// Simplified lazy load component
const LazyImage = ({ imagePath, alt, onClick, index }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef();
  const observerRef = useRef();

  useEffect(() => {
    // Create intersection observer with more aggressive settings
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Load image immediately when it comes into view
          try {
            const imageContext = require.context('../assets/gallery', false, /\.(jpg|jpeg|png|gif)$/i);
            const src = imageContext(imagePath);
            setImageSrc(src);
          } catch (error) {
            console.error('Failed to load image:', imagePath, error);
            setError(true);
          }
          observerRef.current?.disconnect();
        }
      },
      { 
        threshold: 0.01, // Load as soon as any part is visible
        rootMargin: '300px' // Start loading much earlier
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [imagePath]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div 
      ref={imgRef} 
      className="gallery-item"
      onClick={onClick}
    >
      {/* Show loading spinner only if we haven't started loading yet */}
      {!imageSrc && !error && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}

      {/* Show image once we have the src */}
      {imageSrc && (
        <img
          src={imageSrc}
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

      {/* Show loading spinner while image is loading */}
      {imageSrc && !loaded && !error && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="image-error">
          <p>Failed to load image</p>
        </div>
      )}

      {/* Overlay for clickable images */}
      <div className="gallery-overlay">
        <ExpandMoreIcon className="zoom-icon" />
      </div>
    </div>
  );
};

function LazyGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12); // Show more initially
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    // Get all image paths and shuffle them
    const paths = getImageFilenames();
    setImagePaths(shuffleArray(paths));
  }, []);

  const visibleImages = imagePaths.slice(0, visibleCount);
  const hasMoreImages = visibleCount < imagePaths.length;

  const openModal = (imagePath) => {
    try {
      const imageContext = require.context('../assets/gallery', false, /\.(jpg|jpeg|png|gif)$/i);
      const src = imageContext(imagePath);
      setSelectedImage({ src, alt: `Gallery image ${imagePath.split('/').pop()}` });
    } catch (error) {
      console.error('Failed to load image for modal:', imagePath, error);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const loadMoreImages = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 12, imagePaths.length));
      setIsLoadingMore(false);
    }, 300);
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="gallery-title">Our Creations</h2>
        <p className="gallery-subtitle">
          A glimpse into the artistry of Cozy's Charcutes.
        </p>

        <div className="gallery-grid">
          {visibleImages.map((imagePath, index) => (
            <LazyImage
              key={imagePath}
              imagePath={imagePath}
              alt={`Gallery image ${index + 1}`}
              onClick={() => openModal(imagePath)}
              index={index}
            />
          ))}
        </div>

        {hasMoreImages && (
          <div className="load-more-container">
            <button 
              onClick={loadMoreImages} 
              className="btn btn-secondary load-more-btn"
              disabled={isLoadingMore}
            >
              {isLoadingMore ? 'Loading...' : `Load More Photos (${imagePaths.length - visibleCount} remaining)`}
            </button>
          </div>
        )}

        {selectedImage && (
          <div className="gallery-modal-overlay" onClick={closeModal}>
            <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeModal}>
                <CloseIcon />
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default LazyGallery;
