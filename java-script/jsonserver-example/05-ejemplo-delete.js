fetch("http://localhost:3001/trainers/3" , {
    method : "DELETE",
   
})
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.error("Error !!!" + error))