/* const datos = [
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
] */

//1 sincrono

// const getDatos = () => {
//     return datos
// }

// console.log(getDatos())


// 2 asincrono

// const getDatos = () => {
//     setTimeout(() => {
        
//         return datos;
//     } , 1500)

   
// }

// console.log(getDatos())


// 3 promesas 
const datos = []

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

getDatos () 
    .then((datos)=> {console.table(datos)})
    .catch((err)=>{console.error(err.message)})