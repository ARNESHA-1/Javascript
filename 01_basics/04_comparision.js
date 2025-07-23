/* Comparision problems in Javascript */

// the working of comparision operator and equality operator(==) is diff
console.log(null == 0)  //NaN == 0?
console.log(null >=0)   //0 >= 0   comp operator converts into num 1st and then do operation
console.log(null <0)
console.log(null <= 0)

// ===
console.log("2" == 2)
console.log("2" === 2)   //checks the datatype also