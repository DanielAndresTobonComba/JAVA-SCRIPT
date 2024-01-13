fetch("http://localhost:3001/trainers" , {
    method : "POST",
    body : JSON.stringify({
        id: '2',
        nombres: 'Yulieth',
        apellidos: 'Rueda',
        especialidad: 'FullStack python' 
    }),
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    },
})

    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error("Error !!!" + error))