import React from 'react'

export default function GameResult({dealerHandValue, playerValue}) {

  
    let result;
    if (dealerHandValue > playerValue) {
      result = `dealer wins!`
    } else{
      result = `Player wins!`
    }
    return <p>{result}</p>
  



}
