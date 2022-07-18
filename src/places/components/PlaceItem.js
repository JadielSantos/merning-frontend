import React, { useState, useContext } from "react";
import Button from "../../shared/components/FormElements/Button";

import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../shared/context/auth-context";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const openConfirmHandler = () => setShowConfirmModal(true);

  const closeConfirmHandler = () => setShowConfirmModal(false);

  const deletePlaceHandler = () => {
    console.log("Deleting...");
    setShowConfirmModal(false);
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.place.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="place-item__map-container">
          <Map center={props.place.location} zoom={16} />
        </div>
      </Modal>
      <Modal
        header="Are you sure?"
        show={showConfirmModal}
        onCancel={closeConfirmHandler}
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={closeConfirmHandler}>
              CANCEL
            </Button>
            <Button danger onClick={deletePlaceHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <div className="text-center">
          <p>Do you want to proceed and delete this place?</p>
          <p>Please note that it can't be undone.</p>
        </div>
      </Modal>
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
            <Button inverse onClick={openMapHandler}>
              View on Map
            </Button>
            {auth.isLoggedIn && (
              <>
                <Button to={`/places/${props.place.id}`}>Edit</Button>
                <Button danger onClick={openConfirmHandler}>
                  Delete
                </Button>
              </>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
