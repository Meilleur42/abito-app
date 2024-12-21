import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({title,  price, img, address, date, id}) => { 

  return (
    <Link to={`/product/${id}`} className="card">
                <div className="card--img">
                    <img src={img} alt={title}/>
                </div>
                <h5 className="card--title">
               {title}
                </h5>
                <strong className="card--price">{price}
                </strong>
                <div className="card--descr">
                    <span className="card--text">
                    {address}
                    </span>
                    <span className="card--text">
                    {date}
                    </span>
                </div>
            </Link>
  )
}

export default Card