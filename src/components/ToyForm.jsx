
import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  // Manage the toy name and image URL entered by the user
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
// Submit the new toy and reset the form fields
  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form submitted!");
  console.log("Toy name:", name);
  console.log("Toy image:", image);
    const newToy = {
      name: name,
      image: image,
      likes: 0
    };

      console.log("New toy:", newToy);

    onAddToy(newToy);

    setName("");
    setImage("");
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>

        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <br />

        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
