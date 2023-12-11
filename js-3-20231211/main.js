//Послідовність дій, записати формально за допомогою мови програмування - алгоритм
//Взяти 2 кг картоплі
//Почистити картоплю
//Порізати картоплю
//Полити олією
//Посипати спеціями
  //Якщо є спеції для картоплі - сипемо їх
  //Якщо нема - сипемо перець та сіль
//Запекти

const spicies = 'Для картоплі';
const spiciesUnivers = 'Сіль та перець';

const potato = givePotato(2);
const clPotato = cleanPotato(potato);
const cPotato = cutPotato(clPotato);
const oPotato = oilPotato(cPotato);
let spPotato;
if(spicies === 'Для картоплі'){
    spPotato = oPotato + spicies;
}else{
    spPotato = oPotato + spiciesUnivers;
}
const bPotato = bakePotato(spPotato);