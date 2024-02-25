

//const doTask = (iterations) => {
const doTask = (iterations) => {
    return new Promise((resolve, reject) => {
        const numbers = [];
        for (let i = 0; i < iterations; i++) {
            const number = 1 + Math.floor(Math.random() * 6);
            if (number === 6) {
                // reject(new Error({error: true,iter: i+1,message: "Se ha sacado un 6"}))
                reject(new Error(`saco un ${number} y las tiradas son: ${numbers}`))
            }
            numbers.push(number);
        }
        resolve(numbers);
    })
}
async function ejecutar(iteraciones) {
    try {
        const dateObtain = await doTask(iteraciones);
        console.log(dateObtain);
    } catch (error) {
        console.log(error);
    }
}
ejecutar(5);

