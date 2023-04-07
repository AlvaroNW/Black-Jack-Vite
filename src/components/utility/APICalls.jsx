
//API ENDPOINTS
const NEW_DECK_ENDPOINT_SIX_DECKS ="https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6";
const REUSE_DECK_ENDPOINT = "https://deckofcardsapi.com/api/deck/";


async function getNewDeck() {
  const response = await fetch(NEW_DECK_ENDPOINT_SIX_DECKS);
  const data = await response.json();
  console.log(data.deck_id);
  return data.deck_id;
  
}

async function cardDraw(deckID) {
  const response = await fetch(`${REUSE_DECK_ENDPOINT}${deckID}/draw/?count=2`);
  const data = await response.json();
  console.log(data.cards);
  return data.cards;
}
async function cardHit(deckID) {
  const response = await fetch(`${REUSE_DECK_ENDPOINT}${deckID}/draw/?count=1`);
  const data = await response.json();
  console.log(data.cards);
  return data.cards;
}

async function shuffleDeck(deckID) {
  await fetch(`${REUSE_DECK_ENDPOINT}${deckID}/shuffle`);
}

export { cardDraw, getNewDeck, shuffleDeck, cardHit };