let main = document.querySelector("main")

async function obtenerDatos (){
    const url = `https://rickandmortyapi.com/api/character`
    
    const respuesta = await fetch(url)
    const json = await respuesta.json()

    for (let i = 0 ; i <= 19 ; i++){

        const nombre = json.results[i].name
        const status = json.results[i].status
        const img = json.results[i].image 

        let elemento = `
                    <img src="${img}" alt="imagen">
                    <h2>${nombre}</h2>
                    <p>${status}</p>

        `

        let contenedor = document.createElement("div")
        contenedor.innerHTML = elemento

        main.appendChild(contenedor)

        
    }

    //console.log(json.results[0])
}

obtenerDatos()

