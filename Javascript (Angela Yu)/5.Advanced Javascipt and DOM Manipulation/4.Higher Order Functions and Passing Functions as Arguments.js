function add(num1, num2) {
    return num1 + num2;
}

function subtrack(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

calculator(4, 5, add);
calculator(4, 5, multiply);
calculator(20, 5, subtrack);
calculator(20, 5, divide);