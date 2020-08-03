import React from "react";
import "./card.styles.css";

const Card = (props) => {
  console.log(props.monster.id);
  return (
    <div className='card-container'>
      <h1>{props.monster.name}</h1>
      <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
    </div>
  );
};
export default Card;
