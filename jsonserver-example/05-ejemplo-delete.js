fetch("http://localhost:3001/campers/1" , {
    method : "DELETE",
   
})
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.error("Error !!!" + error))