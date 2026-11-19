
import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  // Store whether the toy creation form is visible
  const [showForm, setShowForm] = useState(false);

  // Store all toys fetched from the server
  const [toys, setToys] = useState([]);

  // Fetch toys when the application first loads
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => {
        // Avoid overwriting toys already added to the state
        setToys((currentToys) =>
          currentToys.length === 0 ? data : currentToys
        );
      });
  }, []);

  // Toggle the visibility of the toy creation form
  function handleClick() {
    setShowForm((previousState) => !previousState);
  }

  // Send a new toy to the server and update the toy list
  async function handleAddToy(newToy) {
    const response = await fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    });

    const data = await response.json();

    setToys((currentToys) => [...currentToys, data]);
  }

  // Delete a toy from the server and remove it from the displayed list
  async function handleDonate(toyId) {
    const response = await fetch(
      `http://localhost:3001/toys/${toyId}`,
      {
        method: "DELETE"
      }
    );

    if (response.ok) {
      setToys((currentToys) =>
        currentToys.filter((toy) => toy.id !== toyId)
      );
    }
  }

  // Increase a toy's likes and update the server
  async function handleLike(toyId) {
    const toyToLike = toys.find((toy) => toy.id === toyId);

    if (!toyToLike) return;

    const response = await fetch(
      `http://localhost:3001/toys/${toyId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          likes: toyToLike.likes + 1
        })
      }
    );

    if (response.ok) {
      const updatedToy = await response.json();

      setToys((currentToys) =>
        currentToys.map((toy) =>
          toy.id === toyId ? updatedToy : toy
        )
      );
    }
  }

  return (
    <>
      <Header />

      {/* Display the form when the Add a Toy button is clicked */}
      {showForm && (
        <ToyForm onAddToy={handleAddToy} />
      )}

      <div className="buttonContainer">
        <button onClick={handleClick}>
          Add a Toy
        </button>
      </div>

      {/* Display all toys and pass down their action handlers */}
      <ToyContainer
        toys={toys}
        onDonate={handleDonate}
        onLike={handleLike}
      />
    </>
  );
}

export default App;
