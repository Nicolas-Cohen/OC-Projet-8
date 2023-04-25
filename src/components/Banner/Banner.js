import React from 'react';
import { useLocation } from 'react-router-dom';
import ImageHome from '../../assets/photo-home.png'
import ImageAbout from '../../assets/photo-about.png'
import './BannerStyle.css'



const Banner = () => {
  const location = useLocation();

  const getBannerImage = () => {
    switch(location.pathname) {
      case '/':
        return ImageHome;
      case '/about':
        return ImageAbout;
      default:
        return ImageHome;
    }
  }

  return (
    <div className="banner">
      {location.pathname === '/' && <p className="text-ImageHome">Chez vous, partout et ailleurs</p>}
      <img src={getBannerImage()} alt="Paysage" className='banner-image'/>
    </div>
  );
}

export default Banner;
