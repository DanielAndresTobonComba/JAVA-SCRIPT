let array = [
    { "id": "1" },
    { "id": "2" },
    { "id": "3" },
    { "id": "2" },
    { "id": "1" },
    { "id": "4" },
    


]
let objeto = new Object()

let numeros = []
let arregloObjetos = []

array.forEach(objeto => {

    let ident = fn(objeto)

    if (numeros.includes(ident)) {

        arregloObjetos.forEach(subObjeto => {

            if (ident == subObjeto.id) {
                subObjeto.ident.push(ident)

            }
        })

    } else {

        numeros.push(ident)

        objeto.ident = [ident]



        arregloObjetos.push(objeto)


        /* console.log(arregloObjetos[0].ident) */
    }




})

console.log("objeto" + objeto)


console.log("Numeros" + numeros)
console.table(arregloObjetos)

function fn(item) {
    return item.id;
}