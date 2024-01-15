const one = function (a, b){
    console.log(a + b);
    console.log(arguments);
    console.log(this.length);
    console.log(this.name);
}

one(1, 2, true, 33, 12312);
one(33, 0);