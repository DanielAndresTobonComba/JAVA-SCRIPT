let numero = "xd"

const obtenerNumero = (numero) => {
        return new Promise ((resolve , reject)=>{
        if(isNaN(numero) || numero <= 0){
            reject(`Error numero '${numero}' invalido`)
            
        }

        setTimeout(()=>{
            resolve("Numero correcto")
            
        } , 2000)
    })
    
}



obtenerNumero(numero)
    .then((dato)=>{console.log(dato)})
    .catch((error)=> {console.log(error)})