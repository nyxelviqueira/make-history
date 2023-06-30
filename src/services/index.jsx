//Llamadas de Scores

export const insertScoreService = async (username, score) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/addscore`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, score }),
  });

  if (!response.ok) {
    throw new Error("Failed to add score");
  }
};

export const getScoresService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/scores`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
