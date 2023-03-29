import React from "react";
import { useState, useEffect } from "react";
import CardSum from "./CardSum";
import { faceCardValues } from "./utility/faceCardValues";

export default function Dealer(props) {
  const [dealerCards, setDealerCards] = useState([]);
  const [holeCard, setHoleCard] = useState(true);

  const dealerDraw = () => {
    fetch(`${props.REUSE_DECK_ENDPOINT}${props.deckID}/draw/?count=2`)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Dealer cards: ${data}`);
        setDealerCards(data.cards);
      });
  };

  const dealerHit = () => {
    setHoleCard(false);
    fetch(`${props.REUSE_DECK_ENDPOINT}${props.deckID}/draw/?count=1`)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Dealer cards: ${data}`);
        setDealerCards([...dealerCards, ...data.cards]);
      });
  };

  useEffect(() => {
    if (props.drawCards.length === 2) {
      setHoleCard(true);
      dealerDraw();
    }
  }, [props.drawCards]);

  const dealerHandValueChecked = (dealerCards) => {
    // Calculating dealer's hand value
    const dealerHandValue = dealerCards?.reduce((acc, currentCard) => {
      const dealerCardValue =
        faceCardValues[currentCard.value] || parseInt(currentCard.value);
      return acc + dealerCardValue;
    }, 0);

    // checking for ACE's when over 21 points
    let numAces = dealerCards?.filter((card) => card.value === "ACE").length;
    function dealerHandValueCheck(dealerHandValue) {
      while (dealerHandValue > 21 && numAces > 0) {
        dealerHandValue -= 10;
        numAces--;
      }
      return dealerHandValue;
    }
    return dealerHandValueCheck(dealerHandValue);
  };

  useEffect(() => {
    setHoleCard(false);
  }, [props.stand]);

  useEffect(() => {
    if (props.stand && dealerHandValueChecked(dealerCards) < 17) {
      dealerHit();
    }
  }, [props.stand]);

  return (
    <div>
      <h3>Dealer</h3>
      <CardSum
        dealerCards={dealerCards}
        showInDealer={true}
        holeCard={holeCard}
        dealerHandValueChecked={dealerHandValueChecked}
      />
      <div className={holeCard ? "holedHand" : "cards-display"}>
        {dealerCards?.map((card, index) => (
          <img
            src={
              index === 1 && holeCard ? "src/assets/cardback.png" : card.image
            }
            key={card.code}
          />
        ))}
      </div>
    </div>
  );
}
