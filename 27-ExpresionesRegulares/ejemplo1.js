const regex = /lo/g; 
const text = "Hello World"
const matches = text.match(regex)
console.log(matches) 


//Otra forma de escribir este es creando un objeto
const regex2 = new RegExp("lo" , "g");
const matches2 = text.match(regex2)
console.log(matches2)


//Me devuelve la cantidad de veces que se encontro "lo" en text dentro de un arreglo