/* FILTRA LOS ELEMETOS QUE CUMPLEN CON LA CONDICION Y DEVUELVE UN ARRRAY */

let arr = [4.6 , 2.5 ,2.5 ,2.5]

let may3 = arr.filter(function(e){
    if ( e >= 3) return e
})

console.log(may3)