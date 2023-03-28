import React from "react";

export default function GameRules(props) {
  let message;
    if (props.handValue <= 20 && props.handValue > 0){
      message = 'Do you want another card?'
    }else if (props.handValue > 21){
      props.handleStand()
    }else if(props.handValue === 0){
      message = 'Do you want to play?'
    }else{
      props.handleStand()
    }
  return <p>{message}</p>
}
