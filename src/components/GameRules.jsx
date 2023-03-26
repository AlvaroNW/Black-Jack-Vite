import React from "react";



export default function GameRules(props) {
  let message;
    if (props.handValue < 20 && props.handValue > 0){
      message = <p>Do you want another card?</p>
    }else if (props.handValue > 21){
      message = <p>You busted out!</p>
    }else if(props.handValue === 0){
      message = <p>Do you want to play?</p>
    }else{
      message = <p>You got BlackJack!</p>
    }
  return <p>{message}</p>
}
