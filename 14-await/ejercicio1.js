
//funcion se llama a si misma y toma dos img del servidor con los nombre que se envian
async function getNombrePokemon(nompokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${nompokemon}`
    const respuesta = await fetch(url)

    if (!respuesta.ok)
        throw new Error("Error. Pokemon no existe")

    const json = await respuesta.json()

    return json.sprites.front_default
}  

(async function () {
    try {
        let urlimg = await getNombrePokemon('pikachu')
        console.log(urlimg)

        urlimg = await getNombrePokemon('litten')
        console.log(urlimg)
    } catch (error){
        console.error(error.mesage)
    }
}())