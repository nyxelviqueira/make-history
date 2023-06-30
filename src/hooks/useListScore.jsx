import { useEffect, useState } from "react";
import { getScoresService } from "../services";

const useListScore = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadScores = async () => {
      try {
        setLoading(true);

        const data = await getScoresService();
        setScores(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadScores();
  }, []);

  return { scores, loading, error };
};

export default useListScore;
