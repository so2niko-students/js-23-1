console.log('TASK 1');

const getNames = function () {
    const res = [];
    const maxLen = 12;
    const minLen = 4;
    const firstLitera = 'a'.charCodeAt(0);
    const literaCount = 26;
    const maxValues = 50;
    for (let j = 0; j < maxValues; j++) {
        let tempName = '';
        for (let i = 1; i < Math.floor(Math.random() * maxLen) + minLen; i++) {
            const nextLitera = Math.floor(Math.random() * literaCount) + firstLitera - 1;
            if (i === 1) tempName += String.fromCharCode(nextLitera).toUpperCase()
            else tempName += String.fromCharCode(nextLitera);
        }
        res.push(tempName);
    }

    return res;
}

const maleNames = getNames();
const femaleNames = getNames();

const getObject = function(gend = 'male'){
    const maxAge = 90;
    const res = {name:'', age : 0, gender: gend};
    switch(gend){
        case 'female': {
            res.name = femaleNames[Math.floor(Math.random() * femaleNames.length)];
            break;
            }
        default: {
            res.name = maleNames[Math.floor(Math.random() * maleNames.length)];
            break;
            }
    }
    res.age = Math.floor(Math.random() * maxAge );
    return res;
}


//console.log(maleNames);
//console.log(femaleNames);
console.log(getObject('male'));
console.log(getObject('male'));
console.log(getObject('male'));
console.log(getObject('male'));
console.log(getObject('male'));
console.log(getObject('female'));
console.log(getObject('female'));
console.log(getObject('female'));
console.log(getObject('female'));
console.log(getObject('female'));