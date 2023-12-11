
/* c lleva el calculo y el e es elemento del arrelgo  */
let arr = [4.6 , 2.5 ,2.5 ,2.9]

let sumC8 = arr.reduce((c , e) => c + (e * 0.8 + 1))
console.log(sumC8.toFixed(2))