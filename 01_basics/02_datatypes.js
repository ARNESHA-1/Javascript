"alert js"

// Datatypes -> 1.Primitive 2.Non-primitive
// based on the way data is stored

// Primitive( 7 types) (are given by call by val not reference
//  String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreVal = 100.3

const isLoggedIn = false;
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(outsideTemp);
console.log(typeof outsideTemp);
console.log(id == anotherId)
console.log(id)
console.log(anotherId)

// Non-Primitive (pass by reference)
/*   Array, Objects, Function */

const heros = ["shaktiman", "naagraj"]
let myObj = {
    name: "Arnesha",
    age: 20,
};

const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myFunction)

// Js is Dynamically typed or Statically typed lang?

const name = "Arnesha"
const repoCount = 20
console.log(name +" Val " +repoCount)

console.log(`Hello my name is ${name} and I'm from Mumbai ${70}`)

const dynamicString = new String('Arnesha')
console.log(dynamicString)
console.log(dynamicString[1])
console.log(dynamicString.indexOf('a'))

const newString = dynamicString.substring(-2, 4)
console.log(newString)
const newString2 = "  saumya "
console.log(newString2)
console.log(newString2.trim())

const url = "https://arnesha.com/%20/com"
console.log(url.replace('%20', '--'))


