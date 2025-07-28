
if(true){
   let a = 90
   const b = 80
   var c = 100
}
// console.log(a)   a is not accessible here
// console.log(b)   b is also not accesible
console.log(c)    //but c is accessible which is problematic

let d = 23
if(true){
    let d = 10
    console.log(`INNER d: ${d}`)
}
console.log(`OUTTER d: ${d}`)

let arr = ["1", "2"]
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}
