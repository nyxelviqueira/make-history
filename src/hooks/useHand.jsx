import { useState, useCallback } from "react";

const useHand = (
  username,
  deck,
  filterDeck,
  categories,
  insertScoreService,
  setCurrentScore,
  showPointsPopup,
  setDeck
) => {
  const [hand, setHand] = useState([]);
  const [removed, setRemoved] = useState([]);
  const [score, setScore] = useState(0);
  const [consecutiveHits, setConsecutiveHits] = useState(0);

  const handleWin = useCallback(async () => {
    try {
      await insertScoreService(username, score);
      setCurrentScore(score);
      console.log("Score successfully added:", score);
    } catch (error) {
      console.error("Failed to add score:", error);
    }
  }, [username, score, insertScoreService, setCurrentScore]);

  const isValidPosition = useCallback((card, newHand) => {
    const index = newHand.indexOf(card);
    const cardYear = parseInt(card.date);

    return (
      newHand.slice(0, index).every((c) => parseInt(c.date) <= cardYear) &&
      newHand.slice(index + 1).every((c) => parseInt(c.date) >= cardYear)
    );
  }, []);

  const handleCardDrop = useCallback(
    (result) => {
      console.log("onDragEnd triggered");
      const { source, destination } = result;

      if (
        !destination ||
        (source.index === destination.index &&
          source.droppableId === destination.droppableId)
      ) {
        return;
      }

      if (destination.droppableId === "hand") {
        const card = deck[source.index];
        const newHand = [...hand];
        newHand.splice(destination.index, 0, card);

        // Calcular diferencia de años por separado
        let yearDifferenceLeft = 0;
        let yearDifferenceRight = 0;

        // Variables para comprobar si hay cartas a la izquierda o derecha
        let isLeftCard = false;
        let isRightCard = false;
        const cardYear = parseInt(card.date);
        if (destination.index > 0) {
          const leftCardYear = parseInt(newHand[destination.index - 1].date);
          yearDifferenceLeft = Math.abs(cardYear - leftCardYear);
          isLeftCard = true; // Hay una carta a la izquierda
        }
        if (destination.index < newHand.length - 1) {
          const rightCardYear = parseInt(newHand[destination.index + 1].date);
          yearDifferenceRight = Math.abs(cardYear - rightCardYear);
          isRightCard = true; // Hay una carta a la derecha
        }

        console.log("Años de diferencia izquierda", yearDifferenceLeft);
        console.log("Años de diferencia derecha", yearDifferenceRight);

        // Calcular multiplicadores según el número de categorías
        let multiplierOnSuccess;
        let multiplierOnFail;
        switch (categories.length) {
          case 1:
            multiplierOnSuccess = 1;
            multiplierOnFail = 5;
            break;
          case 2:
            multiplierOnSuccess = 2;
            multiplierOnFail = 4;
            break;
          case 3:
            multiplierOnSuccess = 3;
            multiplierOnFail = 3;
            break;
          case 4:
            multiplierOnSuccess = 4;
            multiplierOnFail = 2;
            break;
          case 5:
            multiplierOnSuccess = 5;
            multiplierOnFail = 1;
            break;
          default:
            multiplierOnSuccess = 1;
            multiplierOnFail = 1;
            break;
        }

        console.log("Acierto:", multiplierOnSuccess);
        console.log("Error:", multiplierOnFail);

        // Actualizar la puntuación
        console.log("Checking if the card is in a valid position");
        if (isValidPosition(card, newHand)) {
          console.log("Card is in a valid position");
          setHand(newHand);
          setDeck(filterDeck(newHand));

          // Incrementar los aciertos consecutivos.
          setConsecutiveHits((prevHits) => {
            const updatedConsecutiveHits = prevHits + 1;
            console.log("Updated consecutive hits:", updatedConsecutiveHits);

            // Cálculo de puntos de bonificación
            if (updatedConsecutiveHits >= 2) {
              const bonusPoints = 100 * Math.pow(2, updatedConsecutiveHits - 1);
              console.log("Bonus por aciertos consecutivos:", bonusPoints);
              setScore((prevScore) => Math.round(prevScore + bonusPoints));
              console.log("Puntos de bonus", bonusPoints);
              showPointsPopup(pointsToAdd, bonusPoints);
            }

            return updatedConsecutiveHits; // Retornar el valor actualizado de consecutiveHits
          });

          // Sumar puntos si es correcto
          let pointsToAdd = 1000;
          if (hand.length > 0) {
            // Si no es la primera carta
            let pointsFromLeft =
              yearDifferenceLeft > 0 ? 1000 / yearDifferenceLeft : 0;
            let pointsFromRight =
              yearDifferenceRight > 0 ? 1000 / yearDifferenceRight : 0;

            // Bonus si la diferencia de años es 0
            if (yearDifferenceLeft === 0 && isLeftCard) {
              pointsFromLeft += 1000; // Añade bonus de 2000 si la diferencia de años es 0 a la izquierda
            }
            if (yearDifferenceRight === 0 && isRightCard) {
              pointsFromRight += 1000; // Añade bonus de 2000 si la diferencia de años es 0 a la derecha
            }

            pointsToAdd = Math.round(
              (pointsFromLeft + pointsFromRight) * multiplierOnSuccess
            );
          }
          setScore((prevScore) => Math.round(prevScore + pointsToAdd));
          console.log("Puntos añadidos:", pointsToAdd);
          showPointsPopup(pointsToAdd);
        } else {
          console.log(
            "Card is in an invalid position, resetting consecutive hits"
          ); // <--- Agrega esto aquí
          setHand(newHand.filter((c) => c.id !== card.id));
          setRemoved([...removed, card]);
          setDeck(filterDeck(newHand, removed));

          // Resetear los aciertos consecutivos a 0
          setConsecutiveHits(0);

          // Restar puntos si es incorrecto
          let pointsToSubtract = 0;
          if (isLeftCard && isRightCard) {
            pointsToSubtract =
              Math.min(yearDifferenceLeft, yearDifferenceRight) *
              multiplierOnFail;
          } else if (isLeftCard) {
            pointsToSubtract = yearDifferenceLeft * multiplierOnFail;
          } else if (isRightCard) {
            pointsToSubtract = yearDifferenceRight * multiplierOnFail;
          }
          setScore((prevScore) => prevScore - pointsToSubtract);
          console.log("Puntos restados:", pointsToSubtract);
          showPointsPopup(-pointsToSubtract);
        }
      }
    },
    [hand, deck, filterDeck, categories, handleWin, isValidPosition]
  );

  return {
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
  };
};

export default useHand;
