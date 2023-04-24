import React from 'react'
import {Link} from "react-router-dom"
import './ErrorStyle.css'


export default function Error() {
    return (
        <div className='ErrorPage'>
            <h1 className='TitleError'>404</h1>
            <p className='text-error'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='ComeBack-Home-Error'>Retourner sur la page d’accueil</Link>
        </div>
    )
}