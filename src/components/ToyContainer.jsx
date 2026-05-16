import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onLike, onDelete }) {
  const toyCards = toys.map((toy) => (
    <ToyCard
      key={toy.id}
      toy={toy}
      onLike={onLike}
      onDelete={onDelete}
    />
  ));

  return <div className="card-container">{toyCards}</div>;
}

export default ToyContainer;
