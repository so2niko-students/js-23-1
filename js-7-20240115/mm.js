function poroshenko(){
    let petro = 0;
    function roshen(){
        petro++;
        return petro;
    }

    return roshen;
}

const exPresident = poroshenko();
const chocolateKing = poroshenko();

console.log(exPresident());
console.log(exPresident());
console.log(exPresident());
console.log(exPresident());
console.log(exPresident());
console.log(exPresident());
console.log(exPresident());
console.log(exPresident());
console.log(chocolateKing());

//Closures