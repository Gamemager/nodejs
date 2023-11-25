import { pool } from "../db.js";

export const getProductosSamsung= async (req, res) => {
    try{
        const [rows] = await pool.query ('SELECT * FROM productosSamsung')
        res.json(rows);
    }catch (error){
        return res.status(500).json ({
            message: 'Algo salio mal'
        })
    }

}

export const getProductoSamsung = async(req, res) => {
    try{
        console.log (req.params.Id)
        const [rows]= await pool.query('SELECT * FROM productosSamsung WHERE id= ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'Producto no encontrado'
        })
        res.json (rows[0])
    }catch (error){
        return res.status(500).json ({
            message: 'Algo salio mal'
        })
    }

}

export const createProductoSamsung= async (req, res) => {
    const {Precio, Modelo, Color, Descripción } =req.body
    try{
        const [rows] = await pool.query('INSERT INTO productosSamsung(Precio, Modelo, Color, Descripción) VALUES(?,?,?,?)', [Precio, Modelo, Color, Descripción]);
        res.send ({
            id: rows.insertId,
            Precio,
            Modelo,
            Color,
            Descripción
        })

    }catch (error) {
        return res.status(500).json ({
            message: 'Algo salio mal'
        })
    }

}

export const deleteProductoSamsung= async (req, res) => {
    try{
        const [resuld] = await pool.query ('DELETE FROM productosSamsung WHERE id=?', [req.params.id])
        
        if (resuld.affectedRows <= 0) return res.status(404).json({
            message: 'Producto no Encontrado'
        })
        res.sendStatus(204)

    }catch (error) {
        return res.status(500).json ({
            message: 'Algo salio mal'
        })
    }

}

export const updateProductoSamsung= async (req, res) => {
    const {id}= req.params
    const {Precio, Modelo, Color, Descripción } =req.body
   
    try{
        const [resuld]= await pool.query( 'UPDATE productosSamsung SET Precio = IFNULL(?, Precio), Modelo= IFNULL(?,Modelo), Color= IFNULL(?,Color), Descripción= IFNULL(?,Descripción) WHERE id = ?', [Precio,Modelo, Color, Descripción, id])
        console.log(resuld)
    
        if (resuld.affectedRows ===0) return res.status(404).json ({
            message: 'Producto no Encontrado'
        })
        const [rows]= await pool.query ('SELECT * FROM productosSamsung WHERE id = ?', [id])
        res.json(rows[0])
        
    }catch (error) {
        return res.status(500).json ({
            message: 'Algo salio mal'
        })
    }

}