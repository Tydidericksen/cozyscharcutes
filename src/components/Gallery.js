import React, { useState, useMemo } from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CloseIcon from '@mui/icons-material/Close';
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

// Lazy load images
const LazyImage = ({ src, alt, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="gallery-item" onClick={onClick}>
      {!loaded && !error && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{ display: loaded ? 'block' : 'none' }}
        loading="lazy"
      />
      {error && (
        <div className="image-error">
          <p>Failed to load image</p>
        </div>
      )}
      <div className="gallery-overlay">
        <ZoomInIcon />
      </div>
    </div>
  );
};

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

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

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (galleryImages.length === 0) {
    return null;
  }

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="gallery-title">Our Work</h2>
        <p className="gallery-subtitle">Take a look at some of our beautiful charcuterie creations</p>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <LazyImage
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => openModal(image)}
            />
          ))}
        </div>

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
