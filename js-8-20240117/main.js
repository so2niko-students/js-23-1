//Strings
const sp1 = 'Ordinary';
const sp2 = "Double";
const sp3 = `Template strings. ${ sp1 } ${ sp2 }`;

/*
console.log(sp1.length);
console.log(sp2.length);
console.log(sp3);
console.log(sp3.length);
*/

// String[n]
// console.log(sp1[1]);

// for(let i = 0; i < sp1.length; i++){
//     console.log(i, sp1[i]);
// }

// for(let i = sp1.length - 1; i >= 0; i--){
//     // if(sp1[i] !== 'a') console.log(i, sp1[i]);
//     let c = sp1[i];
//     if(i % 2 == 0){
//         c = c.toUpperCase();
//     } 
//     console.log(i, c);
// }

// console.log(sp3.toLowerCase());

console.log(sp1);
console.log(sp1.slice());
console.log(sp1.slice(2));
console.log(sp1.slice(-3));
console.log(sp1.slice(1, 4));
console.log(sp1.slice(-3, -1));
console.log(sp1.slice(3, -1));
console.log(sp1.slice(5, -2));