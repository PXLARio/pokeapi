function add(one, two) {
    return one + two;
}

function calculator(x, y, addCalc) {
    return addCalc(x, y);
}

console.log(calculator(5, 5, add));