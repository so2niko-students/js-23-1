const b = 100;

function three(){
    const d = b * 3;
    console.log(d);
}

function one(){
    const b = 3.14;

    function two(){
        const c = b * 2;
        console.log(c);
    }
    
    // two();
    three();
}

one();
