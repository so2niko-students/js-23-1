// for(let i = 1; i <= 52; i++){
//     const r = Math.floor(Math.random() * 4);
//     const suit = {
//         0 : '♠', 
//         1 : '♥', 
//         2 : '♦',
//         3 : '♣'
//     };

//     console.log(suit[r]);
// }

// for(let i = 0, ch = '*'; i >= 0; i++){
//     console.log(ch);
//     ch += '*';
// }

for(let i = 1; i <= 10; i++){
    if(i % 3 === 0){
        continue;
    }
    if(i % 5 === 0){
        break;
    }
    console.log(i);
}