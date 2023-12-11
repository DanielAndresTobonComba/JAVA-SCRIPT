//Agregar al ultimo en un arreglo
console.log("-".repeat(10), "push" , "-".repeat(10))
let array = ["Luis" , "Felix" , "Marco"]
array.push(17)
console.log(array)

// Eliminar al ultimo en un arreglo 
console.log("-".repeat(10), "pop" , "-".repeat(10))
array.pop()
console.log(array)

//Elimina el primero y luego lo devuelve si lo guardamos en un variable
console.log("-".repeat(10), "shift" , "-".repeat(10))
let eliminado = array.shift()
console.log(eliminado)

// Agrega al primero y luego devuelve la nueva longitud del array si se guarda en una nueva variable
console.log("-".repeat(10), "unshift" , "-".repeat(10))
let longitudNueva = array.unshift("Fernando" , "Camacho")
console.log(longitudNueva)


//Devuelve una parte del array desde el indice hasta el indice final sin incluir este ultimo
console.log("-".repeat(10), "slice" , "-".repeat(10))
let parte = array.slice(0 , 2)
console.log(parte)


//Agrega o elimina elementos del array y devuelve lo eliminado 
console.log("-".repeat(10), "splice" , "-".repeat(10))
let removido = array.splice(0,2)
console.log(array)
console.log(removido)


//Uno de o mas arrays y devuelve la union de los dos 
console.log("-".repeat(10), "concat" , "-".repeat(10))
let arr1 = [1,2,3]
let arr2 = [3,4,5]
let arr3 = [6,7,8]
let concatenado = arr1.concat(arr2 , arr3)
console.log(concatenado)

//Une los elemetos del array por un patron y lo convierte en una cade de texto
console.log("-".repeat(10), "join" , "-".repeat(10))
let frutas = ["manzana" , "banana" , "pera"]
let str = frutas.join(", ")
console.log(str)


//Busca el objeto dentro del arreglo y retorna su ubicacion , sino no lo encuentra retorna -1
console.log("-".repeat(10), "indexof" , "-".repeat(10))
let elemeto = frutas.indexOf("pera")
console.log(elemeto)



