function sum(a, b){
    return parseFloat(a) + parseFloat(b);
}

function test(text, expectResult, result){
    console.log(`${text}
    Expect: ${expectResult} (${typeof expectResult})
    Result: ${result} (${typeof result})
    Test: ${expectResult === result ? 'passed ✅' : 'fail ❌'}`);
}

//1
console.log(sum(3, 4));
//2
console.log(7 === sum(3, 4));
//3
console.log('Test: sum(3,4) Expect 7. Test\n', 7 === sum(3, 4) ? 'passed' : 'fail');
//4
console.log('Test: sum(33, -4) Expect 29. Test\n', 29 === sum(33, -4) ? 'passed' : 'fail');
//5
console.log('Test: sum("33", -4) Expect 29. Test\n', 29 === sum("33", -4) ? 'passed' : 'fail');
//6
test('Test: sum("33", -4)', 29, sum("33", -4));
//7
test('Test: sum(3, 4)', 7, sum(3,4));
//8
test('Test: sum(2.44, 8)', 10.44, sum(2.44, 8));
//9
test('Test: sum(2.44, .56)', 11, sum(2.44, 8.56));