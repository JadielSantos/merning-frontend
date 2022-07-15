import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { PLACES } from "./UserPlaces";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      image: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = PLACES.find((place) => place.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
          address: {
            value: identifiedPlace.address,
            isValid: true,
          },
          image: {
            value: identifiedPlace.imageUrl,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setData, identifiedPlace]);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send to backend
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Place not found!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <Card>
          <h2>Loading...</h2>
        </Card>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
        errorText="Please enter a valid title."
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
        errorText="Please enter a valid description (at least 5 characters)."
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        initialValue={formState.inputs.address.value}
        initialValid={formState.inputs.address.isValid}
        errorText="Please enter a valid address."
      />
      <Input
        id="image"
        element="input"
        label="Image"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        initialValue={formState.inputs.image.value}
        initialValid={formState.inputs.image.isValid}
        errorText="Please enter a valid image."
      />
      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};
export default UpdatePlace;
