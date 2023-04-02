import React from 'react'

export default function DealerHand({dealerCards}) {
  return (
    <div>
      {dealerCards?.map((dealerCard, index) => 
        <img src={dealerCard.image} alt={dealerCard.name} key={index} />
      )}
    </div>
  )
}