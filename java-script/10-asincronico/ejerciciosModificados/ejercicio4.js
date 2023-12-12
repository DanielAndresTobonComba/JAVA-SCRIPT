function multiplicador (factor) {
    return (numero) => {
        return numero * factor
    }
}

//la funcion multiplicador me retorna una funcion entonces la const se convierte en una funcion por eso en multiplicar se toma como una funcion y tienen un parametro
const duplicar = multiplicador(2)
const triplicar = multiplicador(3)

console.log(duplicar(5))
console.log(triplicar(5))