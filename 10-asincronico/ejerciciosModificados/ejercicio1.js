const myNumbers = [4 , 1,-20,-7,5,9,-6]

        const posNumbers = removeNeg(myNumbers , function operar(x){
            if( x >= 0)
            return x
        } )

        console.log(posNumbers)

        function removeNeg (numbers , operacion) {
            const myArray = []
            for (const x of numbers) 
                if (operacion(x))
                myArray.push(x)
            return myArray
        }