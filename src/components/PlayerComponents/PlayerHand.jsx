import React from 'react'

export default function PlayerHand({playerCards}) {
  return (
    <div>
      {playerCards?.map((playerCard, index) => 
        <img src={playerCard.image} alt={playerCard.name} key={index} />
      )}
    </div>
  )
}
