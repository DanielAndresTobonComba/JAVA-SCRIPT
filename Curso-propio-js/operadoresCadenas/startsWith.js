// Devuelve verdadero si una cadena comienza con el primer parametro y el segundo es el indice de donde comienza a buscar

let string = "Hola soy German"
console.log(string.startsWith("hola")) // devuelve false por que distingue mayusculas de minusculas
console.log(string.startsWith("Hola")) // true
console.log(string.startsWith("Hola" , 2)) // false porque esta buscando desde el indice 2
