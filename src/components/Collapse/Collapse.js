import React, { useState } from 'react';
import DownArrow from '../../assets/down-arrow.png'
import UpArrow from '../../assets/up-arrow.png'
import './CollapseStyle.css'

function Collapsible({ title, description, page }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getCollapsibleStyle = () => {
    if (page === 'about') return 'about-collapsible-style';
    if (page === 'accomodation') return 'accomodation-collapsible-style';
    return '';
  };

  return (
    <div className={`collapsible-container ${getCollapsibleStyle()}`}>
      <button className="collapsible-button" onClick={toggleCollapsible}>
        {title}
        <img src={isCollapsed ? DownArrow : UpArrow} alt='Flèche' className={`Arrow ${isCollapsed ? 'down' : 'up'}`} />
      </button>
      {!isCollapsed && <div className="collapsible-description">{description}</div>}
    </div>
  );
}

export default Collapsible;
