import React from 'react';
import data from '../fichierP8.json';
import { Link } from 'react-router-dom'
import './AppartementStyle.css'

function Appartement() {
  return (
    <div className='Section-Appartements'>
      {data.map((appartement) => (
        <Link to={`./accomodation/${appartement.id}`} key={appartement.title}>
          <div className='Card-Appartement'>
            <h2 className='Card-title'>{appartement.title}</h2>
            <img className='Card-image' src={appartement.cover} alt={appartement.title}/>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Appartement;
