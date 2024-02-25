
async function hacerCalculo (iteraciones) {

    const numeros = []

    for (let i = 0; i < iteraciones; i++) {
        const number = 1 + Math.floor(Math.random() * 6);

        let verificado = await leerNumero(number , i)
        numeros.push(number)

        if (verificado.error){
            console.log(verificado)
            break
        }

        

        }
}
async function leerNumero(numero , i){
    
    if (numero === 6) {
        return {
        error: true,
        iter: i+1,
        message: "Se ha sacado un 6"

        };
    }

    return {
        error: false,
        value: numero
    }

}


hacerCalculo(10)