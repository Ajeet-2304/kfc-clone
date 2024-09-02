// import React from 'react'
// import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/Card.css';
// useParams
// eslint-disable-next-line react/prop-types
const Card = ({img,title}) => {
  // eslint-disable-next-line react/prop-types
  let url = title.replace(/\s+/g, '-');
  return (
    <>
      <Link to={`/menu/${url}`}>
        <div className="card">
            <div className="card-img">
              <img src={img} alt="img" />
            </div>
            <div className="card-title">
              <span>{title}</span>
            </div>
        </div>
      </Link>
        
    </>
  )
}

export default Card