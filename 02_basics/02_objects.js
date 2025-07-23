const tinderUser = {
    id:14,
    name:"samyak",
    isLoggedIn: false,
    userName :{
        usefullName :{
            first: "Arnesha",
            last:"Shailesh"
        }
    }
}

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {6:"e", 8:"r"}

const prac1 = {obj1, obj2, obj3}  //it will push multiple obj inside 1 obj
console.log(prac1)
const prac2 = Object.assign({},obj1,obj2)  //{} so that src obj is empty
console.log(prac2)

//spread func
const prac3 = {...obj1,...obj2,...obj3}
console.log(prac3)

//how data comes from database
const users = [
    {
        id:1,
        name: "abc"
    },
    {
        id:2,
        name: "def"
    }
]
console.log(users[1].name)
console.log(tinderUser)
console.log(Object.keys(tinderUser)) // All keys comes stored in array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))