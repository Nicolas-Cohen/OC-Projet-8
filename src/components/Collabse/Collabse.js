import React, { useState } from 'react';
import DownArrow from '../../assets/down-arrow.png'
import UpArrow from '../../assets/up-arrow.png'
import './CollabseStyle.css'


function Collapsible({ title, description }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapsible-container">
      <button className="collapsible-button" onClick={toggleCollapsible}>
        {title}
        <img src={isCollapsed ? DownArrow : UpArrow} alt='Flèche' className={`Arrow ${isCollapsed ? 'down' : 'up'}`}/>
      </button>
      {!isCollapsed && <div className="collapsible-description">{description}</div>}
    </div>
  );
}

export default Collapsible;

