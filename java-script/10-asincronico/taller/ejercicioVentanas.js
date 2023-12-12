
const date = new Date();

function horas () {
    let horas = date.getHours()
    return horas
}

function segundos () {
    let segundos = date.getSeconds()
    return segundos
}

function minutos () {
    let minutos = date.getMinutes()
    return minutos
}


 function EnviadoH(){
    setTimeout(function(){
        console.log(`G [Enviado de : 7] aparecio en: ${horas()} ${minutos()} ${segundos()}`
        ) 
    } , 3000)
 }



 function EnviadoG() {
    setTimeout(function(){
        console.log(`G [Enviado de : 7] aparecio en: ${horas()} ${minutos()} ${segundos()}`) 
        EnviadoH()
    } , 2000)
 }

 function EnviadoF (){
    setTimeout(function(){
        console.log(`F [Enviado de : 3] aparecio en: ${horas()} ${minutos()} ${segundos()}`);  
    } , 7000)
}

function EnviadoD (){
    let aleatorio = 2000 + Math.floor(Math.random() * 5)
    setTimeout(function(){
        console.log(`D [Enviado de : 5] aparecio en: ${horas()} ${minutos()} ${segundos()}`);  
    } , aleatorio)

    setTimeout(function(){
        console.log(`E [Enviado de : 6] aparecio en: ${horas()} ${minutos()} ${segundos()} `)
        EnviadoG() 
    } , aleatorio + 2000)
}

function EnviadoC(){

    setTimeout(function(){
        console.log(`C [Enviado de : 4] aparecio en: ${horas()} ${minutos()} ${segundos()}`);  
    } , 5000)
}

function EnviadoB (){
    console.log(`B [Enviado de : 2] aparecio en: ${horas()} ${minutos()} ${segundos()}`)
    EnviadoC()
    EnviadoF()
}


console.log( `A [Enviado de : 1] aparecio en: ${horas()} ${minutos()} ${segundos()}`)
EnviadoB()
EnviadoD()
