
let datosPokemonJugador = new Map()
let datosPokemonEnemigo = new Map()

let botonPelea = document.getElementById("botonPelea")

botonPelea.disabled = true

function fecha(){
    const tiempo = new Date();
    return tiempo
}

function atacarEnemigo (){
    let vida =  datosPokemonEnemigo.get("hp")
    let defensa = datosPokemonEnemigo.get("defense")
    let velocidad =datosPokemonEnemigo.get("speed")
    let daño = datosPokemonJugador.get("attack")
    
    let dañoInfligido = vida -[defensa*[1 + velocidad/100]] - daño
    return dañoInfligido
     

}


function atacarJugador(){
    let vida =  datosPokemonJugador.get("hp")
    let defensa = datosPokemonJugador.get("defense")
    let velocidad =datosPokemonJugador.get("speed")

    let daño = datosPokemonEnemigo.get("attack")

    let dañoInfligido = vida -[defensa*[1 + (velocidad/100)]] - daño
    return dañoInfligido

}

function quitarEnemigo (daño) {

    console.log("El daño ha infligir es: " + daño)
    let vida = datosPokemonEnemigo.get("hp")

    let vidaRestante = vida + daño

    datosPokemonEnemigo.set("hp" , vidaRestante) 

    let nuevaVida = datosPokemonEnemigo.get("hp")

    console.log("la nueva vida es" + nuevaVida)

    imprimirDatosEnemigo(datosPokemonEnemigo)


}

function quitarJugador (daño){

    console.log("El daño recibido es: " + daño)
    let vida = datosPokemonJugador.get("hp")
    let vidaRestante = vida + daño
    

    datosPokemonJugador.set("hp" , vidaRestante) 

    let nuevaVida = datosPokemonJugador.get("hp")

    console.log("la nueva vida es" + nuevaVida)

    imprimirDatosJugador(datosPokemonJugador)


}

async function iniciarCombate (){

    let velocidadJugador = datosPokemonJugador.get("speed")
    let velocidadEnemigo = datosPokemonEnemigo.get("speed")

    let ataqueJugador = true
    let ataqueEnemigo = true


    if (velocidadJugador >= velocidadEnemigo && ataqueJugador == true) {

       let daño = atacarEnemigo()
       quitarEnemigo(daño)
       
        
        

    }else if (velocidadJugador < velocidadEnemigo && ataqueEnemigo == true){

        let daño =  atacarJugador()
        quitarJugador(daño)
       

    }

}


//Imprimir los pokemones primera vez
async function imprimirDatosEnemigo (datos = ""){
    // document.getElementById("imagenPokemonCpu").innerHTML = `<img src="${imagen}" alt="${nombre}" width="100">`

    document.getElementById("datosPokemonCpu").innerHTML = ``
    
    datos.forEach((v,k)=>{ 
    document.getElementById("datosPokemonCpu").innerHTML +=  `<p>${k}:${v.toFixed(0)}</p>`
    })


}


async function imprimirDatosJugador (datos , nombre , imagen ){

    document.getElementById("imagenPokemonJugador").innerHTML = `<img src="${imagen}" alt="${nombre}" width="200">`

    document.getElementById("datosPokemonJugador").innerHTML = ``
    datos.forEach((v,k)=>{
        document.getElementById("datosPokemonJugador").innerHTML +=  `<p>${k}:${v.toFixed(0)}</p>`
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