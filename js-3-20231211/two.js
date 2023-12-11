const r = Math.floor(Math.random() * 10 + 1);
console.log(r);

// if(r < 8){
//     console.log('Not good');
// }else{
//     if(r === 8){ console.log('Good'); }
//     if(r === 9) console.log('Very good');
//     if(r === 10) console.log('Perfect');
// }

switch(r){
    case 8:  console.log('Good'); break;
    case 9:  console.log('Very good'); break;
    case 10:  console.log('Perfect'); break;
    default:{
        console.log('Not good');
    }
};