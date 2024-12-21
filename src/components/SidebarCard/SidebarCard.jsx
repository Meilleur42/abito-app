import React from 'react';
import './SidebarCard.css'

const SidebarCard = ({img, alt, title, text}) => {
  return (
    <div className="content__sidebar--list-item">
    <img
      className="content__sidebar--list-item--img"
      src={img}
      alt={alt}
    />
    <h5 className="sidebar__card--title">
      {title}
    </h5>
    <p className="sidebar__card--text">
      {text}
    </p>
  </div>
  )
}

export default SidebarCard