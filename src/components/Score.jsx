import "../components/styles/score.css";

function Score({ score }) {
  return (
    <div className="score">
      <h2>PUNTUACIÓN</h2>
      <div>{score}</div>
    </div>
  );
}

export default Score;
