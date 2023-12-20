//Функція

// const from = 1;
// const to = 10;
// const n = Math.floor(Math.random() * (to - from + 1) + from);

// console.log(n);

function randN(){
    const from = 1;
    const to = 10;
    const n = Math.floor(Math.random() * (to - from + 1) + from);

    console.log(n);
}

// randN();

function randN2(from, to){//опис функції, декларація
    const n = Math.floor(Math.random() * (to - from + 1) + from);

    console.log(n);
}

// randN2(100, 200);//запуск функції

//Способи опису функцій

// randN4(1, 5);
randN3(1, 5);
// randN5(3, 333);

//Function declaration
function randN3(from, to){
    const n = Math.floor(Math.random() * (to - from + 1) + from);

    console.log(n);
    //тіло функції
}

//Function Expression
const randN4 = function(from, to){//безименна функція
    const n = Math.floor(Math.random() * (to - from + 1) + from);

    console.log(n);
}

const randN6 = (from, to) => {//безименна функція
    const n = Math.floor(Math.random() * (to - from + 1) + from);

    console.log(n);
}

// randN4(1, 5);
// randN3(1, 5);

const randN5 = randN3;

randN5(3, 333);