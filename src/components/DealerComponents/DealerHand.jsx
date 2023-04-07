import React from "react";

export default function DealerHand({ dealerCards, holeCard }) {
  return (
    <div className={holeCard ? "holedHand" : "cards-display"}>
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
  );
}
