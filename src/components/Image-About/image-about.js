import React from 'react'
import ImageHome from '../../assets/photo-about.png'
import './ImageAboutStyle.css'

export default function Image() {
    return (
        <div className='BannerAbout'>
            <img src={ImageHome} alt='Paysage' className='ImageAbout'/>
        </div>
    )
}