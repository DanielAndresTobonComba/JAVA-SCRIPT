
/* Metodo forEach */
/* ejecutara ciertas instrucciones por cada elemento dentro de un arreglo */


let arr = [4.6 , 2.5 ,2.5 ,2.5]


arr.forEach(function(e) {
    console.log(e)
}) 

//For each en modo flecha 
console.log("-".repeat(15))
arr.forEach(e => console.log(e))  



console.log("-".repeat(15))
arr.forEach(e => console.log(e * 0.8 + 1))  


   
