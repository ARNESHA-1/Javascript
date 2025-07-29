const coding = ["js","cpp","python"]

coding.forEach(function (ele){    // in for each we need to give callback func
    console.log(ele+5)
})

coding.forEach( (ele)=>{   //all func w/o name
     console.log(ele)
})

function print(item){
    console.log(item+"*")
}
coding.forEach(print)


// ****************************
const mycoding =[
    {
        langName:"javascript",
        symbol:"js"
    },
    {
        langName:"cpp",
        symbol:"c++"
    },
    {
        langName:"python",
        symbol:"py"
    }
]

mycoding.forEach((item)=>{
    console.log(item)
})