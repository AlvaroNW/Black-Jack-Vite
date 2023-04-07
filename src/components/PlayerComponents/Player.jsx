import { getNewDeck, cardDraw, cardHit, shuffleDeck } from "../utility/APICalls";

import React from 'react'
import PlayerHand from "./PlayerHand";

export default function Player({setStand, playerCards, setPlayerCards, deckID,  setDeckID, setInGame}) {

  // functions come from utility/API/PlayerCalls.js, returning the data from the API
  const handleNewDeck = async () => {
    const newDeck = await getNewDeck();
    setDeckID(newDeck);
  }
  const handlePlayerDraw = async () => {
    const playerDraw = await cardDraw(deckID);
    setPlayerCards(playerDraw);
    setInGame(true)
    setStand(false)

  }
  const handlePlayerHit = async () => {
    const playerHit = await cardHit(deckID);
    setPlayerCards([...playerCards, ...playerHit]);

  }
  const handleDoubleDown = async () => {
    const playerHit = await cardHit(deckID);
    setPlayerCards([...playerCards, ...playerHit]);
    setStand(true)
  }
  const handleNewGame = async () => {
    const playerHit = await shuffleDeck(deckID);
  }
  const handleStand = () => {
    setStand(true)
    
  }


  return (
    <>
    <div className="Player-hand-display">
      <PlayerHand playerCards={playerCards}/>
    </div>
    <div className="player-controls">
      <button onClick={handleNewDeck}>PLAY</button>
      <button onClick={handlePlayerDraw}>NEW GAME</button>
      <button onClick={handleStand}>STAND</button>
      <button onClick={handlePlayerHit}>Player Hit</button>
      <button onClick={handleDoubleDown}>DoubleDown</button>
      <button onClick={handleNewGame}>NEW GAME</button>
    </div>
    </>
  )
}
