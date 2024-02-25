/*  function getNombre(nomusu){
    const url = `https://api.github.com/users/${nomusu}`;
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(json => {
            console.log(json.name)
        })
        .catch((err)=> {console.error("No existe el usuario")})
}

getNombre("DanielAndresTobonComba") 

// fetch se usa para tomar los datos de un servidor

async function getNombre(nomusu){
    const url = `https://api.github.com/users/${nomusu}`
    const respuesta = await fetch(url)
    const json = await respuesta.json()

    console.log(json.name)
}   

getNombre("DanielAndresTobonComba")
 */


//ir a la img de un pokemon
/*
async function getNombrePokemon(nompokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${nompokemon}`
    const respuesta = await fetch(url)
    const json = await respuesta.json()

    console.log(json.sprites.front_default)
}   

getNombrePokemon("pikachu")
*/

//como una promesa
async function getNombrePokemon(nompokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${nompokemon}`
    const respuesta = await fetch(url)

    if (!respuesta.ok)
        throw new Error("Error. Pokemon no existe")

    const json = await respuesta.json()

    console.log(json.sprites.front_default)
}   




getNombrePokemon("pikachu") 
    .then(nombre => console.log(nombre))
    .catch(error => console.error(error.message))


//Asi una funcion se llama a si misma si necesidad de declararse
/* (function saludo (){
    console.log("hola todos")

}())
 */
