//LOOP


//Цикл - повторюваний деяку кількість раз код
//Умова циклу - конструкція циклу, яка очікує true/false
//Тіло циклу - код для виконання дій
//Ітерація - Один прохід тілу цикла
//Ітератор - змінна, яка вираховує кількість проходів циклу
//
//Передумова
let i = 5;

// while(i > 0){
//     console.log('while', i);
//     i--;
// }

// for(let i = 5; i > 0; i++){
//     console.log('for', i);
// }

for(;i--;) console.log('ugly for', i);

//Післяумова
// let j = -5;
// do{
//     console.log('do-while', j);
//     j--;
// }while(j > 0);

// Пример O(n) - линейное время
function linearAlgorithm(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

const arr = [1, 2, 3, 4, 5];
linearAlgorithm(arr);

// Пример O(n^2) - квадратичное время
function quadraticAlgorithm(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}

const arr2 = [1, 2, 3, 4, 5];
quadraticAlgorithm(arr2);