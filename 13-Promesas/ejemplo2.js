const miPromesa = new Promise ((resolve , reject) =>{
    setTimeout(()=> {
        const exito = true
        if (exito){
            resolve("La promesa se cumplio con exito")
        } else {
            reject("Hubo un erro alcumplir la promesa")
        }
    } ,  2000)
})


miPromesa 
    .then(resultado => {
        console.log("Exito:" , resultado)
    })

    .catch(error => {
        console.error("Error: " , error)
    })