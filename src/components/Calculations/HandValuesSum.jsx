import React, {useState, useEffect} from "react";
import { DealerHandValueCalc, playerHandValueCalc } from '../utility/CalcUtils';

export default function HandValuesSum({playerCards, dealerCards, stand}) {
  
  const playerHandValue = playerHandValueCalc(playerCards);
  const dealerHandValue = DealerHandValueCalc(dealerCards);

  return (
    <div>
      {playerCards.length !== 0 && <h4>Player's Hand Value: {playerHandValue}</h4>}
      {stand &&<h4>Dealer's Hand Value: {dealerHandValue}</h4>}
    </div>
  )
}
