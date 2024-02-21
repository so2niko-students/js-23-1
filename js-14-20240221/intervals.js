const tick = {
    id : 0,
    time : 0
};

function code(text = 'code'){
    const d = new Date();
    const time = `${ d.getHours() }:${ d.getMinutes() }:${ d.getSeconds()}`;
    console.log(time, text);
}

code('From start');

const toId = setTimeout(() => code('After 2 sec'), 2000);
const toId2 = setTimeout(() => code('After 3 sec'), 3000);
console.log(toId, toId2);
clearInterval(toId);

const tickFunc = (...lll) => {
    console.log(lll);
    tick.time++;
    code(tick.time);
    if(tick.time > 10){
        clearInterval(tick.id);
    }
}

// tick.id = setInterval(tickFunc, 1000, 23423423423423, 33, true, 'textttt');

const loaderBackSec = {
    id : 0,
    time: 9,
    element : document.querySelector('.loader'),
    colors : ['antiquewhite', 'wheat', 'grey', 'yellow'],
    colorCounter : 0,
};

const loaderBackSecFunc = (loader) => {
    loader.element.innerText = loader.time;
    loader.time--;
    if(loader.time < 0){
        loader.time = 9;
        loader.colorCounter = (loader.colorCounter + 1) % loader.colors.length;
        loader.element.style.backgroundColor = loader.colors[loader.colorCounter];
    } 
};

loaderBackSec.id = setInterval(loaderBackSecFunc, 1000, loaderBackSec);

