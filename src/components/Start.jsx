import React, { useState } from "react";
import Board from "./Board";
import "../components/styles/start.css";

function Start({ onStartGame }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(""); // Agrega un estado para el mensaje de error

  function handleStart() {
    if (selectedCategories.length === 0) {
      setError("Debes seleccionar al menos una categoría");
    } else if (!username) {
      setError("Por favor, ingresa tu nombre");
    } else {
      setError("");
      onStartGame(selectedCategories, username); // Pasa el nombre de usuario como un segundo argumento
      setGameStarted(true);
    }
  }

  function toggleCategory(category) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  }

  if (gameStarted) {
    return (
      <div className="App">
        <Board categories={selectedCategories} username={username} />
      </div>
    );
  } else {
    const categories = [
      "Política y guerra",
      "Ciencia y tecnología",
      "Deporte",
      "Arte y literatura",
      "Música y cine",
    ];
    return (
      <div className="start-container">
        <p className="start-message">
          ¡Hola! Bienvenido o bienvenida a Make History, un juego donde te
          divertirás aprendiendo historia. <br></br>Mueve tu primera carta desde
          el mazo hasta tu mano y ahí empezará tu viaje.
          <br></br>¿Crees que los acontecimientos han pasado antes o después de
          tu carta principal? ¡Consigue juntar 12 cartas y habrás ganado!
          <br></br>Tienes 5 fallos permitidos. ¡Demuestra lo que vales!
        </p>
        <section className="enter-username">
          <h2>Ingresa tu nombre</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nombre"
          />
        </section>
        <section className="choose-categories">
          <h2>Escoge tus categorías</h2>
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => toggleCategory(category)}
                className={
                  selectedCategories.includes(category) ? "selected" : ""
                }
              >
                {selectedCategories.includes(category) ? (
                  <strong>{category}</strong>
                ) : (
                  category
                )}
              </li>
            ))}
          </ul>
        </section>
        {error && <p className="error-message">{error}</p>}{" "}
        <button className="start-button" onClick={handleStart}>
          Start
        </button>
      </div>
    );
  }
}

export default Start;
