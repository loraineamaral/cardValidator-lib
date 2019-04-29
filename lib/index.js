function cardValidator(card){
  const cardArray = card.split("").map(Number);
  const areSameElements = cardArray.every(elem => elem == cardArray[0]);
  
    if (cardArray.length !== 16 || areSameElements) {
      return false;
    }
  
    const sumAndMultiply = cardArray.reduce((sum, number, index) =>{ 
      if (index % 2 !== 0)  {
      return sum + number;     
        }else{
        if ( number*2 > 9){
        return (number * 2) - 9 + sum
        }else{
          return number * 2 + sum
        }}}, 0);
      
        if (sumAndMultiply % 10 === 0){
          return true
        }else{
          return false
        }
      
      }
      cardValidator("5187594017608502")
 