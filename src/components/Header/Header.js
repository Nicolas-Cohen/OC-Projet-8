import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import LogoHeader from '../../assets/logo-header.svg'
import './HeaderStyle.css'

export default function Header() {
    const location = useLocation();
    return (
        <header className='Header-Kasa'>
            <img className='Logo-Kasa-Header' src={LogoHeader} alt='Kasa' />
            <nav className='Navigation-Banner'>
                <Link to="/" className={location.pathname === '/' ? 'active-link' : 'link-not-active'}>Accueil</Link>
                <Link to="/about" className={location.pathname === '/about' ? 'active-link' : 'link-not-active'}>A Propos</Link>
            </nav>
        </header>
    )
}