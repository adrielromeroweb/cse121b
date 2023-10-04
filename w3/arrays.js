// Activity 1

let numbers = ['one', 'two', 'three'];

let newArray = numbers.map(function (number){
    return `<li>${number}</li>`;
});

document.getElementById('myList').innerHTML = newArray.join('');

// Activity 2

let letter = ['A', 'B', 'A'];

function asign(letter) {
    switch(letter) {
        case 'A':
            letter = 4;
            break
        case 'B':
            letter = 3;
            break
        default:
            letter = 0;
    }

    return letter;
};

let newLetterArray = letter.map(asign);

// Activity 3

let GPA = (newLetterArray.reduce((a, b) => a + b))/newLetterArray.length;

// Activity 4

let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

let newFruits = fruits.filter(fruit => fruit.length > 6);

// Activity 5

let arrayNumber = [12, 34, 21, 54];

let luckNumber = 21;

let found = arrayNumber.indexOf(luckNumber);