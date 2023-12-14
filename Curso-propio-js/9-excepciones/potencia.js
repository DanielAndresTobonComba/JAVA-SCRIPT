function verificarNumero(numero){
    if(numero <= 0 || isNaN(numero))
        
        throw `Numero '${numero}' es invalido`

    else{
        
        return numero
    }
}


function calcularPotencia (num1 , num2){
    return num1 ** num2
}



try {
    let num1 = 5
    let num2 = 4

    let resultado = calcularPotencia( verificarNumero(num1) ,  verificarNumero(num2))
    console.log(`${num1} a la potencia de ${num2} es; ${resultado}`)

}catch (error) {
    console.log(error)
}



