import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Carrousel from '../../components/Carrousel/Carrousel'
import data from '../../components/fichierP8.json';


function Accomodation() {
  const {id} = useParams()
  const navigate = useNavigate();
  const [accomodation, setAccomodation] = useState( data.filter(element => {
    if (element.id === id) {
      return element
    }
  })); 

  if (accomodation.length === 0) {
    navigate('/error')
  }

  return (
    <div>
      <Carrousel pictures={accomodation[0].pictures} />
    </div>
  );
};

export default Accomodation;