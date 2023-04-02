import React from 'react'
import { faceCardValues } from "../utility/faceCardValues"

export default function HandValuesSum({playerCards, dealerCards}) {

  const playerHandValueCalc = (playerCards ) =>{
    const rawValue = playerCards?.reduce((acc, card) =>{

      /*card.value comes as String and faced Cards come as a String with the name e.g. 'KING'
      the below checks the value of the card in the faceCardValues utility component if or parses to number if not*/
      const parsedValue = faceCardValues[card.value] || parseInt(card.value);
      
      return acc + parsedValue
    } , 0);

    // checking for ACE's when over 21 points
    let numAces = playerCards?.filter((card) => card.value === "ACE").length;

    function ACECheck(rawValue) {
      while (rawValue > 21 && numAces > 0) {
        rawValue -= 10;
        numAces--;
      }
      return rawValue;
    }
    return ACECheck(rawValue);
  }


  const DealerHandValueCalc = (dealerCards) =>{
    const rawValue = dealerCards?.reduce((acc, card) =>{

      /*card.value comes as String and faced Cards come as a String with the name e.g. 'KING'
      the below checks the value of the card in the faceCardValues utility component if or parses to number if not*/
      const parsedValue = faceCardValues[card.value] || parseInt(card.value);
      
      return acc + parsedValue
    } , 0);

    // checking for ACE's when over 21 points
    let numAces = dealerCards?.filter((card) => card.value === "ACE").length;

    function ACECheck(rawValue) {
      while (rawValue > 21 && numAces > 0) {
        rawValue -= 10;
        numAces--;
      }
      return rawValue;
    }
    return ACECheck(rawValue);
  }

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
