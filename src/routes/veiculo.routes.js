
import express from 'express'
import veiculosService from '../services/veiculo.service.js'

const veiculosRouter = express.Router()

veiculosRouter.get('/', async (req, res) => {
    const veiculos = await veiculosService.getAll()
    return res.json(veiculos)
})

veiculosRouter.post('/', async (req, res) => {
    const veiculo = await veiculosService.create(req.body)
    return res.status(201).json(veiculo)
})

export default veiculosRouter