//ejecutar en un navegador
try {
    90/0;
} catch (e){
    console.log(e)
}

try { 
    throw "Ninguno paso el quiz"
} catch(e){
    console.log(e)
//EL finaly siempre se va a ejecutar aunque no haya excepcion
}finally {
    console.log("Esto se ejecutar si o si")
}