import { useState } from "react";
import './TitleAccomodationStyle.css'


function TitleAccomodation({ title }) {
  useState(0);

  return <h1 className="title">{title}</h1>;
}

export default TitleAccomodation;
