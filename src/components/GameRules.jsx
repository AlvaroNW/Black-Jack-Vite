import React, {useEffect} from "react";



export default function GameRules(props) {

  useEffect(() => {
    props.handleHandValue(props.handValue);
  }, [props.handValue]);


  let message;
    if (props.handValue <= 20 && props.handValue > 0){
      message = 'Do you want another card?'
    }else if (props.handValue > 21){
    }else if(props.handValue === 0){
      message = 'Do you want to play?'
    }else{
    }
  return <p>{message}</p>
}
