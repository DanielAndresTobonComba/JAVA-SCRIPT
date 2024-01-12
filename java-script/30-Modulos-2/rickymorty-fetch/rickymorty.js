let main = document.querySelector("main")

async function obtenerDatos (){
    const url = `https://rickandmortyapi.com/api/character`
    
    fetch(url)
    .then(datos => datos.json())
    .then(json => {

        
        
        for (let i = 0 ; i <= 19 ; i++){

            /* const nombre = json.results[i].name
            const status = json.results[i].status
            const img = json.results[i].image  */
    
            const {name ,status, image} = json.results[i]
            //console.log(json.results[i])
            
    
    
            let elemento = `
                        <img src="${image}" alt="imagen">
                        <h2>${name}</h2>
                        <p>${status}</p>
    
            `
    
            let contenedor = document.createElement("div")
            contenedor.innerHTML = elemento
    
            main.appendChild(contenedor)
    
            
        }




    })
    
    

    

    //console.log(json.results[0])
}

obtenerDatos()

