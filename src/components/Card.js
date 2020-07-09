import React from 'react';

function Card(props) {
  return (
    <div>
      <span>{props.user.name}</span>
    </div>
  );
}

export default Card;