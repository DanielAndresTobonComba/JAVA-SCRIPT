fetch("http://localhost:3001/trainers/3" , {
    method : "PATCH",
    body : JSON.stringify({
        edad : 18
    }),
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    },
})

    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error("Error !!!" + error))