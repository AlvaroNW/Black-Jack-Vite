import React from "react";
import GameRules from "./GameRules";

//CARD VALUES FOR FACE CARDS COME AS STRING OF TEXT SO NEED TO GIVE THEM A NUMBER EQUIVALENT
const faceCardValues = {
  JACK: 10,
  QUEEN: 10,
  KING: 10,
  ACE: 11,
};



export default function CardSum({ drawCards, showHandValue, showDealerHandValue, dealerCards }) {

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

  const dealerHandValueChecked = (dealerCards)=>{
    // Calculating dealer's hand value
    const dealerHandValue = dealerCards?.reduce((acc, currentCard) => {
      const dealerCardValue = faceCardValues[currentCard.value] || parseInt(currentCard.value);
      return acc +  dealerCardValue;
      },0)

      // checking for ACE's when over 21 points
      let numAces = dealerCards?.filter(card => card.value === 'ACE').length;
      function dealerHandValueCheck (dealerHandValue) {
        while (dealerHandValue > 21 && numAces > 0) {
          dealerHandValue -= 10;
          numAces--;
        }
        return(dealerHandValue) 
      }
    return dealerHandValueCheck(dealerHandValue);
  }

  return (
    <>
    <div>
        {!showDealerHandValue && showHandValue && handValueChecked(drawCards) !== 0 && <h4>Hand Value : {handValueChecked(drawCards)} </h4>}
        <GameRules handValue ={handValueChecked(drawCards)} />
    </div>
    <div>
        {showDealerHandValue && !showHandValue && dealerHandValueChecked(dealerCards) !== 0 && <h4>Dealer Hand Value : {handValueChecked(dealerCards)} </h4>}
        {/* <GameRules handValue ={dealerHandValueChecked(dealerCards)} /> */}
    </div>
    </>

  );
}
