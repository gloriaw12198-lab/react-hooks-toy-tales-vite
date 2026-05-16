import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ToyContainer from "./components/ToyContainer";
import ToyForm from "./components/ToyForm";

function App() {
  const [toys, setToys] = useState([]);

  // GET request
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // POST request
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

  // PATCH request
  function handleLike(updatedToy) {
    fetch(`http://localhost:3001/toys/${updatedToy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: updatedToy.likes + 1,
      }),
    })
      .then((res) => res.json())
      .then((newToy) => {
        const updatedToys = toys.map((toy) =>
          toy.id === newToy.id ? newToy : toy
        );

        setToys(updatedToys);
      });
  }

  // DELETE request
  function handleDelete(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    });

    const filteredToys = toys.filter((toy) => toy.id !== id);
    setToys(filteredToys);
  }

  return (
    <div className="App">
      <Header />
      <ToyForm addToy={addToy} />
      <ToyContainer
        toys={toys}
        onLike={handleLike}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;