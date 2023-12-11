
//Si la variable a analizar en null o undefined se aplica el ?? y luego se le asigna el valor por defecto
let nombre = undefined
let cadena = `Bienvenido , ${nombre ?? 'Invitado'} `
console.log(cadena)