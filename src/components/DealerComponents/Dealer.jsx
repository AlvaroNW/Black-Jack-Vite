import React, {useState, useEffect} from 'react'
import { cardDraw, cardHit } from "../utility/APICalls";
import {  DealerHandValueCalc } from '../utility/CalcUtils';

import DealerHand from "./DealerHand";

export default function Dealer({dealerCards, setDealerCards, deckID, stand, playerCards}) {
  const [holeCard, setHoleCard] = useState(true);
  const [isTimeoutActive, setIsTimeoutActive] = useState(false)

  const dealerHandValue = DealerHandValueCalc(dealerCards);

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
      setHoleCard(true)
      handleDealerDraw();
    }
  }, [playerCards])
  
  useEffect(() => {
    setHoleCard(false);
  }, [stand])


  useEffect(() => {
    if (stand && dealerHandValue < 17) {
      setIsTimeoutActive(true);
      const timeoutID = setTimeout(() => {
        setIsTimeoutActive(false);
        handleDealerHit();
      }, 2000);
      return () => {
        clearTimeout(timeoutID);
      }
    }else if (stand && dealerHandValue > 17){
      
      // props.handleEndRound()
    }
  }, [stand, handleDealerHit]);


  return (
    <div className="dealer-hand-display">
      DEALER
      <DealerHand dealerCards={dealerCards} holeCard={holeCard}/>
    </div>
  )
}
