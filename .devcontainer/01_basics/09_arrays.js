//Arrays
//first method to declare array
/*const myArr = [33,11,22,55,65]
console.log(myArr[1]);

//second method to declare array
const myarr2 = new Array(1,23,45,66)
console.log(myarr2[3]);

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
*/

/*const myArr = [0,1,2,3,4,5]
console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);                  //slice original array  ko modified nhi  karta hai (Stack memory)
console.log("B",myArr);                //splice original array ko modified karta hai (heap memory)

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);
*/

/*const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

const all_heros = marvel_heros.concat(dc)
console.log(all_heros);

const newHeros = [...marvel_heros, ...dc]  //spread operator
console.log(newHeros);

const otherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArray = otherArray.flat(Infinity)
console.log(realArray);
*/

console.log(Array.isArray("Akash"));
console.log(Array.from("Akash"));
console.log(Array.from({name: "Akash"}));  //Interesting

