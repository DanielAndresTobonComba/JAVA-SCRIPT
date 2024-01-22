let array = [
    { "id": "1" },
    { "id": "2" },
    { "id": "3" },
    { "id": "2" },
    { "id": "1" },
    { "id": "4" },
]



fn = function (element){
    return element.id ; 
}

function filtro(fn,array){ 

    let a = new Map()

    array.forEach((element)=>{
            if(a.get(fn(element))===undefined){
                lista = []
                lista.push(element)
                a.set(fn(element),lista)
            }else{
                lista.push(element)
                a.set(fn(element),lista)
            }
      })

    return a
}

console.log(filtro(fn,array))