import React, {useState, useEffect} from "react";
import { DealerHandValueCalc, playerHandValueCalc } from "../utility/CalcUtils";

export default function ShowWinner({ playerCards, dealerCards}) {
  const [winner, setWinner] = useState('')
  
  const dealerHandValue = DealerHandValueCalc(dealerCards);
  const playerHandValue = playerHandValueCalc(playerCards);

  useEffect(() => {

    console.log("useEffect called");
    const newWinner =
      dealerHandValue > playerHandValue
        ? "Dealer Wins!"
        : dealerHandValue < playerHandValue
        ? "Player Wins!"
        : "Push!";
      
    setWinner(newWinner);
    console.log(newWinner);
  }, [dealerHandValue, playerHandValue ]);

  return <div>Result: {winner}</div>;
}
