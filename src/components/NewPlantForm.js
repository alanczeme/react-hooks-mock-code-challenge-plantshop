import React, { useState } from "react";

function NewPlantForm({ onFormSubmit }) {

  const [plantName, setPlantName] = useState('');
  const [plantImage, setPlantImage] = useState('');
  const [plantPrice, setPlantPrice] = useState('');

  function handleSubmit(e) {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
            "name": plantName,
            "image": plantImage,
            "price": plantPrice,
        }),
    })
    .then(response => response.json())
    .then(data => onFormSubmit(data))
    .catch((error) => console.error('Error:', error))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setPlantName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setPlantImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setPlantPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
