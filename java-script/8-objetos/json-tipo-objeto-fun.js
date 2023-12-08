const obj = {
    "empleados" : [
        {
            "nombre": "Juan Perez",
            "apellido": "Lopez",
            
        },

        {   
            "nombre": "Ana ",
            "apellido": "Gonzalez", 
            

        }, 

        {   
            "nombre": "Pedro ",
            "apellido": "Sanchez",
            

        }, 

    ],

    nombreCompleto : function (pos){
        return this.empleados[pos].nombre + " " + this.empleados[pos].apellido
    }

    
}

console.log(obj.nombreCompleto(2))//uso de la funcion nombre completo solo una vez

console.log(obj.empleados.length) // longitud del diccionario empelados
console.log(obj.empleados[2].apellido) // apellido del empleado en la pos 2
