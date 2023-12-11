console.log("3" / "2") // en expresiones matematicas los string son convertidos automaticamente en numeros 

console.log("3" + "2") // 32 no sirve al sumar porque lo considera una concatencacion de strings 
console.log("3" - "2") //2 
console.log("3" * "2") // 6
console.log("3" ** "2") // 9 

//Si una conversion se hace mal dara un NaN
let edad = "Un texto en vez de un numero"
console.log(Number(edad)) // NaN

//otras conversiones 
console.log("\nOTRAS CONVERSIONES \n")
console.log(Number(" 123 ")) // dara 123 y eliminan espacios
console.log(Number("123z")) // Nan no reconoce la z 
console.log(Number(true)) // dara 1 ya que en binario el true es = 1 
console.log(Number(false)) // dara 0 porque en binario falso es = 0 


//conversiones de boolean 
//lo valores como 0 , "" , null , undefined , y NaN seran false 
// de resto seran true 
console.log("\nCONVERSIONES DE BOOBLEANOS \n")
console.log(Boolean(1)) //true
console.log(Boolean(0)) // false 

console.log(Boolean("hola")) //true
console.log(Boolean(""))// false 