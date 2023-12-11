let cadena = "mideduv"
let cadenaTrim = " mideduv "
let cadenaSplit = "mi de duv"

console.log(cadena.length) // longitud de la cadena mideduv = 7
console.log(cadena[1]) // i 
console.log(cadena.includes("mi")) // true 
console.log(cadena.indexOf("v")) // me da la poscion de lo que busco en la cadena  = 6 
console.log(cadena.slice(0,4)) //toma desde la poscion a las 4 =  mide
console.log(cadena.slice(4)) //toma desde la poscion 4 en adelante = duv 
console.log(cadena.replace("mideduv" , "xd")) // reemplaza el primer parametro con el segundo = xd 
console.log(cadena.trim()) // quita los espacios antes y despues de la cadena = "mideduv"
console.log(cadenaSplit.split(' ')) // devulve un arreglo separando el contenido de la cadena con el patron del split(" ")