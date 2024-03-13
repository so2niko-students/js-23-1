const maxPassLen = 6;
const minCaseCount = {
    0 : 1, 
    1 : 1, 
    2 : 3,
    3 : 1
}; 
// A-Z
// a-z
// 0-9
// ! - ←
//: - @
//[ - `
//{ - ~

function validateForm(info = {loginEmail: '', password: ''}){
    let result = '';
    const reAt = /\@/g;
    const reEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    //check email
    if (!info.loginEmail.includes('@')) result += `There are not '@' in email! <br>`;
    if (info.loginEmail.match(reAt).length > 1) result += `Too many '@' in email! <br>`;
    if (reEmail.test(info.loginEmail))  result += `email is not correct! <br>`;

    //password

    if (info.password.length <= maxPassLen) result += `Password are too short (min ${maxPassLen} symbols)! <br>`;
    let caseSymbols = [0, 0, 0, 0];
    for (let i = 0; i < info.password.length; i++){
        const checkedSymb = info.password.charCodeAt(i);
        if (isInRange(checkedSymb, 65, 90)) caseSymbols[0]++;//A-Z
        if (isInRange(checkedSymb, 97, 122)) caseSymbols[1]++;//a-z
        if (isInRange(checkedSymb, 48, 57)) caseSymbols[2]++;//0-9
        if (isInRange(checkedSymb, 33, 47)) caseSymbols[3]++;//symbols
        if (isInRange(checkedSymb, 58, 64)) caseSymbols[3]++;
        if (isInRange(checkedSymb, 91, 96)) caseSymbols[3]++;
        if (isInRange(checkedSymb, 123, 126)) caseSymbols[3]++;
    }
    
    const checkResult = caseSymbols.every((a, i) => a >= minCaseCount[i]);
    if (!checkResult) result += `Password are not in rigth standart! <br>`;

    return result;
}

const isInRange = (what, from, to) => {
    return what >= from && what <= to;
}

const form1 = {
    loginEmail : 'ddd@ff.com',
    password : 'fggW-h6'
};

console.log(validateForm(form1));

const reAt = /\@/g;
// console.dir(form1.loginEmail.match(reAt));
// console.dir(reAt.exec(form1.loginEmail));
