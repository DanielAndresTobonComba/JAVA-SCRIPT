const obj = {
    "empleados" : [
        {
            "nombre": "Juan Perez",
            "apellido": "Lopez",
            nombreCompleto : function (){
                return this.nombre + " " + this.apellido
            }
        },

        {   
            "nombre": "Ana ",
            "apellido": "Gonzalez", 
            nombreCompleto : function (){
                return this.nombre + " " + this.apellido
            }

        }, 

        {   
            "nombre": "Pedro ",
            "apellido": "Sanchez",
            nombreCompleto : function (){
                return this.nombre + " " + this.apellido
            }

        }, 

    ],

    
}

//Llamo al objeto a su atributo empleados , empleado es una lista de objetos , accedo a la posicion 2 del arreglo que es un diccionario y a ese diccionario le tomo su apellido

console.log(obj.empleados.length)
console.log(obj.empleados[2].apellido)
console.log(obj.empleados[2].nombreCompleto())