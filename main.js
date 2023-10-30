const operators = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
    '%': mod
};

num1 = +prompt("Enter first digit: ", "add any number")
num2 = +prompt("Enter second digit: ", "add any number")

calculate(num1, num2, "+");
calculate(num1, num2, "-");
calculate(num1, num2, "*");
calculate(num1, num2, "/");
calculate(num1, num2, "%");

function calculate(num1, num2, operator) {
    let result = operators[operator](num1, num2);

    if (operators[operator]) {
        let result = operators[operator](num1, num2);
        if (result !== null) {
            console.log(`${num1} ${operator} ${num2} = ${result}`);
        }
    } else {
        console.log("помилка оператора");
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        console.log("ділити на 0 не можна");
        return null;
    }
    return num1 / num2;
}

function mod(num1, num2) {
    return num1 % num2;
}