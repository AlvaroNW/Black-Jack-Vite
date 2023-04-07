import React from "react";
import { useEffect, useState } from "react";
import Dealer from "./components/DealerComponents/Dealer";
import Player from "./components/PlayerComponents/Player";
import HandValuesSum from "./components/Calculations/HandValuesSum";
import ShowWinner from "./components/Calculations/ShowWinner";
import DealerActions from "./components/DealerComponents/DealerActions";

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

    </>
  );
}

export default App;
