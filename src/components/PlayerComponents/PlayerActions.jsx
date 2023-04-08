import React, {useEffect, useState} from 'react'
import { playerHandValueCalc } from '../utility/CalcUtils';

export default function PlayerActions({playerCards, stand, inGame, setStand}) {

  const playerHandValue = playerHandValueCalc(playerCards);
  const [playerActionMessage, setPlayerActionMessage] = useState('');


  useEffect(() => {
    if (!stand && playerHandValue <= 20 && playerHandValue > 0) {
      setPlayerActionMessage("Do you want another card?")
    } else if (!stand && playerHandValue === 0) {
      setPlayerActionMessage("Do you want to play?")
    }else if (playerHandValue >21){
      setPlayerActionMessage("You went bust!")
      setStand(true)
    }else if (playerHandValue === 21 && playerCards.length === 2) {
      setPlayerActionMessage("You went got BlackJack!")
      setStand(true)
    } else if(stand){
      setPlayerActionMessage(`You Stood on ${playerHandValue}`)
    }
  }, [stand, inGame, playerCards])
  

  return <h2 className="action-message">{playerActionMessage}</h2>;

}
