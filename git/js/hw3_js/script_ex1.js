let inputNumber;
do {
    inputNumber = +prompt("Enter a number");
} while(isNaN(inputNumber) || inputNumber < 0);

function factorial (number){
    if (number === 0){
        return 1;
    } 
    else {
        return number * factorial(number-1);
    }
}

console.log(factorial(inputNumber));