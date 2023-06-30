import { useState, useEffect } from "react";

const usePointsPopup = () => {
  const [pointsPopup, setPointsPopup] = useState({
    visible: false,
    points: 0,
    bonusPoints: 0,
  });

  const showPointsPopup = (points, bonusPoints = 0) => {
    setPointsPopup({ visible: true, points, bonusPoints });
    setTimeout(() => {
      setPointsPopup({ visible: false, points: 0, bonusPoints: 0 });
    }, 1500);
  };

  return { pointsPopup, showPointsPopup };
};

export default usePointsPopup;
