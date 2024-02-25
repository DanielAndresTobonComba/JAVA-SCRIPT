const doTask = (interations , callback) => {
    const numbers = []

    for (let i = 0 ; i < interations; i++){
        const number = 1 + Math.floor(Math.random() * 6)

        numbers.push(number)

        if (number == 6){
            ({
                error : true,
                inter : i ,
                message : "Se ha sacado 6"

            });callback 
            return;
        }
    }


return callback(null , {
    error : false,
    value : numbers
})
}

doTask(10 , (err , result) =>{
   
    if (err){
        console.error(">>Error" , err.message)
        console.log(err)
        return
    }
    console.log("Tirradas correctas: " , result.value)
})