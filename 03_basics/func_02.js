//part 2
function calculateCartPrice(...num1){  //rest operator
    return num1;
}
console.log(calculateCartPrice(1, 80, 90))  // returns array [1,80,90]

const user = {
    name:"Arnesha",
    price:900
}

function handleUser(anyObject){
    console.log(`username is ${anyObject.name} and payable amout is ${anyObject.price}`)
}
console.log(handleUser(user))
console.log(handleUser({name: "saumya", price:10}))  //instant object pass

const myArr = [1,2,3,41]

function getEle(array, idx){
    return array[idx]
}
console.log(getEle(myArr, 2))