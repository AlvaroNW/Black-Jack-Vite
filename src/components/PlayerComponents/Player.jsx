import { getNewDeck, playerCardDraw,playerCardHit, shuffleDeck } from "../utility/API/PlayerCalls";
import react,{useState, useEffect} from "react";


import React from 'react'
import PlayerHand from "./PlayerHand";

export default function Player({setStand}) {
  const [deckID, setDeckID] = useState();
  const [playerCards, setPlayerCards] = useState([])


  // functions come from utility/API/PlayerCalls.js, returning the data from the API
  const handleNewDeck = async () => {
    const newDeck = await getNewDeck();
    setDeckID(newDeck);
  }
  const handlePlayerDraw = async () => {
    const playerDraw = await playerCardDraw(deckID);
    setPlayerCards(playerDraw);
  }
  const handlePlayerHit = async () => {
    const playerHit = await playerCardHit(deckID);
    setPlayerCards([...playerCards, ...playerHit]);

  }
  const handleDoubleDown = async () => {
    const playerHit = await playerCardHit(deckID);
    setPlayerCards([...playerCards, ...playerHit]);
    setStand(true)
  }




  return (
    <>
    <div className="Player-hand-display">
      <PlayerHand playerCards={playerCards}/>
    </div>
    <div className="player-controls">
      <button onClick={handleNewDeck}>Get New Deck</button>
      <button onClick={handlePlayerDraw}>Player Draw</button>
      <button onClick={handlePlayerHit}>Player Hit</button>
      <button onClick={handleDoubleDown}>DoubleDown</button>
    </div>
    </>
  )
}
