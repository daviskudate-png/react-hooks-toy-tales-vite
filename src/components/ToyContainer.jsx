import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDonate, onLike }) {
  // Render a card for each toy and pass down its action handlers
  return (
    <div className="toy-container">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onDonate={onDonate}
          onLike={onLike}
        />
      ))}
    </div>
  );
}

export default ToyContainer;