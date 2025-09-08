import React, { useState } from 'react';
import '../styles/Gallery.css';

// Import all gallery images
import img1 from '../assets/gallery/Tezza-9489.JPG';
import img2 from '../assets/gallery/Tezza-9483.JPG';
import img3 from '../assets/gallery/Tezza-9341.JPG';
import img4 from '../assets/gallery/Tezza-9225.JPG';
import img5 from '../assets/gallery/Tezza-9062.JPG';
import img6 from '../assets/gallery/Tezza-8749.JPG';
import img7 from '../assets/gallery/Tezza-8727.JPG';
import img8 from '../assets/gallery/Tezza-8575.JPG';
import img9 from '../assets/gallery/Tezza-8541.jpeg';
import img10 from '../assets/gallery/Tezza-8437.JPG';
import img11 from '../assets/gallery/Tezza-8160.JPG';
import img12 from '../assets/gallery/Tezza-8097 2.JPG';
import img13 from '../assets/gallery/Tezza-8028.JPG';
import img14 from '../assets/gallery/Tezza-7958.JPG';
import img15 from '../assets/gallery/Tezza-7905.JPG';
import img16 from '../assets/gallery/Tezza-7804.JPG';
import img17 from '../assets/gallery/Tezza-7326.JPG';
import img18 from '../assets/gallery/Tezza-7216.JPG';
import img19 from '../assets/gallery/Tezza-7095.JPG';
import img20 from '../assets/gallery/Tezza-6849.JPG';
import img21 from '../assets/gallery/Tezza-6478.JPG';
import img22 from '../assets/gallery/Tezza-6188.JPG';
import img23 from '../assets/gallery/Tezza-6168.JPG';
import img24 from '../assets/gallery/Tezza-5019.JPG';
import img25 from '../assets/gallery/Tezza-4798.JPG';
import img26 from '../assets/gallery/Tezza-4700.JPG';
import img27 from '../assets/gallery/Tezza-4570.JPG';
import img28 from '../assets/gallery/Tezza-4564.JPG';
import img29 from '../assets/gallery/Tezza-4101.JPG';
import img30 from '../assets/gallery/Tezza-4033.JPG';
import img31 from '../assets/gallery/Tezza-3907.JPG';
import img32 from '../assets/gallery/Tezza-3813.JPG';
import img33 from '../assets/gallery/Tezza-3576.JPG';
import img34 from '../assets/gallery/Tezza-3474.JPG';
import img35 from '../assets/gallery/Tezza-3283.JPG';
import img36 from '../assets/gallery/Tezza-3070.JPG';
import img37 from '../assets/gallery/Tezza-2975.JPG';
import img38 from '../assets/gallery/Tezza-2838.JPG';
import img39 from '../assets/gallery/Tezza-2336.JPG';
import img40 from '../assets/gallery/Tezza-1950.JPG';
import img41 from '../assets/gallery/Tezza-1660.JPG';
import img42 from '../assets/gallery/Tezza-1657.JPG';
import img43 from '../assets/gallery/Tezza-1509.JPG';
import img44 from '../assets/gallery/Tezza-1489.JPG';
import img45 from '../assets/gallery/Tezza-1200.JPG';
import img46 from '../assets/gallery/Tezza-1082.JPG';
import img47 from '../assets/gallery/Tezza-0993.JPG';
import img48 from '../assets/gallery/Tezza-0864.JPG';
import img49 from '../assets/gallery/Tezza-0801.JPG';
import img50 from '../assets/gallery/Tezza-0771.JPG';
import img51 from '../assets/gallery/Tezza-0259.JPG';
import img52 from '../assets/gallery/Tezza-0253.JPG';
import img53 from '../assets/gallery/Tezza-0221.JPG';
import img54 from '../assets/gallery/Tezza-0218.JPG';
import img55 from '../assets/gallery/Tezza-0115.JPG';
import img56 from '../assets/gallery/IMG_4732.JPG';
import img57 from '../assets/gallery/IMG_0872.JPEG';
import img58 from '../assets/gallery/F3661D3E-90FC-45B4-81C9-17763EDD0947.JPG';
import img59 from '../assets/gallery/EB1E55E8-3251-4AC3-9225-8875D74151E3.JPG';
import img60 from '../assets/gallery/E900D4FB-79F5-4C1E-8E27-DC0181AB4395.JPG';
import img61 from '../assets/gallery/D12F69CA-8BD5-4A4C-B68F-5813ACC22954.JPG';
import img62 from '../assets/gallery/BC949C29-63BD-46FD-9EE8-4A68212D891D.JPG';
import img63 from '../assets/gallery/761EB845-6E51-459E-88A0-932803420DCE.JPG';
import img64 from '../assets/gallery/334E7790-6A5A-43E4-A90D-97A46662B29A.JPG';
import img65 from '../assets/gallery/1391E61D-1A9A-47D1-B968-67FBC53CEE0F.JPG';

