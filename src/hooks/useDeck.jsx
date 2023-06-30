import { useState, useEffect } from "react";

const useDeck = (events, categories) => {
  const [deck, setDeck] = useState(shuffle(events));
  const removeCardFromDeck = (cardId) => {
    setDeck((prevDeck) =>
      prevDeck.filter((deckCard) => deckCard.id !== cardId)
    );
  };

  useEffect(() => {
    const filteredEvents = events.filter((event) =>
      categories.includes(event.category)
    );
    setDeck(shuffle(filteredEvents));
  }, [categories]);

  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const filterDeck = (hand, removed) => {
    hand = hand || [];
    removed = removed || [];
    return deck.filter(
      (card) =>
        !hand.some((handCard) => handCard.id === card.id) &&
        !removed.some((removedCard) => removedCard.id === card.id)
    );
  };

  return { deck, setDeck, filterDeck, removeCardFromDeck };
};

export default useDeck;
