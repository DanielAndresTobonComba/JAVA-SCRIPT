 //ubicar bien el archivo a abrir

 async function fectData(){
    try{
        const data = await fs.readFile('a.txt' , 'utf-8')
        console.log(data)
    }catch (error){
        console.error("Error al leer el archivo" + error.message)
    }
}

console.log("Codigo asicrono")
fectData()