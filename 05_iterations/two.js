const myObject ={
    js:"javascript",
    cpp:'c++',
    rb: 'ruby'
}

// for in ....LOOP
for (const key in myObject) {
    console.log(key, "->", myObject[key])
}

const arr = ['js','python','cpp']
for (const key in arr) {
    console.log(key)  //print only keys with is nthg but idx
    console.log(arr[key])
}
const myMap = new Map();
myMap.set('IN', "India")
myMap.set('USA', "United state of america")
myMap.set('FR', "France")
myMap.set('IN', "India")

for (const key in myMap) {
    console.log(key)       //will not work as Map is not iterateble
}