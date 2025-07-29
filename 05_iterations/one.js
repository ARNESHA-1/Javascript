 // for of

//["","",""]
//[{},{},{}]

const arr =[1,2,3,4,5]

for (const num of arr) {
  // console.log(num) 
}
const greet = "hello world"
for (const ele of greet) {
    console.log(`Each char is ${ele}`)   
}

//Maps
const myMap = new Map();
myMap.set('IN', "India")
myMap.set('USA', "United state of america")
myMap.set('FR', "France")
myMap.set('IN', "India")
console.log(myMap)

for (const key of myMap) {
  console.log(key)
}
for (const [key, val] of myMap) {
  console.log(key,"->", val)
}

const myObject = {
  game1: "ps5",
  game2: "Battleground"
}

// for (const [key,val] of myObject) {  NOT CORRECT
//   console.log(key,'->',val)
// }