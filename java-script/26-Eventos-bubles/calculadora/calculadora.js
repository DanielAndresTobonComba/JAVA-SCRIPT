
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
//let operador = ""
let cadenaOperadores = ["+" , "-" , "*" , "/"]

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
    
    for(let i = 0; i < cadenaOperadores.length ; i++ ){
        
        let arregloCadena = cadena.split(cadenaOperadores[i])


        if(arregloCadena.length > 1 ){
            
            console.log(cadenaOperadores[i])
            if(cadenaOperadores[i] == "+"){
                console.log("es una suma")
                break
            }else if(cadenaOperadores[i] == "-"){
                console.log("es una resta")
                break
            }else if (cadenaOperadores[i] == "*"){
                console.log("es un multiplicacion")
            }else if (cadenaOperadores[i] == "*"){
                console.log("es una division")
            }else{
                alert("error")
            }
        } 
    }
    
}



function sumar (){
    
}

function restar (){
    
}

function multiplicar (){
    
}

function dividir (){
    
}




