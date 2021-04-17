let inputNumber1;
let inputNumber2;
let func;
do {
    inputNumber1 = +prompt("Enter a number1");
    inputNumber2 = +prompt("Enter a number2");
} while(isNaN(inputNumber1) || isNaN(inputNumber2) );

do {
    func = prompt("enter func");
    string = '+-/*';
} while(!string.includes(func) || func === "")


function count (num1,num2,oper) {
switch (oper) {
    case "+": return num1+num2;    
    case "-": return num1-num2;    
    case "*": return num1*num2;    
    case "/": return num1/num2;    
    default: return alert('Hello');
}
}

console.log(count(inputNumber1, inputNumber2, func));