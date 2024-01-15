//Області видимості
function one(){
    const a = 33;
    console.log(a);
}

const a = 'Petro';

function two(){
    const a = 'Hello';
    console.log(a);
}

function three(){
    console.log(a);
}

// console.log(a);
two();
one();
three();