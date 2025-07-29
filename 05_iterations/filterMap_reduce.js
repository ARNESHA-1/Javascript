 const coding = ["js","cpp","python"]

// const values = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values)

const myNums = [1,2,3,4,5,6,7]
const newNums1= myNums.filter((num)=>{
    return num>4
})
console.log(newNums1)
const newNums2= myNums.filter((num)=>{
    if(num%4 == 0){
        console.log(num)
    }
})
console.log(newNums2)