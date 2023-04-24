import React from 'react'
import LogoFooter from '../../assets/logo-footer.svg'
import './FooterStyle.css'

export default function Footer() {
    return (
        <div className='Banner-bottom'>
            <img src={LogoFooter} alt='Kasa'/>
        <p className='text-footer'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}