console.log(Date()) // me da mi fecha actual con dia de la semana, mes, dia del mes hora 

let fecha = new Date()
console.log(fecha ) // aqui me da la fecha de otra forma años dia mes hora

console.log(fecha.getDate()) // dia del mes
console.log(fecha.getDay()) // obtengo los dias de la semana de 0-6 empezando con domingo
console.log(fecha.getMonth()) // obtengo el mes de 0-11 empezando con enero
console.log(fecha.getFullYear()) // me da mi año actual no usar el metodo getYear()
console.log(fecha.getHours()) // me da la hora en formato militar 0-24
console.log(fecha.getMinutes())// me da los minutos 
console.log(fecha.getSeconds()) // me da los segundos
console.log(fecha.getMilliseconds() ) // me da los milisegundos

console.log("Obtener la fecha")
console.log(fecha.toString()) // me da la fecha como un string entendible
console.log(fecha.toDateString()) // me da solo la fecha actual , diaSemana , mes , diaMes , año 
console.log(fecha.toLocaleString()) // da la fecha asi 12/12/2023 y con la hora asi 4:03:32 hora local
console.log(fecha.toLocaleDateString()) // da la fecha asi 12/12/2023 
console.log(fecha.toLocaleTimeString()) // nos da la hora local
console.log(fecha.getTimezoneOffset())// nos da cuantos minutos estamo fuera de la hora cero

let cumpleaños = new Date(2003,4,4,16,55,23) //año mes diasMes hora-minuto-segundo-milisegundo
console.log(cumpleaños)
