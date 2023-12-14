const datos = [
    {
        id: 1,
        title : "Iron Man", 
        year: 2008
    }, 
    {
        id:2,
        title:"Spider Man",
        year:2017
    },
    {
        id:3,
        title:" Avenger endgame",
        year:2017
    }
] 



const getDatos = () =>{
    return new Promise((resolve , reject) => {
        if(datos.length == 0){
            reject(new Error("Error. No exiten datos"))

        }
        setTimeout(()=>{
            resolve(datos)
        } , 1500)
    })
}

// 4 Async await 
// esperara que la const getDatos retorne la informacion , debe tener el async para usar el await
async function obtenerDatos (){
    try {
        const datosObtenidos = await getDatos() // 2do va a getDato y hasta que no retorne informacion no se ejecutara el resto del codigo
        console.table(datosObtenidos) // imprimir como tabla, debe estar en formato json
    }catch (error){
        console.log(error(error.mesage))
    }
}

obtenerDatos() //1ro llamo a la funcion obtenerDatos()