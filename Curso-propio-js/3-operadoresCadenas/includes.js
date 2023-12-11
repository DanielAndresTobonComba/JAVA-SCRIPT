let cadena = "Hola soy montolla"
let cadena2 = "soy"

console.log(cadena.includes("montolla")) // true 
console.log(cadena.includes("hola" , 1))// false porque empieza a revizar desde la posicion 1
console.log(cadena.includes(cadena2)) // true