import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AccomodationStyle.css';

import Carrousel from '../../components/Carrousel/Carrousel';
import TitleAccomodation from '../../components/Title-Accomodation/TitleAccomodation';
import LocationAccomodation from '../../components/Location-Accomodation/LocationAccomodation';
import TagsAccomodation from '../../components/Tags-Accomodation/TagsAccomodation';
import HostAccomodation from '../../components/Host-Accomodation/HostAccomodation';
import RatingAccomodation from '../../components/Rating-Accomodation/RatingAccomodation';
import Collapsible from '../../components/Collapse/Collapse';

import data from '../../components/fichierP8.json';

function Accomodation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accomodation, setAccomodation] = useState(null);

  useEffect(() => {
    const filteredData = data.find(element => element.id === id);
    if (!filteredData) {
      navigate('/Error');
    } else {
      setAccomodation(filteredData);
    }
  }, [id, navigate]);

  return (
    <div>
      {accomodation && (
        <>
          <Carrousel pictures={accomodation.pictures} />
          <div className='presentation'>
            <div>
              <TitleAccomodation title={accomodation.title} />
              <LocationAccomodation location={accomodation.location} />
              <TagsAccomodation tags={accomodation.tags} />
            </div>
            <div className='host'>
              <HostAccomodation host={accomodation.host} />
              <RatingAccomodation rating={accomodation.rating} />
            </div>
          </div>
          <div className='collapsibles'>
            <Collapsible title='Description' description={accomodation.description} page="accomodation"/>
            <Collapsible title='Équipements' description={<ul class="list-equipments">{accomodation.equipments.map(item => <li>{item}</li>)}</ul>} page="accomodation"/>
          </div>
        </>
      )}
    </div>
  );
}

export default Accomodation;
