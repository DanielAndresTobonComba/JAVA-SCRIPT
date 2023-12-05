let letras = new Set() 

/* agregar elementos */
letras.add("b")
letras.add("c")
letras.add("y")

console.log(letras)


/* borrar un elemento */
console.log("Borrar un elemento")
console.log(letras.delete("a"))
console.log(letras.delete("y"))

/* verificar si existe un elemento */
console.log("Verificar si esta dentro del conjunto")
console.log(letras.has("Y"))
console.log(letras.has("C"))


/* recorrer el diccionario con forEach */

console.log("Recorrer con forEach")
letras.forEach(l => console.log(l))

/* recorrer el diccionario con for of */
console.log("Recorrer con for Of")
for (const l of letras) {
    console.log(l)
}


/* recorrer con .values() */
console.log("Recorrer con .values()")
for (const l of letras.values()) {
    console.log(l)
}


/* .clear() limpia el diccionario por completo */

