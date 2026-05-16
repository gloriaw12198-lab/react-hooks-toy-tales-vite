
import React, { useState } from "react";

function ToyForm({ addToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newToy = {
      name,
      image,
      likes: 0,
    };

    addToy(newToy);

    setName("");
    setImage("");
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a Toy!</h3>

        <input
          type="text"
          name="name"
          placeholder="Toy name"
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <br />

        <input
          type="submit"
          value="Add Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;