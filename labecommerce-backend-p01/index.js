console.log('*************************************************************')
console.log('iniciando labcommerce -b1')
console.log('*************************************************************')
const arg2 = process.argv[2]
if (!arg2) {
    console.log('argumento nao registrado')
} else {
    console.log(arg2 + "🍌")
}


import { Express } from "express";
import { Request as req, Response as res } from '/express'

const app = express()

app.get('/', (req, res) => {
    res.send("WS RODANDO NO PORT")
})


app.get('3333', req, res => {
    console.log(`3333= RODANDO WS`)
})