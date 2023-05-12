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
  const [accomodation, setAccomodation] = useState([]);

  useEffect(() => {
    const filteredData = data.filter(element => element.id === id);
    if (filteredData.length === 0) {
      navigate('/Error');
    } else {
      setAccomodation(filteredData);
    }
  }, [id, navigate]);

  return (
    <div>
      {accomodation.length > 0 && (
        <>
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
          <div className='collapsibles'>
            <Collapsible title='Description' description={accomodation[0].description} page="accomodation"/>
            <Collapsible title='Équipements' description={<ul class="list-equipments">{accomodation[0].equipments.map(item => <li>{item}</li>)}</ul>} page="accomodation"/>
          </div>
        </>
      )}
    </div>
  );
}

export default Accomodation;
