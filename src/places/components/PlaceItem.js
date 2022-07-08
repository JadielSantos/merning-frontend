import React from "react";

import './PlaceItem.css';

const PlaceItem = (props) => {
  return (
    <li className="place-item">
      <div className="image-container">
        <img src={props.place.imageUrl} alt={props.place.title} />
      </div>
      <div className="info">
        <div className="title">{props.place.title}</div>
        <div className="address">{props.place.address}</div>
      </div>
      <div className="actions">
        <button className="button">Edit</button>
        <button className="button">Delete</button>
      </div>
    </li>
  );
};

export default PlaceItem;
