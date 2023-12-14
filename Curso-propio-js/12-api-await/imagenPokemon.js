//ir a la img de un pokemon

async function getNombrePokemon(nompokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${nompokemon}`
    const respuesta = await fetch(url)
    const json = await respuesta.json()

    console.log(json.sprites.front_default)
}   

getNombrePokemon("pikachu")

//el mismo ejercicio anterior pero como una promesa

async function getNombrePokemon(nompokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${nompokemon}`
    const respuesta = await fetch(url)

    if (!respuesta.ok)
        throw new Error("Error. Pokemon no existe")

    const json = await respuesta.json()

    console.log(json.sprites.front_default)
}   




getNombrePokemon("pikachuu") 
    .then(nombre => console.log(nombre))
    .catch(error => console.error(error.message))