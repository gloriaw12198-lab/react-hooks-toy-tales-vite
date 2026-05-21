import React, { useEffect, useState } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // GET all toys
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // POST new toy
  function addToy(newToy) {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((toy) => setToys([...toys, toy]));
  }

  // PATCH likes
  function handleLike(toy) {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes + 1,
      }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        const updatedToys = toys.map((t) =>
          t.id === updatedToy.id ? updatedToy : t
        );
        setToys(updatedToys);
      });
  }

  // DELETE toy
  function handleDelete(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    });

    const filtered = toys.filter((toy) => toy.id !== id);
    setToys(filtered);
  }

  return (
    <div className="App">
      <Header />
      <div className="buttonContainer">
        <button onClick={() => setShowForm((showForm) => !showForm)}>
          Add a Toy
        </button>
      </div>
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <ToyContainer
        toys={toys}
        onLike={handleLike}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
