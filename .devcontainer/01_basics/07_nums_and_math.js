//--------nums-------

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toFixed(2));

const otherNumber = 23.897
console.log(otherNumber.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

//---------------math===========

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.random());  // 0 and 1 ke bich value assign karta hai
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1))+min);