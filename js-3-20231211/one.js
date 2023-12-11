const r = Math.random();
//0 to 1
const r1 = r * 10;
const r2 = r1 + 1;
const r3 = Math.floor(r2);

const r4 = Math.floor(Math.random() * 10 + 1);
console.log(r4);

if (r4 > 4) {// > < >= <= == === != !==
    console.log('Вітаю');
    //
    //
    //
    //
} else {
    console.log('Співчуваю');
    //
    //
    //
    //
    //
}

//conditional, condition

if (r4 === 10) {
    console.log('Супер джекпот');
}

if ('' == 0) {
    console.log('Opppa')
}

r4 > 4 ? console.log('Вітаю') : console.log('Співчуваю');

const message = r4 > 4 ? 'Вітаю' : 'Співчуваю';
console.log(message);