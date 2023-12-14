const ejecutar = (numero) =>{

    console.log("Inicio de la operacion")

        return new Promise((resolve , reject) =>{
            setTimeout (()=>{
                if (isNaN(numero) || numero == "" || numero < 0) {
                    reject(`Numero ${numero} es invalido`)
                } else {
                    resolve("Numero valido")
                }
            },2000)
            
        })

    
    
}

let numero = 5
ejecutar(numero)
    .then((resultado) =>{console.log(resultado)})
    .catch((error) =>{console.log(error)})





