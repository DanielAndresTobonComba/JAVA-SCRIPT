
/* function obtenerValor (){
  
    let boton = this
    let valor = boton.value
    let valorNumerico = Number(valor)
    console.log(typeof(valorNumerico))
    console.log(valorNumerico) 

    let operacion = this 
    let cual = operacion.value

    
    arregloNumeros.push(valorNumerico)
    console.log(arregloNumeros)

    if (arregloNumeros.length > 1){

        if(cual == "suma"){
            sumar(arregloNumeros)

        }else if (cual == "restar"){
            restar(arregloNumeros)

        }else if (cual == "multiplicar"){
            multiplicar(arregloNumeros)

        }else{
            dividir(arregloNumeros)
        }
    }
    
    
} */

let d = document
let cadena = ""
let operador = ""

d.querySelector(".igual").addEventListener("click" , operar)

for (let i = 0; i <= 9; i++) {
    d.querySelector(".numero" + i).addEventListener("click", obtenerValor);
}


for (let i = 1; i <= 4; i++) {
    d.querySelector(".operacion" + i).addEventListener("click", obtenerValor);
}

//console.log(botones)

function obtenerValor (){
    let valor = this.textContent
    cadena += valor
    console.log(cadena)
}

function obtenerOperador (boton){
    let valor = boton.textContent 
    console.log(valor)
    
}


function operar(){
    let suma = cadena.split("+")
    console.log(suma)
}



function sumar (){
    
}

function restar (){
    
}

function multiplicar (){
    
}

function dividir (){
    
}




