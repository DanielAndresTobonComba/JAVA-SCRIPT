function getNombre(nombre){
    const url = `https://api.github.com/users/${nombre}`;

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(json => {
            console.log(json.name)
        })
        .catch((error)=> {console.error("El nombre de usuario no existe"+error)})
}

getNombre("DanielAndresTobonComba") 