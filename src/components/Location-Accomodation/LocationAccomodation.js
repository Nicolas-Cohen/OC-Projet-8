import { useState } from "react";
import './LocationAccomodationStyle.css'


function LocationAccomodation({ location }) {
  useState(0);

  return <p className="location">{location}</p>;
}

export default LocationAccomodation;
