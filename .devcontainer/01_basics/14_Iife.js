//Immediately Invoked Function Expression
//Iife = Iife used for immediate function execution and reduce global scope pollution


(function chai(){
    console.log(`DB connected`);
})();

( (name) => {
    console.log(`DB connected 2 ${name}`);
})
('akash')
