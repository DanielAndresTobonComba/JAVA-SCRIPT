async function getNombre(nomusu){
    const url = `https://api.github.com/users/${nomusu}`
    const respuesta = await fetch(url)
    const json = await respuesta.json()

    console.log(json)
    console.log(typeof(json))
    console.log(json.lenght)

    return new Promise ((resolve , reject)=>{

        resolve("Nombre de usuario valido: " + json.name )  
        
    })
    
    

    
}   

getNombre("DanielAndresTobonComba")
    .then((respuesta)=>{console.log(respuesta)})
    .catch((error)=>{console.log(error)})
