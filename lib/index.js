function cardValidator(card){
  const cardArray = card.split("").map(Number);
  const areSameElements = cardArray.every(elem => elem == cardArray[0]);
  
    if (cardArray.length !== 16 || areSameElements) {
      return false;
    }
  
 
 