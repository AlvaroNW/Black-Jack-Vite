import React from "react";

//CARD VALUES FOR FACE CARDS COME AS STRING OF TEXT SO NEED TO GIVE THEM A NUMBER EQUIVALENT
const faceCardValues = {
  JACK: 10,
  QUEEN: 10,
  KING: 10,
  ACE: 11,
};



export default function CardSum({ drawCards }) {

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
    <div>
        <h4>Hand Value : {handValueChecked(drawCards)} </h4>
    </div>
  );
}
