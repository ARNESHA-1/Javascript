//object Literals

const mySym = Symbol("cross")
const myNewSym = Symbol("add")
const JsUser = {
    name: "Arnesha",
    "full name": "Shar Nilendra Kumar",
    mySym : "newCross",  //wrong syn for symbol as it is defined as string
    [myNewSym]: "sub",
    age: 18,
    location:" jaipur",
    email: "arnesha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
//console.log(JsUser."full name")  wrong syntax
console.log(JsUser["full name"])
console.log(JsUser.mySym)
console.log(typeof JsUser.mySym)  //string 
console.log(myNewSym)  //Symbol(add)
console.log(JsUser[myNewSym])  //sub
console.log(typeof myNewSym)

JsUser.email = "abc@gmail.com"
//Object.freeze(JsUser)      //Freezes the object no further change
JsUser.email = "dunk@gmail.com"
console.log(JsUser)

console.log("**************************************************")
JsUser.greeting = function(){
    console.log("Hello Everyone......greating!")
}
JsUser.newGreeting = function(){
    console.log(`Hello friends!......${this.name} here!`)
}
console.log("---")
console.log(JsUser.greeting)
console.log(JsUser.greeting())  //agar freeze rha obj to implement nhi hoga

console.log(JsUser.newGreeting())

