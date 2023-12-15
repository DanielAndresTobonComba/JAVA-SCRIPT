
//https://pokeapi.co/api/v2/pokemon/{id-pokemon}

async function escogerPokemonEnemigo(pokemonJugador){

    let datosPokemon = new Map()

        setTimeout (()=>{
            aleatorio()
            async function aleatorio (){

                let random = 1 + Math.floor(Math.random() * 806)
                console.log("random" ,random)

                const url= `https://pokeapi.co/api/v2/pokemon/${random}`;
                const respuesta = await  fetch(url);

                if (!respuesta.ok)
                throw new Error("Error. Pokémon 1 no existe");

                const json = await respuesta.json();
                console.log(json)

                const nombre = json.name
                console.log("nombre" ,nombre)

                for (let k = 0 ; k < 6 ;k++){

                if (k != 3 && k != 4){

                    const propiedad = json.stats[k].stat.name
                    console.log("propiedad" , propiedad)

                    const valor = json.stats[k].base_stat
                    console.log("valor" , valor)
                    
                    datosPokemon.set(propiedad,valor)
            
                    }
                }   

                console.log(datosPokemon)
                
                const experiencia = json.base_experience
                console.log("experiencia",experiencia) 

                const imagen = json.sprites.other["official-artwork"].front_default
                console.log("imagen", imagen) 

                document.getElementById("imagenPokemonCpu").innerHTML = `<img src="${imagen}" alt="${nombre}" width="100">`

                
                document.getElementById("datosPokemonCpu").innerHTML = ``

                datosPokemon.forEach((v,k)=>{
                    document.getElementById("datosPokemonCpu").innerHTML +=  `<p>${k}:${v}</p>`
                })
                console.log(datosPokemon.get("speed"))

                combate(pokemonJugador,datosPokemon)
                    } 

            },1000)
        
    
    
    
            
}

async function escogerPokemonJugador(){

    let datosPokemon = new Map()
   
    let random = 1 + Math.floor(Math.random() * 806)
    console.log("random" , random)

    const url= `https://pokeapi.co/api/v2/pokemon/${random}`;
    const respuesta = await fetch(url);

    if (!respuesta.ok)
        throw new Error("Error. Pokémon 1 no existe");

    const json = await respuesta.json();
    console.log(json)

    const nombre = json.name
    console.log("nombre" ,nombre)

    for (let k = 0 ; k < 6 ;k++){

        if (k != 3 && k != 4){

        const propiedad = json.stats[k].stat.name
        console.log("propiedad" , propiedad)

        const valor = json.stats[k].base_stat
        console.log("valor" , valor)
        
        datosPokemon.set(propiedad,valor)
       
        }
    }

    console.log(datosPokemon)
    
    const experiencia = json.base_experience
    console.log("experiencia",experiencia) 

    const imagen = json.sprites.other["official-artwork"].front_default
    console.log("imagen", imagen) 

    

    document.getElementById("imagenPokemonJugador").innerHTML = `<img src="${imagen}" alt="${nombre}" width="100">`

    document.getElementById("datosPokemonJugador").innerHTML = ``

    datosPokemon.forEach((v,k)=>{
        document.getElementById("datosPokemonJugador").innerHTML +=  `<p>${k}:${v}</p>`
    })

    
    console.log(datosPokemon.get('speed'))
    escogerPokemonEnemigo(datosPokemon.get('speed'))

    escogerPokemonEnemigo(datosPokemon)
     
}

function atacarEnemigo (enemigo , jugador){
    let vida =  enemigo.get("hp")
    let defensa = enemigo.get("defense")
    let velocidad =enemigo.get("speed")
    let daño = jugador.get("attack")
    let dañoInfligido = vida -[defensa*[1 + velocidad/100]] - daño
    return dañoInfligido

}
    
function combate (pokemonJugador , pokemonEnemigo){
    console.log(pokemonJugador)
    console.log(pokemonEnemigo)

    let velocidadJugador = pokemonJugador.get('speed')
    let velocidadEnemigo = pokemonEnemigo.get('speed')

    console.log(velocidadJugador,velocidadEnemigo)

    if (velocidadJugador > velocidadEnemigo){
        atacarEnemigo(pokemonEnemigo , pokemonJugador)
    }
    else {
        atacarJugardo(pokemonJugador)
    }


}


