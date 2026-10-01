import express from 'express'
import veiculosRouter from './routes/veiculo.routes.js'

const app = express()
const port = 3000

app.use(express.json())

app.use('/veiculos', veiculosRouter)

app.listen(port, () =>{
console.log('app rodando em http://localhost:3000');


})
