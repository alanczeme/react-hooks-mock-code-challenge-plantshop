import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData }) {

  const plantTile = plantData.map((plant) => {return <PlantCard key={plant.id} plant={plant} />})

  return (
    <ul className="cards">{plantTile}</ul>
  );
}

export default PlantList;
