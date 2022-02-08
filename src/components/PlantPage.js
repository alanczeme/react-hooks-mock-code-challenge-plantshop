import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [ plantData, setPlantData ] = useState([])
  const [ searchText, setSearchText ] = useState('')

  function addPlant(newPlant) {
    newPlant.preventDefault()
    setPlantData([...plantData, newPlant]);
  }

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(data => setPlantData(data))
  }, [])

  const filteredPlantData = plantData.filter((plant) => plant.name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <main>
      <NewPlantForm onFormSubmit={addPlant} />
      <Search setSearchText={setSearchText} />
      <PlantList plantData={filteredPlantData} />
    </main>
  );
}

export default PlantPage;
