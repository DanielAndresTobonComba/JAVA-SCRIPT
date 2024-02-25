function ordenar (arreglo){

    arreglo.forEach(numero =>{

        if(numero >= 5){
            mayor.push(numero)
        }else {
            menor.push(numero)
        }

        
    })

    /* console.log(mayor)
    console.log(menor) */
}

const arreglo = [1,2,3,4,5,6,7,8,9]
let mayor = []
let menor = []

ordenar(arreglo)

let objeto = new Object()
objeto.True = mayor
objeto.False = menor

console.log(objeto)

/* fetch("db.json") , {

    method : "POST",
    body : JSON.stringify({
        id: '0',
        numerosMayores: mayor
    })

}


fetch("db.json") , {

    method : "POST",
    body : JSON.stringify({
        id: '0',
        numerosMayores: menor
    })

} */


    
