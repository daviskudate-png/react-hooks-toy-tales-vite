import React from "react";
// Display the toy's name, image, and number of likes
function ToyCard({ toy, onDonate, onLike }) {
  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>

      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />

      <p>{toy.likes} Likes </p>
// Increase the toy's likes when clicked
      <button
        className="like-btn"
        onClick={() => onLike(toy.id)}
      >
        Like {"<3"}
      </button>
// Remove the toy from the collection when donated
      <button
        className="del-btn"
        onClick={() => onDonate(toy.id)}
      >
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;