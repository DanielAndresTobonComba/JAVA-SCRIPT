const names = ["Pedro" , "Sara" , "Miriam" , "Nestor" , "Adrian" , "Sandra"]

//Forma normal
/* names.forEach(function (name){

    const FirstLetter = name.charAt(0).toLocaleLowerCase()

    const lastLetter = name.charAt(-1).toLocaleLowerCase()


    if((FirstLetter === "p" || FirstLetter === "s") && (lastLetter === "o" || lastLetter === "a")){
        console.log(`El nombre ${name} cumple con las condiciones`)
    }

})
 */

//Comporbacion usando expresiones regulares 


names.forEach(function(name){
    const regex = /^(p|s).+(o|a)$/i

    //EL test devuelve true si se cumple la condicion
    if(regex.test(name)){
        console.log(`El nombre ${name} cumple las restricciones`)
    }
})



