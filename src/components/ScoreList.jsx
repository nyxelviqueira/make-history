import React from "react";
import { useNavigate } from "react-router-dom";

import "../components/styles/scorelist.css";

const ScoreList = ({ scores, currentScore, onResetGame }) => {
  console.log("Scores:", scores);
  console.log("Currentscore:", currentScore);

  const navigate = useNavigate();

  const handlePlayAgain = () => {
    navigate("/");
    onResetGame(); // assuming the game is on the root path
  };

  console.log(currentScore);

  return (
    <div className="score-list">
      <h1>Puntuaciones</h1>
      {currentScore !== undefined && (
        <div className="current-score">
          Tu puntuación: <strong>{currentScore}</strong>
        </div>
      )}

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre de Usuario</th>
              <th>Puntuación</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{score.username}</td>
                <td>{score.score}</td>
                <td>{formatDate(score.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="play-again-button" onClick={handlePlayAgain}>
        Volver a jugar
      </button>
    </div>
  );
};

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default ScoreList;
