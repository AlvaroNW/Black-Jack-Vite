import React from "react";
import GameRules from "./GameRules";
import { faceCardValues } from '../components/faceCardValues';


export default function CardSum({ drawCards, showInApp, showInDealer, dealerCards, holeCard, dealerHandValueChecked }) {

  const handValueChecked = (drawCards)=>{
    // Calculating hand value
    const handValue = drawCards?.reduce((acc, currentCard) => {
      const cardValue = faceCardValues[currentCard.value] || parseInt(currentCard.value);
      return acc +  cardValue;
      },0)

      // checking for ACE's when over 21 points
      let numAces = drawCards?.filter(card => card.value === 'ACE').length;
      function handValueCheck (handValue) {
        while (handValue > 21 && numAces > 0) {
          handValue -= 10;
          numAces--;
        }
        return(handValue) 
      }
    return handValueCheck(handValue);
  }

  return (
    <>
    <div>
        {!showInDealer && showInApp && handValueChecked(drawCards) !== 0 && <h4>Hand Value : {handValueChecked(drawCards)} </h4>}
        {showInApp && <GameRules handValue ={handValueChecked(drawCards)} />}
    </div>
    <div>
        {!holeCard && showInDealer && !showInApp && dealerHandValueChecked(dealerCards) !== 0 && <h4>Dealer's Hand Value : {handValueChecked(dealerCards)} </h4>}
    </div>
    </>

  );
}
