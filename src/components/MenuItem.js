import React, { useState, useRef, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import QuantityModal from './QuantityModal';
import CustomOrderModal from './CustomOrderModal';
import '../styles/MenuItem.css';

// Lazy loading image component for menu items
const LazyMenuItemImage = ({ src, alt, className = '' }) => {
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
        rootMargin: '100px' // Start loading when close to viewport
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
      className={`menu-item-image ${className}`}
    >
      {/* Placeholder while not in view or loading */}
      {(!inView || (!loaded && !error)) && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
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
    </div>
  );
};

function MenuItem({ id, name, image, price, description, serves, category }) {
  const { addToCart } = useCart();
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [showCustomOrderModal, setShowCustomOrderModal] = useState(false);
  
  const isVariablePrice = price === "Price varies";
  const hasMinimumOrder = id === 'charcuterie-cups' || id === 'charcuterie-boxes';

  const handleAddToCart = () => {
    if (isVariablePrice) {
      setShowCustomOrderModal(true);
    } else {
      setShowQuantityModal(true);
    }
  };

  const handleQuantitySubmit = (quantity) => {
    addToCart({
      id,
      name,
      price,
      description,
      serves,
      category,
      quantity
    });
    setShowQuantityModal(false);
  };

  const handleCustomOrderSubmit = (customOptions) => {
    addToCart({
      id,
      name,
      price: "Price varies",
      description,
      serves,
      category,
      quantity: 1,
      customOptions
    });
    setShowCustomOrderModal(false);
  };

  return (
    <>
      <div className="menu-item">
        <LazyMenuItemImage
          src={image}
          alt={name}
          className="menu-image"
        />
        
        <div className="menu-item-content">
          <h3 className="menu-item-name">{name}</h3>
          <p className="menu-item-description">{description}</p>
          
          {hasMinimumOrder && (
            <p className="minimum-order-note">Minimum Order: 10 pieces</p>
          )}
          
          {!isVariablePrice && !hasMinimumOrder && (
            <p className="menu-item-serves">Serves: {serves}</p>
          )}
          
          <div className="menu-item-footer">
            <span className="menu-item-price">
              {isVariablePrice ? "Price varies" : `$${price.toFixed(2)}`}
            </span>
            <button 
              className="btn btn-primary add-to-cart-btn"
              onClick={handleAddToCart}
            >
              {isVariablePrice ? "Get Quote" : "Add to Order"}
            </button>
          </div>
        </div>
      </div>

      {showQuantityModal && (
        <QuantityModal
          itemName={name}
          itemPrice={price}
          onSubmit={handleQuantitySubmit}
          onClose={() => setShowQuantityModal(false)}
          hasMinimumOrder={hasMinimumOrder}
        />
      )}

      {showCustomOrderModal && (
        <CustomOrderModal
          itemName={name}
          onSubmit={handleCustomOrderSubmit}
          onClose={() => setShowCustomOrderModal(false)}
        />
      )}
    </>
  );
}

export default MenuItem;
