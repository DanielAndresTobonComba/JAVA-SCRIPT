let cadena = "Hola soy german xd" 
console.log(cadena.endsWith("xd ")) //falso por tiene un espacio al final y la cadena no lo tiene
console.log(cadena.endsWith("xd")) // verdadero 
console.log(cadena.endsWith("german" , 15)) // verdadero ya que el segundo parametro  se coloca hasta el final de la longitud contanto la misma palabra y empezara a recorrer desde derecha a izquierda.