
import {pool} from '../config/db.js';

class veiculosService {

    async getAll() {
        const resultado = await pool.query(
            'SELECT * FROM veiculos'
        );

        return resultado.rows;
    }

   async create({ modelo, marca, ano, placa }) {
        const resultado = await pool.query(
            `INSERT INTO veiculos 
            (modelo, marca, ano, placa)
            VALUES ($1,$2,$3,$4)
            RETURNING *`,
            [modelo, marca, ano, placa]
        );

        return resultado.rows[0];
    }
}

export default new veiculosService()
