fetch("http://localhost:3001/campers" , {
    method : "POST",
    body : JSON.stringify({
        id: '1',
        nombres: 'Yulieth',
        apellidos: "Ariza",
        trainerId: "1",
        salonId: "1",
        sexo : "f",
        edad : "21"
    }),
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    },
})

    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error("Error !!!" + error))