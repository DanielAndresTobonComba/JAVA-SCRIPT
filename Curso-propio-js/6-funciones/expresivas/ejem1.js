const operaciones = function (num1 , num2) {

    suma = num1 + num2
    resta = num1 - num2
    mult = num1 * num2
    div = num1 /num2

    return [suma , resta , mult , div]
}

let n1 = 5 
let n2 = 10 
let resultado = 0

resultado = operaciones(n1 , n2)
console.log(`Suma: ${resultado[0]} 
resta: ${resultado[1]}
Multiplicacion: ${resultado[2]} 
Division: ${resultado[3]}`)

