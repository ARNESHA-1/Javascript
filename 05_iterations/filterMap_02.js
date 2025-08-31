const arr = [1,2,3,4,5,6,7,8,9,10]
//const newarr = arr.map((num)=> num+10)
//console.log(newarr)

//chanining........
const newarr1= arr.map((num) => num*10).map((num)=> num+1).filter((nums)=>{
    return nums>50
})
console.log(newarr1)
console.log(arr)