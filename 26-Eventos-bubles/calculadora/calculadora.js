
let d = document
let cadena = ""
//let operador = ""
let cadenaOperadores = ["+" , "-" , "x" , "/"]
let operacionHecha = false

let contenedor = d.querySelector(".areaOperar")

d.querySelector(".igual").addEventListener("click" , operar)

d.querySelector(".decimal").addEventListener("click" , obtenerValor)

for (let i = 0; i <= 9; i++) {
    d.querySelector(".numero" + i).addEventListener("click", obtenerValor);
}


for (let i = 1; i <= 4; i++) {
    d.querySelector(".operacion" + i).addEventListener("click", obtenerValor);
}

//console.log(botones)

function obtenerValor (){
    
    let valor = this.textContent;
    console.log("valor entrante: " + valor);
    
    if((valor == ".") && (cadena.endsWith("."))){
        valor = ""
    }

    if ((cadena.endsWith("+") || cadena.endsWith("-") || cadena.endsWith("x") || cadena.endsWith("/")) && (valor === "+" || valor === "-" || valor === "/" || valor === "x")) {
        console.log("Ya hay un operador");
        console.log("Operador: " + valor);
        valor = "";
    }  

    // for (let i = 0; i < cadenaOperadores; i++) { }

    cadena += valor;
    console.log("cadena: " + cadena);

}

/* function obtenerOperador (boton){
    let valor = boton.textContent 
    console.log(valor)
    
} */


function operar(){
    
    for(let i = 0; i < cadenaOperadores.length ; i++ ){
        
        let arregloCadena = cadena.split(cadenaOperadores[i])


        if(arregloCadena.length > 1 ){
            
            operacionHecha = true

            console.log(cadenaOperadores[i])
            if(cadenaOperadores[i] == "+"){
                console.log("es una suma")
                let suma = Number(arregloCadena[0])  + Number(arregloCadena[1])
                console.log(suma)
                cadena = suma.toFixed(2)
                contenedor.innerHTML = cadena
                break
            }else if(cadenaOperadores[i] == "-"){
                console.log("es una resta")
                let resta = Number(arregloCadena[0])  - Number(arregloCadena[1])
                console.log(resta)
                cadena = resta.toFixed(2)
                contenedor.innerHTML = cadena
                break
            }else if (cadenaOperadores[i] == "x"){
                console.log("es un multiplicacion")
                let mult = Number(arregloCadena[0])  * Number(arregloCadena[1])
                console.log(mult)
                cadena = mult.toFixed(2)
                contenedor.innerHTML = cadena
            }else if (cadenaOperadores[i] == "/"){
                console.log("es una division")
                let div = Number(arregloCadena[0])  / Number(arregloCadena[1])
                console.log(div)
                cadena = div.toFixed(2)
                contenedor.innerHTML = cadena
            }else{
                alert("error")
            }
        } 
    }
    
}








