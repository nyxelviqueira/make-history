import React from "react";
import Card from "./Card";
import { Draggable } from "@hello-pangea/dnd";
import "../components/styles/deck.css";

function Deck({ cards }) {
  const visibleCards = cards.slice(0, 2);
  // En el componente Deck
  console.log("Rendering deck with cards:", cards);

  return (
    <div className="deck">
      {visibleCards
        .map((card, index) => (
          <Draggable draggableId={card.id} key={card.id} index={index}>
            {(draggableProvided) => (
              <div
                {...draggableProvided.draggableProps}
                ref={draggableProvided.innerRef}
                {...draggableProvided.dragHandleProps}
                className="deck-card"
              >
                <Card {...card} />
              </div>
            )}
          </Draggable>
        ))
        .reverse()}
    </div>
  );
}

export default Deck;
