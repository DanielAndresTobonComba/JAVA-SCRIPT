
function detectarString ( text , term){
    
    return text.includes(term)

    
}

let frase = "Ana lava la tina"
let buscar = "ana"
let fraseMin = frase.toLowerCase()

let resultado = detectarString(fraseMin , buscar)



if (resultado == true){
    console.log(`La palabra ${buscar} esta en: ${frase}`)
}
else {
    console.log(`La palabra no ${buscar} esta en: ${frase}`)
}


/* otra forma de buscar pero en posicion */
console.log(fraseMin.search(buscar))