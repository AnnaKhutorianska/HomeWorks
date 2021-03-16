let inputNumber1;
let inputNumber2;
let res = []

do {
    inputNumber1 = +prompt("Enter a number 1");
    inputNumber2 = +prompt("Enter a number 2");
} while(isNaN(inputNumber1) || inputNumber1 < 1 || isNaN(inputNumber2) || inputNumber2 < 1 || inputNumber2 <= inputNumber1);

for ( let i = inputNumber1; i<= inputNumber2; i++){
    res.push(i);
}

console.log(res);

