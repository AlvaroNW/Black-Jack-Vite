import React from "react";
import GameRules from "./GameRules";
import { faceCardValues } from "../components/faceCardValues";
import DealerRules from "./DealerRules";

export default function CardSum({
  drawCards,
  showInApp,
  showInDealer,
  dealerCards,
  holeCard,
  dealerHandValueChecked,
  inGame,
  handleHandValue,
}) {
  const handValueChecked = (drawCards) => {
    // Calculating hand value
    const handValue = drawCards?.reduce((acc, currentCard) => {
      const cardValue =
        faceCardValues[currentCard.value] || parseInt(currentCard.value);
      return acc + cardValue;
    }, 0);

    // checking for ACE's when over 21 points
    let numAces = drawCards?.filter((card) => card.value === "ACE").length;
    function handValueCheck(handValue) {
      while (handValue > 21 && numAces > 0) {
        handValue -= 10;
        numAces--;
      }
      return handValue;
    }
    return handValueCheck(handValue);
  };

  return (
    /*
        The "showInApp" and "showInDealer" properties determine whether or not a particular rule should be displayed in the app or in the dealer's Component.

        If a rule has a "showInApp" value of true, it will be shown to users in the app.

        If a rule has a "showInDealer" value of true, it will be shown in Dealer.

        Additionally, the props like handleStand={handleStand} or drawCards={drawCards} are being passed to the GameRules and not the DealerRules due to this

        */
    <>
      <div>
        {!showInDealer && showInApp && handValueChecked(drawCards) !== 0 && (
          <h4>
            Hand Value :{" "}
            {handValueChecked(drawCards) === 21
              ? "21! you got BlackJack!"
              : handValueChecked(drawCards) > 21
              ? `${handValueChecked(drawCards)} You busted out!`
              : handValueChecked(drawCards)}
          </h4>
        )}
        {showInApp && inGame && (
          <GameRules
            handValue={handValueChecked(drawCards)}
            handleHandValue={handleHandValue}
          />
        )}
      </div>
      <div>
        {!holeCard &&
          showInDealer &&
          !showInApp &&
          dealerHandValueChecked(dealerCards) !== 0 && (
            <h4>Dealer's Hand Value : {handValueChecked(dealerCards)} </h4>
          )}
        {!holeCard && showInDealer && (
          <DealerRules dealerHandvalue={dealerHandValueChecked(dealerCards)} />
        )}
      </div>
    </>
  );
}
