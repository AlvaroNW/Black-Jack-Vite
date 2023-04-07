import React from 'react'

export default function PlayerHand({playerCards}) {
  return (
    <div className='player-hand'>
      <p>PLAYER</p>
      <div>
        {playerCards?.map((playerCard, index) => 
          <img src={playerCard.image} alt={playerCard.name} key={index} />
        )}
      </div>
    
    </div>

  )
}
