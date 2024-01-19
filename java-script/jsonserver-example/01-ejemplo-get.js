/* fetch("http://localhost:3001/campers?salonId=1" , {
    method : "GET", 
    headers : {
        "Content-type": "application/json; charset=UTF-8"
    },
})



.then((response)=> response.json())
.then((json) => console.log(json)) */



/* Para obtener cierta cantidad de datos por posiciones */

/* fetch("http://localhost:3001/trainers?_start=0&_end=2" , {
    method : "GET", 
    headers : {
        "Content-type": "application/json; charset=UTF-8"
    },
})
.then((response)=> response.json())
.then((json) => console.log(json))
 */


/* Pra obtener datos con un limite en cantidad como un paginado */

/* fetch("http://localhost:3001/trainers?_start=0&_limit=4" , {
    method : "GET", 
    headers : {
        "Content-type": "application/json; charset=UTF-8"
    },
})
.then((response)=> response.json())
.then((json) => {
    console.log(console.table(json)) //imprimir un json como tabla
    console.log(json.length)
}) */



/* aqui solo voy a mostrar los trainers con una id par */ 

/* fetch("http://localhost:3001/trainers?" , {
    method : "GET", 
    headers : {
        "Content-type": "application/json; charset=UTF-8"
    },
})
.then((response)=> response.json())
.then((json) => {
    console.log(json.length)

    json.forEach(trainer => {

        if(trainer.id % 2 == 0){
           console.table(trainer)
        }else{

        }
    })
    
}) */


/* obtener los hijos de un objeto */

fetch("http://localhost:3001/campers" , {
    method : "GET", 
    headers : {
        "Content-type": "application/json; charset=UTF-8"
    },
})
.then((response)=> response.json())
.then((json) => {
    console.table(json); // Imprimir un JSON como tabla
    console.log("Número total de campers:", json.length);

    // Iterar sobre cada camper e imprimir el valor de la propiedad salones
    json.forEach(camper => {
        console.log("Salones del camper:", camper.salones);
    });
})
.catch((error) => console.error('Error:', error));
