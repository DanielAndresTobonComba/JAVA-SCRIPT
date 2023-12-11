const palabras = ["attempt", "pay", "practice", "attend"]
let prefijo = "att"

function reducirCadena(acumulador, valueCurrent) {
    console.log(acumulador , valueCurrent);
}

let cadenaPrefijos = palabras.reduce(reducirCadena)

//console.log(cadenaPrefijos)


// (c , e ) => c + (e.startsWith(prefijo))