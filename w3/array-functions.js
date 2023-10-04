let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(letter => letter.charAt(0) === 'B');

let namesLength = names.map(name => name.length);

// namesLength = [5, 8, 5, 8, 3];

let average = (namesLength.reduce((a, b) => a + b))/namesLength.length;