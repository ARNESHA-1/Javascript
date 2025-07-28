// IIFE Immediately Invoked Function execution

//sometimes global scope variable causes pollution... IIFE- to avoid such pollution

// IMP - when more than 1 iffe then put ; after each iife

(function chai(){
    // named iife
    console.log(`DB connected!`)
})();   // ';' important if there is anothere iife function

(function orCode(){
    console.log(`2nd iife`)
})();

((name) =>{
    console.log(`Hello ${name}`)
})("Arnesha")