import React from "react";
import { useEffect, useState } from "react";
import CardSum from "./components/CardSum";

const NEW_DECK_ENDPOINT = "https://deckofcardsapi.com/api/deck/new/";
const NEW_DECK_ENDPOINT_SIX_DECKS =
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6";
const REUSE_DECK_ENDPOINT = "https://deckofcardsapi.com/api/deck/";

function App() {
  const [deckID, setDeckID] = useState();
  const [drawCards, setDrawCards] = useState([]);

  //Get 6 decks from API
  useEffect(() => {
    fetch(NEW_DECK_ENDPOINT_SIX_DECKS)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDeckID(data.deck_id);
      });
  }, []);

  console.log(deckID);

  const handleDraw = () => {
    fetch(`${REUSE_DECK_ENDPOINT}${deckID}/draw/?count=2`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDrawCards(data.cards);
      });
  };
  const handleHit = () => {
    fetch(`${REUSE_DECK_ENDPOINT}${deckID}/draw/?count=1`)
      .then((response) => response.json())
      .then((data) => {
        setDrawCards([...drawCards, ...data.cards]);
        console.log(drawCards)
      });
  };
  function shuffleDeck() {
    fetch(`${REUSE_DECK_ENDPOINT}${deckID}/shuffle`);
  }

  return (
    <div className="App">
      <h2>BlackJack</h2>
      <div>
        {drawCards?.map((card) => (
          <img src={card.image} key={card.code} />
        ))}
        <button onClick={handleDraw}>DRAW CARDS</button>
        <button onClick={shuffleDeck}>SUFFLE DECK</button>
        <button onClick={handleHit}>HIT</button>
      </div>
      <CardSum drawCards={drawCards} />
    </div>
  );
}

export default App;
