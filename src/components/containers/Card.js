import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-container">
        <h2>{props.name}</h2>
        <h4>
          {props.genre} - {props.year}
        </h4>
        <img src={props.image} alt="defaulr cine " width="300px" />
      </div>
    </div>
  );
};

export default Card;
