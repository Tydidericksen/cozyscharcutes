import React, { useState, useMemo } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OptimizedImage from './ImageOptimizer';
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

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Dynamically import all gallery images
  const galleryImages = useMemo(() => {
    const images = [];
    try {
      // Import all images from the gallery folder
      const imageContext = require.context('../assets/gallery', false, /\.(jpg|jpeg|png|gif)$/i);
      imageContext.keys().forEach((key) => {
        images.push({
          src: imageContext(key),
          alt: `Gallery image ${key.split('/').pop()}`
        });
      });
    } catch (error) {
      console.warn('Could not load gallery images:', error);
    }
    return shuffleArray(images);
  }, []);

  const visibleImages = galleryImages.slice(0, visibleCount);
  const hasMoreImages = visibleCount < galleryImages.length;

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const loadMoreImages = () => {
    setIsLoadingMore(true);
    // Simulate a small delay for better UX
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 9, galleryImages.length));
      setIsLoadingMore(false);
    }, 300);
  };

  if (galleryImages.length === 0) {
    return null;
  }

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="gallery-title">My Work</h2>
        <p className="gallery-subtitle">
          Take a look at some of my charcuterie creations
        </p>
        
        <div className="gallery-grid">
          {visibleImages.map((image, index) => (
            <OptimizedImage
              key={`${image.src}-${index}`}
              src={image.src}
              alt={image.alt}
              onClick={() => openModal(image)}
              className="gallery-item"
            />
          ))}
        </div>

        {hasMoreImages && (
          <div className="load-more-container">
            <button 
              className="load-more-btn"
              onClick={loadMoreImages}
              disabled={isLoadingMore}
            >
              {isLoadingMore ? (
                <>
                  <div className="loading-spinner-small"></div>
                  Loading...
                </>
              ) : (
                <>
                  <ExpandMoreIcon />
                  Load More Photos ({galleryImages.length - visibleCount} remaining)
                </>
              )}
            </button>
          </div>
        )}

        {selectedImage && (
          <div className="gallery-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
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

export default Gallery;
