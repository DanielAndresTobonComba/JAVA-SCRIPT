
const date = new Date();

function fecha (){
    let tiempo = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    return tiempo
}

// function horas () {
//     let horas = date.getHours()
//     return horas
// }

// function segundos () {
//     let segundos = date.getSeconds()
//     return segundos
// }

// function minutos () {
//     let minutos = date.getMinutes()
//     return minutos
// }


 function EnviadoH(){
    setTimeout(function(){
        let tiempo = fecha()
        console.log(`G [Enviado de : 7] aparecio en: ${tiempo}`
        ) 
    } , 3000)
 }



 function EnviadoG() {
    
    setTimeout(function(){
        let tiempo = fecha()
        console.log(`G [Enviado de : 7] aparecio en: ${tiempo}`) 
        EnviadoH()
    } , 2000)
 }

 function EnviadoF (){
    
    setTimeout(function(){
        let tiempo = fecha()
        console.log(`F [Enviado de : 3] aparecio en: ${tiempo}`);  
    } , 7000)
}

function EnviadoD (){
    let aleatorio = 2000 + Math.floor(Math.random() * 5)
    
    setTimeout(function(){
        let tiempo = fecha()
        console.log(`D [Enviado de : 5] aparecio en: ${tiempo}`);  
    } , aleatorio)

    setTimeout(function(){
        let tiempo = fecha()
        console.log(`E [Enviado de : 6] aparecio en: ${tiempo} `)
        EnviadoG() 
    } , aleatorio + 2000)
}

function EnviadoC(){
    let tiempo = fecha()
    setTimeout(function(){
        console.log(`C [Enviado de : 4] aparecio en: ${tiempo}`);  
    } , 5000)
}

function EnviadoB (){
    let tiempo = fecha()
    console.log(`B [Enviado de : 2] aparecio en: ${tiempo}`)
    EnviadoC()
    EnviadoF()
}

let tiempo = fecha()
console.log( `A [Enviado de : 1] aparecio en: ${tiempo}`)
EnviadoB()
EnviadoD()