// Function to shuffle array randomly
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Original array of images
const originalImages = [
  { src: img1, alt: 'Charcuterie Board' },
  { src: img2, alt: 'Grazing Table' },
  { src: img3, alt: 'Artisanal Charcuterie' },
  { src: img4, alt: 'Custom Board' },
  { src: img5, alt: 'Wedding Charcuterie' },
  { src: img6, alt: 'Event Setup' },
  { src: img7, alt: 'Premium Selection' },
  { src: img8, alt: 'Gourmet Display' },
  { src: img9, alt: 'Special Occasion' },
  { src: img10, alt: 'Custom Creation' },
  { src: img11, alt: 'Artisanal Spread' },
  { src: img12, alt: 'Celebration Board' },
  { src: img13, alt: 'Elegant Display' },
  { src: img14, alt: 'Gourmet Selection' },
  { src: img15, alt: 'Premium Charcuterie' },
  { src: img16, alt: 'Artisanal Board' },
  { src: img17, alt: 'Custom Grazing' },
  { src: img18, alt: 'Wedding Display' },
  { src: img19, alt: 'Event Charcuterie' },
  { src: img20, alt: 'Special Board' },
  { src: img21, alt: 'Gourmet Creation' },
  { src: img22, alt: 'Premium Display' },
  { src: img23, alt: 'Artisanal Selection' },
  { src: img24, alt: 'Custom Board' },
  { src: img25, alt: 'Elegant Charcuterie' },
  { src: img26, alt: 'Wedding Grazing' },
  { src: img27, alt: 'Event Display' },
  { src: img28, alt: 'Special Occasion' },
  { src: img29, alt: 'Gourmet Board' },
  { src: img30, alt: 'Premium Selection' },
  { src: img31, alt: 'Artisanal Display' },
  { src: img32, alt: 'Custom Creation' },
  { src: img33, alt: 'Wedding Charcuterie' },
  { src: img34, alt: 'Event Board' },
  { src: img35, alt: 'Gourmet Selection' },
  { src: img36, alt: 'Premium Display' },
  { src: img37, alt: 'Artisanal Board' },
  { src: img38, alt: 'Custom Grazing' },
  { src: img39, alt: 'Wedding Display' },
  { src: img40, alt: 'Event Charcuterie' },
  { src: img41, alt: 'Special Board' },
  { src: img42, alt: 'Gourmet Creation' },
  { src: img43, alt: 'Premium Charcuterie' },
  { src: img44, alt: 'Artisanal Selection' },
  { src: img45, alt: 'Custom Board' },
  { src: img46, alt: 'Elegant Display' },
  { src: img47, alt: 'Wedding Grazing' },
  { src: img48, alt: 'Event Board' },
  { src: img49, alt: 'Special Occasion' },
  { src: img50, alt: 'Gourmet Selection' },
  { src: img51, alt: 'Premium Display' },
  { src: img52, alt: 'Artisanal Board' },
  { src: img53, alt: 'Custom Creation' },
  { src: img54, alt: 'Wedding Charcuterie' },
  { src: img55, alt: 'Event Display' },
  { src: img56, alt: 'Special Board' },
  { src: img57, alt: 'Gourmet Selection' },
  { src: img58, alt: 'Premium Charcuterie' },
  { src: img59, alt: 'Artisanal Display' },
  { src: img60, alt: 'Custom Board' },
  { src: img61, alt: 'Wedding Grazing' },
  { src: img62, alt: 'Event Charcuterie' },
  { src: img63, alt: 'Special Occasion' },
  { src: img64, alt: 'Gourmet Board' },
  { src: img65, alt: 'Premium Selection' }
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Shuffle the images array when component mounts
  const [galleryImages] = useState(() => shuffleArray(originalImages));

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">Our Work</h2>
          <p className="gallery-subtitle">
            Take a look at some of our beautiful charcuterie boards and grazing tables
          </p>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="gallery-icon">🔍</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
