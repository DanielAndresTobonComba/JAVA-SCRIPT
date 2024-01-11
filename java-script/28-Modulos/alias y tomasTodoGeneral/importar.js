

//import {suma ,PI} from "./ejemplo1.js"

//El * toma todos lo que tenga el export.js
import * as mod1 from "./exportar.js"
import {PI as PII} from "./exportar.js"

console.log(mod1.suma(3,5))
console.log("Pi: " + mod1.PI)
console.log("Raiz de 2: " + mod1.r2)
console.log("PI con mas digitos: " + PII)

  