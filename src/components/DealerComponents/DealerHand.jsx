import React from "react";

export default function DealerHand({ dealerCards, holeCard }) {
  return (
    <div className="dealer-hand">
    <p>DEALER</p>
    <div className={holeCard ? "holedHand" : "dealer-cards-display"}>
      {dealerCards?.map((dealerCard, index) => (
        <img
          src={
            index === 1 && holeCard
              ? "src/assets/cardback.png"
              : dealerCard.image
          }
          key={index}
        />
      ))}
    </div>
    </div>

  );
}
