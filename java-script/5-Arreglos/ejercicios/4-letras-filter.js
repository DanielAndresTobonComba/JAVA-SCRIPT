let arreglo = ["Comida" , "Arroz" , "Lecha" , "Cerveza" , "Col"]

/* let letras = arreglo.filter(function(e){
    if (e.length >= 4) return e
})

console.log(letras) */




/* metodo de flechas */

let letras = arreglo.filter(e => {if (e.length >= 4) return e})


console.log(letras)

