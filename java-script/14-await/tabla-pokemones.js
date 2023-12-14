async function getNombrePokemon(iteraciones){
    let mapa = new Map()

    for(let i = 1;i <= iteraciones ;i++){

        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        const respuesta = await fetch(url)

        if (!respuesta.ok)
            throw new Error("Error. Pokemon no existe") 
        
        const json = await respuesta.json()

        //console.log( json.sprites.front_default)
        /* console.log(json.forms[0].name)
        console.table(i) */
        
        mapa.set(`${i}:`,json.forms[0].name )
        mapa.set(`${i}:`,json.sprites.front_default )
        

        }

        console.table(mapa)
}   

//pendiente


getNombrePokemon(10) 
    .then(nombre => console.log(nombre))
    .catch(error => console.error(error.message))