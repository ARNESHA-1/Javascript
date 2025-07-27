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

function userMsg(username ="sam"){ //default val if no value given
   if(username == undefined){  // == (!username)
      console.log(`Please enter ur name`)
      return
   }
   else return `${username} just logged in!!`
}

let msg = userMsg("Arnesha")
console.log(msg)
console.log(userMsg("abc"))
console.log(userMsg())