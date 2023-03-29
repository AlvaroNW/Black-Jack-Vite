import React, { useState, useEffect } from "react";
import GameRules from "./GameRules";
import { faceCardValues } from "./utility/faceCardValues";
import DealerRules from "./DealerRules";
import GameResult from "./GameResult";

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
  const [playerHandValueState, setplayerHandValueState] = useState(0);

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

  //needed to wait for draw cards to finish before passing it as prop
  useEffect(() => {
    drawCards && setplayerHandValueState(handValueChecked(drawCards));
  }, [drawCards]);

  return (
    /*
        The "showInApp" and "showInDealer" properties determine whether or not a particular rule should be displayed in the app or in the dealer's Component.

        If a rule has a "showInApp" value of true, it will be shown to users in the app.

        If a rule has a "showInDealer" value of true, it will be shown in Dealer.

        Additionally, the props like handleStand={handleStand} or drawCards={drawCards} are being passed to the GameRules and not the DealerRules due to this

        */
    <>
      <div>
        {!showInDealer && showInApp && playerHandValueState !== 0 && (
          <h4>
            Hand Value :{" "}
            {playerHandValueState === 21
              ? "21! you got BlackJack!"
              : playerHandValueState > 21
              ? `${playerHandValueState} You busted out!`
              : playerHandValueState}
          </h4>
        )}
        {showInApp && inGame && (
          <GameRules
            handValue={playerHandValueState}
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

      {showInApp && !inGame && drawCards.length !== 0 && (
        <GameResult
          dealerHandValue={handValueChecked(dealerCards)}
          playerValue={handValueChecked(drawCards)}
        />
      )}
    </>
  );
}
