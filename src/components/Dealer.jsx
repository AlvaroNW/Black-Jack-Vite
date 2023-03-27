import React from 'react'
import { useState, useEffect } from 'react';
import CardSum from './CardSum';

export default function Dealer(props) {
  const [dealerCards, setDealerCards] = useState([])
  const [holeCard, setHoleCard]= useState(true)
  const [dealerScore, setDealerScore] = useState(0)
  

  const dealerDraw = () => {
    fetch(`${props.REUSE_DECK_ENDPOINT}${props.deckID}/draw/?count=2`)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Dealer cards: ${data}`);
        setDealerCards(data.cards);
      });
  
  }

  const dealerHit = () =>{
    setHoleCard(false);
    fetch(`${props.REUSE_DECK_ENDPOINT}${props.deckID}/draw/?count=1`)
    .then((response) => response.json())
    .then((data) => {
      console.log(`Dealer cards: ${data}`);
      setDealerCards([...dealerCards, ...data.cards]);
    });
  }
  function updateDealerScore(score){
    setDealerScore(score)
    console.log(` the dealer score is ${dealerScore}`);
  }
  
  useEffect(() => {
    if(props.drawCards.length ===2){
      setHoleCard(true)
      dealerDraw()
    }
  }, [props.drawCards])

  useEffect(() => {
    if(props.stand && dealerScore <= 17){
      dealerHit()
    }else if(props.stand  && dealerScore > 17 ){
      setHoleCard(false);
    }
  }, [props.stand])
  

  
  return (
    
    <div>
      <h3>Dealer</h3>
      <button onClick={dealerDraw}>Dealer Turn</button>
      <button onClick={dealerHit}>Dealer HIT</button>
      <div className={holeCard ? 'holedHand' :'cards-display'}>
        {dealerCards?.map((card, index) =>
          <img src={index === 1 && holeCard ? 'src/assets/cardback.png' : card.image} key={card.code} />
        )}
      </div>
      <CardSum dealerCards={dealerCards} showInDealer={true} holeCard={holeCard} updateDealerScore={updateDealerScore} />
    </div>
  )
}
