const miPromesa = new Promise((resolve , reject) =>{
    setTimeout(()=>{ //el timeout siempre debe tener un funcion anonima
        resolve("Operacion completada con exito")
    } , 2000)
})


console.log("Inicio de operacion")

miPromesa //por estructura siempre debe ir primero el then y luego el catch que son los que viajan al objeto miPromesa como parametros 
    .then(resultado => {
        console.log(resultado);
    })

    .catch(error => { 
        console.error("Error:" + error)
    })

console.log("Tareas adicionales")