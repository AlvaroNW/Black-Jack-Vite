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
  const [inGame, setInGame] = useState(false);

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

  const handleNewGame = () => {
    fetch(`${REUSE_DECK_ENDPOINT}${deckID}/draw/?count=2`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDrawCards(data.cards);
      });
    setInGame(true)
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
    setDrawCards([]);
    setInGame(false);
  }
  function handleStand(){
    setInGame(false);
    
  }

  return (
    <div className="App">
      <h2>BlackJack</h2>
      <div className="player-hand"> 
        <CardSum drawCards={drawCards} />
      </div>
      <div className="cards-display">
        {drawCards?.map((card) => (
          <img src={card.image} key={card.code} />
        ))}
      </div>
      <div className="control-buttons">
        {drawCards.length === 0 && inGame !== true && <button onClick={handleNewGame}>NEW ROUND</button>}
        {inGame !== true && drawCards.length !== 0 && <button onClick={shuffleDeck}>END ROUND</button>}
        {inGame === true && drawCards.length !== 0 && <button onClick={handleStand}>Stand</button>}
        {inGame === true && drawCards.length !== 0 && <button onClick={handleHit}>HIT</button>}

      </div>

      
    </div>
  );
}

export default App;
