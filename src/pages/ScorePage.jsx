import ScoreList from "../components/ScoreList";
import useListScore from "../hooks/useListScore";

import "./styles/scorePage.css";

export const ScorePage = ({ currentScore, onResetGame }) => {
  console.log("playerScore en ScorePage:", currentScore);
  const { scores, loading, error } = useListScore();

  if (loading) return <p>Cargando resultados...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <ScoreList
        scores={scores}
        currentScore={currentScore}
        onResetGame={onResetGame}
      />
    </>
  );
};
