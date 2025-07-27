 // functions and parameters

//  function sayMyName(){
//     console.log("A")
//     console.log("B")
//     console.log("c")
//  }
//sayMyName()

function add(num1, num2){  // parameters r passed
   console.log(num1+num2);
}
add(8,9) // arguments

function add2(num1, num2){
   console.log(num1+num2);
}
const res = add2(9,1)
console.log(res)  //undefined // bcz no return type

function add3(num1, num2){
   let res = num1+num2
   return res
   console.log("end")
}
const result = add3(1,2)
console.log(result)

