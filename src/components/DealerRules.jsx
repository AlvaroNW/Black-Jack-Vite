import React from 'react'

export default function DealerRules({dealerHandvalue}) {
  


  let dealerMessage;
    
    if (dealerHandvalue <= 20 && dealerHandvalue > 17){
      dealerMessage = `Dealer stood on a ${dealerHandvalue}`
    }else if (dealerHandvalue > 21){
      dealerMessage = 'Dealer busted out!'
    }else if (dealerHandvalue ===21){
      dealerMessage = 'Dealer got BlackJack!'
    }
  
  return <p>{dealerMessage}</p>
}
