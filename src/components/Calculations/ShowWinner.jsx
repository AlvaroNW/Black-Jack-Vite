import React from "react";
import { DealerHandValueCalc, playerHandValueCalc } from "../utility/calcUtils";

export default function ShowWinner() {
  const dealerHandValue = DealerHandValueCalc();
  const playerHandValue = playerHandValueCalc();

  const winner =
    dealerHandValue > playerHandValue
      ? "Dealer Wins!"
      : dealerHandValue < playerHandValue
      ? "Player Wins!"
      : "Push!"

  return <div>Result: {winner}</div>;
}
