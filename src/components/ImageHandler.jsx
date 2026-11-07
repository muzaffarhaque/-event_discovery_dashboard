



import React, { useState } from 'react';
import defaultImage from '../assets/images/tengku-nadia-fz8_SONkBB8-unsplash.jpg'; // Import your local image

function ImageHandler() {
  const [imgSrc, setImgSrc] = useState(
    "https://images.unsplash.com/photo-1670028514318-0ac718c0590d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  );
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(defaultImage); // Fallback to local image
    }
  };

  return (
    <img 
      className="event image" 
      src={imgSrc} 
      alt="Event image" 
      onError={handleError} 
    />
  );
}

export default ImageHandler;