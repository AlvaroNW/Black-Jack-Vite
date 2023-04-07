import React from "react";
import { useEffect, useState } from "react";
import Dealer from "./components/DealerComponents/Dealer";
import Player from "./components/PlayerComponents/Player";
import HandValuesSum from "./components/Calculations/HandValuesSum";
import ShowWinner from "./components/Calculations/ShowWinner";

function App() {
  const [deckID, setDeckID] = useState('');
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [stand, setStand] = useState(false);
  const [inGame, setInGame] = useState(false);

  return (
    <div className="app">
      <div className="board">
        <div className="counters">
          <div className="winner-display">
            {!inGame && stand && (
              <ShowWinner playerCards={playerCards} dealerCards={dealerCards} />
            )}
          </div>
          <div className="handvalues">
            <HandValuesSum
              playerCards={playerCards}
              dealerCards={dealerCards}
              stand={stand}
            />
            
          </div>
        </div>
        <div className="playing-board">
          <div className="Dealer">
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
          <div className="Player">
            <Player
              setStand={setStand}
              playerCards={playerCards}
              setPlayerCards={setPlayerCards}
              deckID={deckID}
              setDeckID={setDeckID}
              setInGame={setInGame}
              inGame={inGame}
              stand={stand}
            />
          </div>
        </div>
        <div className="bets">
            <p>Bets</p>
        </div>
      </div>

    </div>
  );
}

export default App;
