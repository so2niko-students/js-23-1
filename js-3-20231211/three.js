//2,3,4,5,6,7,8,9,10,J,Q,K,A
const card = Math.floor(Math.random() * 13 + 2);
console.log(card);
let cardName;
switch(card){
    case 11 : cardName = 'J'; break;
    case 12 : cardName = 'Q'; break;
    case 13 : cardName = 'K'; break;
    case 14 : cardName = 'A'; break;
    default:{
        cardName = card;
    }
}

console.log(cardName);

//♣♦♥♠


//7♣
//K♠
//2♦
//A♣