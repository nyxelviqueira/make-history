import React, { useState, useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Start from "./components/Start";
import Board from "./components/Board";

import { ScorePage } from "./pages/ScorePage";

document.addEventListener(
  "touchmove",
  function (event) {
    if (
      window.scrollY === 0 &&
      event.touches[0].clientY - event.touches[0].pageY > 0
    ) {
      // Previene el comportamiento de pull-to-refresh
      event.preventDefault();
    }
  },
  { passive: false }
);

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [username, setUsername] = useState(""); // Añade el estado para el nombre de usuario

  const [currentScore, setCurrentScore] = useState(0);

  const handleStartGame = (categories, user) => {
    // Añade un segundo parámetro para el nombre de usuario
    setSelectedCategories(categories);
    setUsername(user); // Establece el nombre de usuario
    setGameStarted(true);
  };

  const handleResetGame = () => {
    setGameStarted(false);
    setSelectedCategories([]);
    setUsername(""); // Restablece el nombre de usuario
  };

  // Escucha el evento popstate
  useEffect(() => {
    const handlePopState = () => {
      // Aquí puedes reiniciar el estado del juego si es necesario
      handleResetGame();
    };

    window.addEventListener("popstate", handlePopState);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <>
      <div className="message-movil">
        Por favor, pon tu dispositivo de forma horizontal para empezar a jugar.
        <br />
        <br />
        Please rotate your device horizontally to start playing.
      </div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            gameStarted ? (
              <Board
                categories={selectedCategories}
                onResetGame={handleResetGame}
                username={username} // Pasa el nombre de usuario como propiedad
                setCurrentScore={setCurrentScore}
              />
            ) : (
              <Start onStartGame={handleStartGame} />
            )
          }
        />

        <Route
          path="/scores"
          element={
            <ScorePage
              currentScore={currentScore}
              onResetGame={handleResetGame}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
