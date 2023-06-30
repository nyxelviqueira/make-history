import React from "react";
import Card from "./Card";
import "../components/styles/wrongcard.css";

function WrongCard({ cards }) {
  return (
    <div className="wrong">
      {cards.map((card, index) => (
        <div key={card.id} index={index} className="wrong-card">
          <Card {...card} showBack={true} />{" "}
          {/* Añadir la nueva prop showBack */}
        </div>
      ))}
    </div>
  );
}

export default WrongCard;
