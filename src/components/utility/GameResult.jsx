import React from 'react'

export default function GameResult({dealerHandValue, playerValue}) {


  
  console.log(typeof playerValue);
  // console.log(` from game result ${playerValue} ${dealerHandValue}`);
  console.log(`from game result`, playerValue, dealerHandValue);


  return (
    <div>
      {playerValue}
      {dealerHandValue}
    </div>
  )
}
