let array = [
    { "id": "1" },
    { "id": "2" },
    { "id": "3" },
    { "id": "2" },
    { "id": "1" },
    { "id": "4" },
]


let fnct = function (item){
    return item.id
}


function groupBy(arr, fnct) {

    let obj = {};

    arr.forEach(element => {
        console.log(element)
        if (fnct(element) in obj) {
            obj[`${fnct(element)}`].push(element);
        } else {
            obj[`${fnct(element)}`] = [element];
        }
    });

    return obj;
}

const result = groupBy(array, fnct);
console.log(result);