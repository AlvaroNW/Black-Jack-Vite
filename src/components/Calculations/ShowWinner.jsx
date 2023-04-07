import React, {useState, useEffect} from "react";
import { DealerHandValueCalc, playerHandValueCalc } from "../utility/CalcUtils";

export default function ShowWinner({ playerCards, dealerCards}) {
  const [winner, setWinner] = useState('')
  
  const dealerHandValue = DealerHandValueCalc(dealerCards);
  const playerHandValue = playerHandValueCalc(playerCards);

  useEffect(() => {

    console.log("useEffect called");
    let newWinner;
      if (dealerHandValue <= 21 && dealerHandValue > playerHandValue) {
        newWinner = "Dealer Wins!";
      } else if (dealerHandValue <= 21 && playerHandValue <= 21 && dealerHandValue < playerHandValue) {
        newWinner = "Player Wins!";
      } else if (dealerHandValue <= 21 && playerHandValue <= 21 && dealerHandValue > playerHandValue) {
        newWinner = "Dealer Wins!";
      } else if (playerHandValue <= 21 && dealerHandValue < playerHandValue) {
        newWinner = "Player Wins!";
      } else if (playerHandValue > 21) {
        newWinner = "Player is bust!";
      } else {
        newWinner = "Push!";
      }
      
    setWinner(newWinner);
    console.log(newWinner);
  }, [dealerHandValue, playerHandValue ]);

  return <div>Result: {winner}</div>;
}
