import React from "react";
import { useEffect, useState } from "react";
import Dealer from "./components/DealerComponents/Dealer";
import Player from "./components/PlayerComponents/Player";
import HandValuesSum from "./components/Calculations/HandValuesSum";
import ShowWinner from "./components/Calculations/ShowWinner";

const NEW_DECK_ENDPOINT_SIX_DECKS =
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6";
const REUSE_DECK_ENDPOINT = "https://deckofcardsapi.com/api/deck/";

function App() {
  

  const [showEndgame, setShowEndgame] = useState(false);

  //New Logic
  const [deckID, setDeckID] = useState();
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [stand, setStand] = useState(false);
  const [inGame, setInGame] = useState(false);


  return (
    <>
      <div>
        {inGame &&<ShowWinner playerCards={playerCards} dealerCards={dealerCards} />}
      </div>
      <div>
        <HandValuesSum playerCards={playerCards} dealerCards={dealerCards} stand={stand}  />
      </div>
      <div>
        <Player
          setStand={setStand}
          playerCards={playerCards}
          setPlayerCards={setPlayerCards}
          deckID={deckID}
          setDeckID={setDeckID}
          setInGame={setInGame}
        />
      </div>
      <div>
          <Dealer
            dealerCards={dealerCards}
            setDealerCards={setDealerCards}
            deckID={deckID}
            stand={stand}
            playerCards={playerCards}
            setInGame={setInGame}
            inGame={inGame}
          />
      </div>

      {/* <div className="App">
        <h2>BlackJack</h2>
        <div className="player-hand">
          {/* showHandvalue is used to control which part of the return of Card Sum gets rendered in app.js or in Dealer Component */}
      {/* <CardSum
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
        <div className="dealer"> */}
      {/* {showDealer && (
            <Dealer
              deckID={deckID}
              REUSE_DECK_ENDPOINT={REUSE_DECK_ENDPOINT}
              stand={stand}
              drawCards={drawCards}
              handleEndRound={handleEndRound}
            />
          )} }
        </div>
      </div> */}
    </>
  );
}

export default App;
