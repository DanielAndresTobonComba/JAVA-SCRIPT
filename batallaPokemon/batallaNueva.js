
let botonPelea = document.getElementById("botonPelea")

botonPelea.disabled = true

function fecha(){
    const tiempo = new Date();
    return tiempo
}


//Imprimir los pokemones primera vez
async function imprimirDatosEnemigo (datos){
    // document.getElementById("imagenPokemonCpu").innerHTML = `<img src="${imagen}" alt="${nombre}" width="100">`

    document.getElementById("datosPokemonCpu").innerHTML = ``
    
    datos.forEach((v,k)=>{ 
    document.getElementById("datosPokemonCpu").innerHTML +=  `<p>${k}:${v}</p>`
    })


}


async function imprimirDatosJugador (datos , nombre , imagen){
    document.getElementById("imagenPokemonJugador").innerHTML = `<img src="${imagen}" alt="${nombre}" width="200">`

    document.getElementById("datosPokemonJugador").innerHTML = ``
    datos.forEach((v,k)=>{
        document.getElementById("datosPokemonJugador").innerHTML +=  `<p>${k}:${v}</p>`
    })
}

//Buscar url
async function buscarUrl (id) {
    const url= `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);

    if (!respuesta.ok)
        throw new Error("Error. Pokémon 1 no existe");

    return respuesta
}

async function  escogerPokemonEnemigo(){

    let datosPokemonEnemigo = new Map()
    let resta = 0
   
    do{ 
        let inicio = fecha()
       

        let numeroRandom = 1 + Math.floor(Math.random() * 806)
        let respuesta = await buscarUrl(numeroRandom)
        const json = await respuesta.json()
        

        const nombre = json.name
        const experiencia = json.base_experience
        const imagen = json.sprites.other["official-artwork"].front_default

        for (let k = 0 ; k < 6 ;k++){

            if (k != 3 && k != 4){

            const propiedad = json.stats[k].stat.name
            //console.log("propiedad" , propiedad)

            const valor = json.stats[k].base_stat
            //console.log("valor" , valor)
            
            datosPokemonEnemigo.set(propiedad,valor)
        
            }
        }

        document.getElementById("datosPokemonCpu").innerHTML = ``

        document.getElementById("imagenPokemonCpu").innerHTML = `<img src="${imagen}" alt="${nombre}" width="200" >`

        

       
        let fin = fecha()
        resta += fin - inicio
        

    }while (resta < 7000)

    
    imprimirDatosEnemigo(datosPokemonEnemigo)
    botonPelea.disabled = false
}

async function escogerPokemonJugador(){

    let datosPokemonJugador = new Map()

    let numeroRandom = 1 + Math.floor(Math.random() * 806)
    let respuesta = await buscarUrl(numeroRandom)
    const json = await respuesta.json()
    

    const nombre = json.name
    const experiencia = json.base_experience
    const imagen = json.sprites.other["official-artwork"].front_default

    for (let k = 0 ; k < 6 ;k++){

        if (k != 3 && k != 4){

        const propiedad = json.stats[k].stat.name
        //console.log("propiedad" , propiedad)

        const valor = json.stats[k].base_stat
        //console.log("valor" , valor)
        
        datosPokemonJugador.set(propiedad,valor)
       
        }
    }

    

    imprimirDatosJugador(datosPokemonJugador , nombre , imagen)

}

function iniciarPrograma (){
    escogerPokemonJugador()
    
}