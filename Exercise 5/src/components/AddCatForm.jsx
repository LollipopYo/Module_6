/* eslint-disable react/prop-types */

import { useState } from "react";

const AddCatForm = ({ addCat }) => {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !latinName || !imageUrl) {
      return; 
    }

    const newCat = {
      id: Date.now(), 
      name,
      latinName,
      imageUrl,
    };


    addCat(newCat);

   
    setName("");
    setLatinName("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-cat-form">
      <h3>Add a New Big Cat</h3>

      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>Latin Name:</label>
      <input
        type="text"
        value={latinName}
        onChange={(e) => setLatinName(e.target.value)}
        required
      />

      <label>Image URL:</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />

      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;
