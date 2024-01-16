fetch("http://localhost:3001/trainers?nombres=Carlos" , {
    method : "GET", 
    headers : {
        "Content-type": "application/json; charset=UTF-8"
    },
})


.then((response)=> response.json())
.then((json) => console.log(json))