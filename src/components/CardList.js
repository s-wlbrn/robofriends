import React from 'react';
import './CardList.css';
import Card from './Card';

const CardList = ({ robots }) => {
  return !robots.length ?
    <h2 id="notfound">No friends found.</h2> :
    (
      <div className="cardlist">
        {
          robots.map((user, i) => {
            return (
              <Card 
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
              />
            );
          })
        }
      </div>
    )
}

export default CardList;