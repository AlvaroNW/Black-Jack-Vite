import React from "react";
import { DealerHandValueCalc } from '../utility/CalcUtils'



export default function DealerActions({ dealerCards })  {

  const dealerHandValue = DealerHandValueCalc(dealerCards);
  let dealerMessage;

  if (dealerHandValue <= 20 && dealerHandValue >= 17) {
    dealerMessage = `Dealer stood on a ${dealerHandValue}`;
  } else if (dealerHandValue > 21) {
    dealerMessage = "Dealer busted out!";
  } else if (dealerHandValue === 21) {
    dealerMessage = "Dealer got BlackJack!";
  }else{
    dealerMessage = `Dealer will draw a card...`;
  }

  return <h2 className="action-message">{dealerMessage}</h2>;
}
