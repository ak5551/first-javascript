//Immediately Invoked Function Expression
//Iife = Iife used for immediate function execution and reduce global scope pollution

/*
(function chai(){
    console.log(`DB connected`);
})();

( (name) => {
    console.log(`DB connected 2 ${name}`);
})
('akash')
*/
(function coffee(){
    console.log(`Db connected`);
})();

(() => {
    console.log(`db connected`);
})()