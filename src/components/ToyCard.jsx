import React from "react";

function ToyCard({ toy, onLike, onDelete }) {
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes</p>

      <button onClick={() => onLike(toy)} className="like-btn">
        Like ❤️
      </button>

      <button
        onClick={() => onDelete(toy.id)}
        className="del-btn"
      >
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;