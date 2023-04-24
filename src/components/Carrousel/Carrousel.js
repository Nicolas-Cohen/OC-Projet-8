import React, { useEffect, useState } from 'react';
import ArrowLeft from '../../assets/arrow-left.png'
import ArrowRight from '../../assets/arrow-right.png'
import './CarrouselStyle.css'

function Carrousel({ pictures }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  function handlePrevClick() {
    setCurrentImgIndex((currentImgIndex - 1 + pictures.length) % pictures.length);
  }

  function handleNextClick() {
    setCurrentImgIndex((currentImgIndex + 1) % pictures.length);
  }

  if (pictures.length === 1) {
    return (
      <div className='Carrousel'>
        <img src={pictures[0]} alt="Apartment" className='image-carrousel'/>
      </div>
    );
  }

  return (
    <div className='Carrousel'>
      <img src={ArrowLeft} alt='Flèche gauche' className='Arrow-left' onClick={handlePrevClick} />
      <img src={pictures[currentImgIndex]} alt="Apartment" className='image-carrousel'/>
      <img src={ArrowRight} alt='Flèche droite' className='Arrow-right' onClick={handleNextClick} />

      <div className="position">
        <p>{currentImgIndex + 1}/{pictures.length}</p>
      </div>
    </div>
  );
}

export default Carrousel;
