let d = document
let arregloNumeros = []

function tomarValores (valor1 , valor2=0){

    console.log("Valor1" + valor1)
    return
}

function obtenerValor (){
  
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
    
    
}

function sumar (arreglo){
    
    
}

function restar (){
    
}

function multiplicar (){
    
}

function dividir (){
    
}

/* Operaciones basicas */
d.querySelector(".sumar").addEventListener("click" , sumar)
d.querySelector(".restar").addEventListener("click" , restar)
d.querySelector(".multiplicar").addEventListener("click" , multiplicar)
d.querySelector(".dividir").addEventListener("click" , dividir)

/* Click en los botones */

for (let i = 0; i <= 9; i++) {
    d.querySelector(".numero" + i).addEventListener("click", obtenerValor);
}
/* d.querySelector(".igual").addEventListener("click" , sumar)
d.querySelector(".decimal").addEventListener("click" , sumar)
d.querySelector(".sumar").addEventListener("click" , sumar)  */


