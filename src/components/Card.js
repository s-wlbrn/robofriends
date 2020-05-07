import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
  return (
    <div className='card grow'>
      <img 
        src={`https://robohash.org/${id}?size=200x200`}
        alt="robot"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;