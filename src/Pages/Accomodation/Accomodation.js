import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './AccomodationStyle.css'

import Carrousel from '../../components/Carrousel/Carrousel'
import TitleAccomodation from '../../components/Title-Accomodation/TitleAccomodation'
import LocationAccomodation from '../../components/Location-Accomodation/LocationAccomodation'
import TagsAccomodation from '../../components/Tags-Accomodation/TagsAccomodation'
import HostAccomodation from '../../components/Host-Accomodation/HostAccomodation'
import RatingAccomodation from '../../components/Rating-Accomodation/RatingAccomodation'
import Collapsible from '../../components/Collabse/Collabse'

import data from '../../components/fichierP8.json';


function Accomodation() {
  const { id } = useParams()
  const navigate = useNavigate();
  const [accomodation, setAccomodation] = useState(data.filter(element => {
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
      <div className='presentation'>
        <div>
          <TitleAccomodation title={accomodation[0].title} />
          <LocationAccomodation location={accomodation[0].location} />
          <TagsAccomodation tags={accomodation[0].tags} />
        </div>
        <div className='host'>
        <HostAccomodation host={accomodation[0].host} />
        <RatingAccomodation rating={accomodation[0].rating} />
        </div>
      </div>
      <div className='collabsibles'>
        <Collapsible className='collabsible' title="Description" description={accomodation[0].description} />
        <Collapsible className='collabsible' title="Équipements" description={accomodation[0].equipments} />
      </div>
    </div>
  );
};

export default Accomodation;