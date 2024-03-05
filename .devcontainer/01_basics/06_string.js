const name = "Akash"
const repoCount = "6"

//String Interpolation : It is process of adding new string into existing string
console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Akashnt')
console.log(gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h')); //hitesh

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringone = "   Akash   "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://Akash.com/Akash%20Tundare"
console.log(url.replace('%20','_'));
console.log(url.includes("Akash"));

const str1 = "Akash"
const str2 = "Tundare"
console.log(str1.concat(' ',str2));

const str4 = "is this a question"
console.log(str4.endsWith('question'));