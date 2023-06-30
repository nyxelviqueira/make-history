import React, { useEffect } from "react";
import events from "../data";
import Deck from "./Deck";
import Hand from "./Hand";
import WrongCard from "./WrongCard";
import Score from "./Score";
import { Link } from "react-router-dom";
import { insertScoreService } from "../services";
import usePointsPopup from "../hooks/usePointsPopup";
import useDeck from "../hooks/useDeck";
import useHand from "../hooks/useHand";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import "../components/styles/board.css";
import ShowPointsPopup from "./ShowPointsPopup";

function Board({ categories, onResetGame, username, setCurrentScore }) {
  const { pointsPopup, showPointsPopup } = usePointsPopup();
  const { deck, setDeck, filterDeck } = useDeck(events, categories);
  const {
    hand,
    setHand,
    removed,
    setRemoved,
    score,
    setScore,
    consecutiveHits,
    setConsecutiveHits,
    handleWin,
    isValidPosition,
    handleCardDrop,
  } = useHand(
    username,
    deck,
    filterDeck,
    categories,
    insertScoreService,
    setCurrentScore,
    showPointsPopup,
    setDeck
  );

  useEffect(() => {
    if (hand.length === 12) {
      handleWin();
      setConsecutiveHits(0);
    }
  }, [hand, removed]);

  const renderEndMessage = () => {
    if (hand.length === 12) {
      return (
        <div className="message-win">
          <p>¡Has ganado!</p>
          <Link to={"/scores"} className="link-sin-subrayado">
            <h3 className="results-title">Ver resultados</h3>
          </Link>
          <button onClick={onResetGame}>Reiniciar</button>
        </div>
      );
    } else if (removed.length === 5) {
      return (
        <div className="message-lost">
          <p>¡Has perdido!</p>
          <Link to={"/scores"} className="link-sin-subrayado">
            <h3 className="results-title">Ver resultados</h3>
          </Link>
          <button onClick={onResetGame}>Reiniciar</button>
        </div>
      );
    } else {
      return (
        <Droppable droppableId="deck" direction="horizontal">
          {(droppableProvided) => (
            <div
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="deck-container"
            >
              <Deck cards={deck} />
            </div>
          )}
        </Droppable>
      );
    }
  };

  return (
    <DragDropContext onDragEnd={handleCardDrop}>
      <div className="board">
        <Score score={score} />
        <ShowPointsPopup
          visible={pointsPopup.visible}
          points={pointsPopup.points}
          bonusPoints={pointsPopup.bonusPoints}
        />

        {renderEndMessage()}

        <WrongCard cards={removed} />

        {hand.length < 12 && removed.length < 5 && (
          <div className="fallos">FALLOS RESTANTES: {5 - removed.length}</div>
        )}

        <Droppable droppableId="hand" direction="horizontal">
          {(droppableProvided) => (
            <div
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="hand-container"
            >
              <Hand cards={hand} />
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default Board;
