import React from 'react'
import { useState } from 'react';
import CardSum from './CardSum';

export default function Dealer(props) {
  const [dealerCards, setDealerCards] = useState([])
  const [holeCard, setHoleCard]= useState(true)

  const dealerDraw = () => {
    fetch(`${props.REUSE_DECK_ENDPOINT}${props.deckID}/draw/?count=2`)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Dealer cards: ${data}`);
        setDealerCards(data.cards);
      });
  
  }
  return (
    
    <div>
      <h3>Dealer</h3>
      <button onClick={dealerDraw}>Dealer Turn</button>
      <div className={holeCard ? 'holedHand' :'cards-display'}>
        {dealerCards?.map((card, index) =>
          <img src={index === 1 && holeCard ? 'src/assets/cardback.png' : card.image} key={card.code} />
        )}
      </div>
      <CardSum dealerCards={dealerCards} showInDealer={true} holeCard={holeCard}/>
    </div>
  )
}
