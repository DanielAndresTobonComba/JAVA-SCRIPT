function realizarTareaAsincrona(callBack){
    setTimeout(() => {
        console.log("Tarea asincronica completada");
        callBack();
    } , 2000)
}


const call = () => {
    console.log("El callback se ha ejecutado")
}


realizarTareaAsincrona(call)
console.log("Tarea principal continua")