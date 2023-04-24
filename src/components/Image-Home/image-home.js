import React from 'react'
import ImageHome from './photo-home.png'
import './ImageHomeStyle.css'

export default function Image() {
    return (
        <div className='BannerHome'>
            <img src={ImageHome} alt='Paysage' className='ImageHome'/>
            <p className='text-ImageHome'>Chez vous, partout et ailleurs</p>
        </div>
    )
}