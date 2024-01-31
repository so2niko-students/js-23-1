//Масиви

//Create
const arr1 = [];
const arr2 = ['a', 'b', 'c'];
const arr3 = ['aa', true, 2222, { text: 'hello'}, 'fdsf'];

//!Modify
    //!Add
arr1[1000] = 'Третій елемент';
arr1['ahahaah'] = 'Третій ahahaah';
arr1.length = 10;

arr1.push(23);
arr1.push(111,33,44);
arr1.unshift(true);
arr1.unshift('fdf', false, null, undefined);

    //!Delete
delete arr1[1];

arr1.forEach((el, i, arr) => {
    console.log(el, i, arr);
});
//map, filter, every, some, find, reduce

// console.log(arr1['ahahaah']);

    //! Remove
const lastarr2 = arr2.pop();
const firstarr2 = arr2.shift();
console.log(arr2);
console.log(firstarr2);

//TODO: почитати про splice