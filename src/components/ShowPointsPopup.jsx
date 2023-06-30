import React from "react";
import "../components/styles/showpointspopup.css"; // Crear archivo CSS específico para estilos de ShowPointsPopup

const ShowPointsPopup = ({ visible, points, bonusPoints }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={`points-popup ${points >= 0 ? "positive" : "negative"}`}>
      {points >= 0 ? `+${points}` : points}

      {bonusPoints > 0 && (
        <div className="bonus-points">Bonus: +{bonusPoints}</div>
      )}
    </div>
  );
};

export default ShowPointsPopup;
