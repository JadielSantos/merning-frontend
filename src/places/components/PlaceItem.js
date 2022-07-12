import React from "react";

import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.place.imageUrl} alt={props.place.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.place.title}</h2>
          <h3>{props.place.address}</h3>
          <p>{props.place.description}</p>
        </div>
        <div className="place-item__actions">
          <button>View on Map</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
