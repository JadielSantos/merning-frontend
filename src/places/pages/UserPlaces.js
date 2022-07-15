import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

export const PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: { lat: 40.7484405, lng: -73.9878584 },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Statue of Liberty",
    description:
      "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in the United States.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Statue_of_Liberty%2C_NY.jpg/640px-Statue_of_Liberty%2C_NY.jpg",
    address: "1 Liberty Island, New York, NY 10007",
    location: { lat: 40.748465, lng: -74.0059413 },
    creator: "u2",
  },
  {
    id: "p3",
    title: "Eiffel Tower",
    description:
      "The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars in Paris, France.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eiffel_tower_from_trocadero.jpg/640px-Eiffel_tower_from_trocadero.jpg",
    address: "5 Avenue Anatole, 75007 Paris, France",
    location: { lat: 48.8583701, lng: 2.2944813 },
    creator: "u3",
  },
  {
    id: "p4",
    title: "The Louvre",
    description:
      "The Louvre is the world's largest museum and a historic site of art, design and architecture, with 1.2 million works spanning more than 160,000 years.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/640px-Louvre_Museum_Wikimedia_Commons.jpg",
    address: "Louvre, Paris, France",
    location: { lat: 48.8606372, lng: 2.3373463 },
    creator: "u4",
  },
  {
    id: "p5",
    title: "Tate Modern",
    description: "Tate Modern is a museum of modern art in London, England.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Tate_modern_London.jpg/640px-Tate_modern_London.jpg",
    address: "1 Picadilly, London, England",
    location: { lat: 51.5019042, lng: -0.1278981 },
    creator: "u3",
  },
  {
    id: "p6",
    title: "The British Museum",
    description:
      "The British Museum is a museum in London, England, whose mission is to preserve and interpret the history of the British people.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/British_Museum_from_NE_2.JPG/640px-British_Museum_from_NE_2.JPG",
    address: "Museum of London, London, England",
    location: { lat: 51.5019042, lng: -0.1278981 },
    creator: "u1",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
