function randN(from, to){//опис функції, декларація
    const n = Math.floor(Math.random() * (to - from + 1) + from);
    return n;//повернення значення
}

function timeAndSpeed(){
    const distance = Math.floor(Math.random()*412+1);
    const time = Math.floor(Math.random()*24+1);
    const speed = distance / time;
    console.log (speed);
}

// timeAndSpeed();

const dist = randN(100, 1000);
const time = randN(1, 24);
console.log(dist);
console.log(time);

function countSpeed(dist = 15, time = 5){//default parameters(arguments)
    // console.log(arguments);
    const speed = dist / time;
    return speed;
}

const sp = countSpeed(dist, time, 13213, 1234, 44, 'fadsfadsf', true, {});
countSpeed();
countSpeed(11);
countSpeed(11, 33);

console.log(sp);