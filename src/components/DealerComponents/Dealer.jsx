import React, {useState, useEffect} from 'react'
import { cardDraw, cardHit } from "../utility/APICalls";
import DealerHand from "./DealerHand";

export default function Dealer({dealerCards, setDealerCards, deckID, stand, playerCards}) {
  const [holeCard, setHoleCard] = useState(true);
  const [isTimeoutActive, setIsTimeoutActive] = useState(false)

  const handleDealerDraw = async() => {
    const dealerDraw = await cardDraw(deckID);
    setDealerCards(dealerDraw)
  };
  const handleDealerHit = async() => {
    const dealerHit = await cardHit(deckID);
    setDealerCards([...dealerCards, ...dealerHit])
  };


  useEffect(() => {
    if (playerCards.length === 2) {
      handleDealerDraw();
    }
  }, [playerCards])
  
  useEffect(() => {
    setHoleCard(false);
  }, [stand])


  // useEffect(() => {
  //   if (stand && dealerHandValueChecked(dealerCards) < 17) {
  //     setIsTimeoutActive(true);
  //     const timeoutID = setTimeout(() => {
  //       setIsTimeoutActive(false);
  //       dealerHit();
  //     }, 2000);
  //     return () => {
  //       clearTimeout(timeoutID);
  //     }
  //   }else if (props.stand && dealerHandValueChecked(dealerCards) > 17){
      
  //     props.handleEndRound()
  //   }
  // }, [props.stand, dealerHit]);


  return (
    <div className="dealer-hand-display">
      DEALER
      <DealerHand dealerCards={dealerCards}/>
    </div>
  )
}
