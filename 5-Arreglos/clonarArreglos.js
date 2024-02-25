let arr = [1 , 2 , 3]


let arr2 = [...arr] /* arr.slice() */
arr2[0] = 2
console.log(arr2)
console.log(arr)