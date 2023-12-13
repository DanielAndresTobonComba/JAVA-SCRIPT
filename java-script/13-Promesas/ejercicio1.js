
function fecha (){
    let date = new Date()
    let tiempo = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return tiempo
}


let impresionA = new Promise((resolve,reject) => {
    resolve(`A [Enviado de : 1] aparecio en: `) 
})

let impresionB = new Promise((resolve,reject) =>{
    resolve(`B [Enviado de : 2] aparecio en: `)
})

let impresionC = new Promise((resolve,reject) =>{
    resolve(`C [Enviado de : 4] aparecio en: `)
})

let impresionD= new Promise((resolve,reject) =>{
    resolve(`D [Enviado de : 5] aparecio en: `)
})


let impresionE= new Promise((resolve,reject) =>{
    resolve(`E [Enviado de : 6] aparecio en: `)
})

let impresionF= new Promise((resolve,reject) =>{
    resolve(`F [Enviado de : 3] aparecio en: `)
})

let impresionG= new Promise((resolve,reject) =>{
    resolve(`G [Enviado de : 7] aparecio en: `)
})

let impresionH= new Promise((resolve,reject) =>{
    resolve(`H [Enviado de : 8] aparecio en: `)
})

let aleatorio = 2000 + Math.floor(Math.random() * 5)


impresionA 
    .then((response) => {
        console.log(response + fecha())
    })

    setTimeout(()=> {
        
        impresionD
            .then((response)=>{
                console.log(response+ fecha())

                setTimeout(()=>{
                    impresionE
                        .then((response)=>{
                            console.log(response+ fecha())

                            setTimeout(()=>{
                                impresionG
                                    .then((response)=>{
                                        console.log(response+ fecha())

                                        setTimeout(()=>{
                                            impresionH
                                                .then((response)=>{
                                                    console.log(response+ fecha())
                                                })
                                        } ,3000)
                                    })
                            } ,2000)

                        })
                } ,2000) 

            })
        }, aleatorio)

        
        

    setTimeout(()=> {
        impresionC 
            .then((response)=>{
                console.log(response+ fecha())
            })
    }, 5000)

impresionB 
    .then((response)=> {
        console.log(response+ fecha())
    })

    setTimeout(()=> {
        impresionF 
            .then((response)=>{
                console.log(response+ fecha())
            })
    }, 7000)

   

    


// Promise.all([impresionA,impresionB])
//     .then ((value) => {
//         console.log(`Los volores son: ${value}`)
//     })
