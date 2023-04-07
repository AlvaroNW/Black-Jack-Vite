import React, {useState, useEffect} from "react";
import { DealerHandValueCalc, playerHandValueCalc } from '../utility/CalcUtils';

export default function HandValuesSum({playerCards, dealerCards}) {
  
  const playerHandValue = playerHandValueCalc(playerCards);
  const dealerHandValue = DealerHandValueCalc(dealerCards);
  console.log(`logging the playerHandValue ${playerHandValue} at HandValuesSum`);
  console.log(`logging the dealerHandValue ${dealerHandValue} at HandValuesSum`);

  return (
    <div>
      <h4>Player's Hand Value: {playerHandValue}</h4>
      <h4>Dealer's Hand Value: {dealerHandValue}</h4>
    </div>
  )
}
