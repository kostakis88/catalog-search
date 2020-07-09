import React from 'react';
import Card from './Card';

function CardList(props) {
  return (
    <div>
      {props.users.map( user => {
        return <Card key={user.id} user={user}/>
      })}
    </div>
  );
}

export default CardList;