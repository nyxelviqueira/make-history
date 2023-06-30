import React from "react";
import Card from "./Card";
import { Draggable } from "@hello-pangea/dnd";
import "../components/styles/hand.css";

function Hand({ cards }) {
  return (
    <div className="hand">
      {cards &&
        cards.map(
          (
            handCard,
            index // Agrega una verificación adicional aquí
          ) => (
            <Draggable
              draggableId={handCard.id}
              key={handCard.id}
              index={index}
              isDragDisabled={true} // Deshabilita el arrastre para las cartas en la mano
            >
              {(draggableProvided) => (
                <div
                  {...draggableProvided.draggableProps}
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.dragHandleProps}
                  className="hand-card"
                >
                  <Card {...handCard} showBack={true} />
                </div>
              )}
            </Draggable>
          )
        )}
      {cards && cards.length === 0 && (
        <p className="message-start">
          ¡Arrastra aquí la primera carta para empezar a jugar!
        </p>
      )}
    </div>
  );
}

export default Hand;
