const one = [1, 2, 3, 4, 5];
//forEach
const log = (el, i, arr) => console.log(i, el, arr);
// one.forEach(log);
Array.prototype.iForEach = function(callback){
    for(let i = 0; i < this.length; i += 1){
        callback(this[i], i, this);
    }
}

// let descriptor = Object.getOwnPropertyDescriptor(Array.prototype, 'forEach');
// console.log(JSON.stringify(descriptor, null, 2));

// String.prototype.iLog = function(){
//     console.log('haha', this);
// }

// 'Hello, this is iLog: '.iLog();

// one.iForEach(log);
//map
const twice = (el) => el * 2;
const two = one.map(twice);
// console.log(two);

Array.prototype.iMap = function(callback){
    const mappedArr = [];
    for(let i = 0; i < this.length; i += 1){
        const newEl = callback(this[i], i, this);
        mappedArr.push(newEl);
    }

    return mappedArr;
}

const four = two.iMap(twice);
// console.log(four);

//filter
const even = (el) => el % 2 === 0;
const three = one.filter(even);
// console.log(three);

Array.prototype.iFilter = function(callback){
    const filteredArr = [];
    for(let i = 0; i < this.length; i += 1){
        const isFilter = callback(this[i], i, this);
        if(isFilter) filteredArr.push(this[i]);
    }

    return filteredArr;
}

const five = one.iFilter(even);
// console.log(five);

//find
//findIndex
//findLast
//every
//some
const divideBy3 = (el, i) => {
    console.log(el, i);   
    return el % 3 === 0;
}
// console.log('some', one.some(divideBy3));

Array.prototype.iSome = function(callback){
    for(let i = 0; i < this.length; i += 1){
        const isSome = callback(this[i], i, this);
        if(isSome) return true;
    }
    return false;
}

// console.log('iSome', one.iSome(divideBy3));

//reduce
const sum = (acc, el) => acc + el;
// console.log(one.reduce(sum, 1000));

Array.prototype.iReduce = function(callback, initValue){
    let acc = this[0];
    let startI = 1;
    if(arguments.length > 1){
        acc = initValue;
        startI = 0;
    }

    // let [acc, startI] = arguments.length >= 2 ? [initValue, 0] : [this[0], 1];
    for(let i = startI; i < this.length; i += 1){
        acc = callback(acc, this[i], i , this);
    }
    return acc;
}

// console.log(one.iReduce(sum, 1000));

//sort
const unsorted = [33, 1, 99, 3000, 2024, 40000];
const unsortedStr = ['Nick', 'Nike', 'Argentina', 'Apollo', 'Andromeda', 'Netherlands'];
const unsortedBool = [false, true, true, true, false, false];
const sortLikeNum = (a, b) => {
    if(a > b){
        return 1;
    }
    if(a < b){
        return -1;
    }
    if(a == b){
        return 0;
    }
}
const sortLikeNum2 = (a, b) => a - b;
const sortLikeNum3 = (a, b) => b - a;
const sortLikeLength = (a, b) => a.length - b.length;
console.log(unsorted.sort(sortLikeNum3));
console.log(unsortedStr.sort(sortLikeLength));
console.log(unsortedBool.sort());