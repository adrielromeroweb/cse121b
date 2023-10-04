/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let number1 = parseInt(document.getElementById('add1').value);
    let number2 = parseInt(document.getElementById('add2').value);

    document.getElementById('sum').value = add(number1, number2);
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
function subtract(subtract1, subtract2) {
    return subtract1 - subtract2;
}

function subtractNumbers() {
    let subtract1 = parseInt(document.getElementById('subtract1').value);
    let subtract2 = parseInt(document.getElementById('subtract2').value);

    document.getElementById('difference').value = subtract(subtract1, subtract2);
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
let multiply = (multiply1, multiply2) => {return multiply1 * multiply2};

let multiplyNumbers = () => (document.getElementById('product').value = multiply(parseInt(document.getElementById('factor1').value), parseInt(document.getElementById('factor2').value)));

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
let divide = (divide1, divide2) => {return divide1/divide2};

let divideNumbers = () => (document.getElementById('quotient').value = divide(parseInt(document.getElementById('dividend').value), parseInt(document.getElementById('divisor').value)));

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */

let date = new Date();
console.log(date);
let year = date.getFullYear();
console.log(year);

document.getElementById('year').innerHTML = year;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerHTML = numberArray;
/* Output Odds Only Array */
document.getElementById('odds').innerHTML = numberArray.filter((a) => a%2 ==! 0);
/* Output Evens Only Array */
document.getElementById('evens').innerHTML = numberArray.filter((a) => a%2 === 0);
/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerHTML = numberArray.reduce((a,b) => a+b);
/* Output Multiplied by 2 Array */
document.getElementById('multiplied').innerHTML = numberArray.map(a => a*2);
/* Output Sum of Multiplied by 2 Array */
document.getElementById('sumOfMultiplied').innerHTML = (numberArray.map(a => a*2)).reduce((a,b) => a+b);