import React, {useEffect, useState} from 'react'
import { playerHandValueCalc } from '../utility/CalcUtils';

export default function PlayerActions({playerCards, stand, inGame}) {

  const playerHandValue = playerHandValueCalc(playerCards);
  const [playerActionMessage, setPlayerActionMessage] = useState('');


  useEffect(() => {
    if (!stand && playerHandValue <= 20 && playerHandValue > 0) {
      setPlayerActionMessage("Do you want another card?")
    } else if (!stand && playerHandValue === 0) {
      setPlayerActionMessage("Do you want to play?")
    } else if(stand){
      setPlayerActionMessage(`You Stood on ${playerHandValue}`)
    }
  }, [stand, inGame])
  

  return <h2>{playerActionMessage}</h2>;

}
