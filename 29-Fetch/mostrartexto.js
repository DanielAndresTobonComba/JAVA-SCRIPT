export default function mostrarTexto(elemHTML) {
    console.log("function mostrarTexto")
    fetch("datos.csv")
    .then(data => data.text()) //cuando s eresulve la promesa y se convierte con el .text() ese dato ira a la siguiente promesa osea dat 
    .then(dat => {
        console.table(dat);
        elemHTML.innerHTML = dat;
    })
    .catch(error => {
        console.error("Ha ocurrido un error. \n", error.message);
    })
    .finally(() => {
        console.log("Ha terminado el consumo de la API");
    })
}