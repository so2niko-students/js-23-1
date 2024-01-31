//Літеральний
const o1 = {};

o1.name = 'First one';

const o2 = {
    name : 'Two'
};

const o3 = {
    o1 : o1,
    o2 : o2, 
    count : 2,
    arr : [o1, o2]
};

//Object create
const o4 = Object.create(null);

//Object assign
const o5 = Object.assign({}, {});

// console.log(o3);
// console.log(o4);
// console.log(Object.entries(o3));
// console.log(Object.keys(o3));
// console.log(Object.values(o3));


//Object.hasOwn()

const o = {
    c : 12
  };
console.log(o);
// console.log(o.toString());
// console.log(Object.hasOwn(o, 'toString'));
// console.log(Object.hasOwn(o, 'c'));
// o.valueOf = function(){
//     return 33;
// }
o.toString = function(){
    return Object.entries(this).reduce((acc, el) => `${acc}, ${el[0]} = ${ el[1]}  `,'');
}
console.log(o + ' Hello');
console.log(o * 2);