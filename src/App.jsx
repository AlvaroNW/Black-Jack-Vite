import React from "react";
import { useEffect, useState } from "react";
import CardSum from "./components/CardSum";
import Dealer from "./components/Dealer";
import Player from "./components/PlayerComponents/Player";

const NEW_DECK_ENDPOINT_SIX_DECKS =
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6";
const REUSE_DECK_ENDPOINT = "https://deckofcardsapi.com/api/deck/";

function App() {
  const [deckID, setDeckID] = useState();
  const [drawCards, setDrawCards] = useState([]); //AKA player Cards
  const [inGame, setInGame] = useState(false);
  const [stand, setStand] = useState(false);
  const [showDealer, setShowDealer] = useState(false);
  const [showEndgame, setShowEndgame] = useState(false);

  //Get 6 decks from API
  useEffect(() => {
    fetch(NEW_DECK_ENDPOINT_SIX_DECKS)
      .then((response) => response.json())
      .then((data) => {
        setDeckID(data.deck_id);
      });
  }, []);

  console.log(deckID);

  const handleNewRound = () => {
    fetch(`${REUSE_DECK_ENDPOINT}${deckID}/draw/?count=2`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDrawCards(data.cards);
      });
    setInGame(true);
    setStand(false);
    setShowDealer(true);
  };
  const handleHit = () => {
    fetch(`${REUSE_DECK_ENDPOINT}${deckID}/draw/?count=1`)
      .then((response) => response.json())
      .then((data) => {
        setDrawCards([...drawCards, ...data.cards]);
      });
  };
  const handleDoubleDown = () => {
    fetch(`${REUSE_DECK_ENDPOINT}${deckID}/draw/?count=1`)
      .then((response) => response.json())
      .then((data) => {
        setDrawCards([...drawCards, ...data.cards]);
      });
    setStand(true);
    setInGame(false);
  };
  function shuffleDeck() {
    fetch(`${REUSE_DECK_ENDPOINT}${deckID}/shuffle`);
    setDrawCards([]);
    setInGame(false);
    setShowDealer(false);
    setShowEndgame(false);
  }
  function handleStand() {
    setInGame(false);
    setStand(true);
  }

  const handleEndRound = () => {
    setShowEndgame(true);
  };

  const handleHandValue = (handValue) => {
    if (handValue <= 20 && handValue > 0) {
      setStand(false);
    } else if (handValue > 21) {
      setInGame(false);
      setStand(true);
    } else if (handValue === 0) {
      setStand(false);
    } else {
      setInGame(false);
      setStand(true);
    }
  };

  return (
    <>
      <div>
        <Player setStand={setStand}/>
      </div>
      <div className="App">
        <h2>BlackJack</h2>
        <div className="player-hand">
          {/* showHandvalue is used to control which part of the return of Card Sum gets rendered in app.js or in Dealer Component */}
          <CardSum
            drawCards={drawCards}
            showInApp={true}
            handleHandValue={handleHandValue}
            stand={stand}
            inGame={inGame}
          />
        </div>
        <div className="cards-display">
          {drawCards?.map((card) => (
            <img src={card.image} key={card.code} />
          ))}
        </div>
        <div className="control-buttons">
          {drawCards.length === 0 && inGame !== true && (
            <button onClick={handleNewRound}>NEW ROUND</button>
          )}
          {showEndgame && drawCards.length !== 0 && (
            <button onClick={shuffleDeck}>END ROUND</button>
          )}
          {inGame === true && drawCards.length !== 0 && (
            <button onClick={handleStand}>Stand</button>
          )}
          {inGame === true && drawCards.length !== 0 && (
            <button onClick={handleHit}>HIT</button>
          )}
          {inGame === true && drawCards.length !== 0 && (
            <button onClick={handleDoubleDown}>DOUBLE DOWN</button>
          )}
        </div>
        <div className="dealer">
          {showDealer && (
            <Dealer
              deckID={deckID}
              REUSE_DECK_ENDPOINT={REUSE_DECK_ENDPOINT}
              stand={stand}
              drawCards={drawCards}
              handleEndRound={handleEndRound}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
