import React from 'react'
import { DealerHandValueCalc, playerHandValueCalc } from '../utility/calcUtils';

export default function HandValuesSum({playerCards, dealerCards}) {

  const playerHandValue = playerHandValueCalc(playerCards);
  const dealerHandValue = DealerHandValueCalc(dealerCards);
  console.log(`logging the playerHandValue ${playerHandValue} at HandValuesSum`);
  console.log(`logging the dealerHandValue ${dealerHandValue} at HandValuesSum`);

  return (
    <div>
      <h4>Player's Hand Value: {playerHandValue}</h4>
    </div>
  )
}
