
function operar(arr , operacion , val = 0){
    let resultado = val 
     for (let num of arr){
        resultado = operacion(resultado , num)
     }

     return resultado
}

function suma (num1 , num2){
    return num1 + num2
}

function resta (num1 , num2){
    return num1-num2
}

function multiplicar (num1 , num2){
    return num1*num2
}

function dividir (num1 , num2){
    return num1/num2
}


const numeros = [1,2,3,4,5]
const sumaTotal = operar( numeros , suma)
const restaTotal = operar( numeros , resta)
const multTotal = operar( numeros , multiplicar , 1)
const divTotal = operar( numeros , dividir , 1)

console.log(sumaTotal)
console.log(restaTotal)
console.log(multTotal)
console.log(divTotal)



