// Card.js
import React, { useState } from 'react';

export default function Card({ image, title, text }) {
  //hooks area
  const [hover, setHover] = useState(false)

  //function definetion area


  //return statments
  return (
    <div className="col-sm-4 p-1">
      <div className="card">
        {image &&
          <img
          onMouseEnter={()=>setHover(true)}
          onMouseLeave={()=>setHover(false)}
           src={image} 
           className="card-img-top img-fluid " 
           style={{
            transform: hover ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.6s ease',
            cursor: 'pointer'
          }}

           alt="..." />}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="/" className="btn btn-primary">
            Go To Home
          </a>
        </div>
      </div>
    </div>
  );
}
