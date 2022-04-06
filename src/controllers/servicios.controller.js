import req from 'express/lib/request'
import {getConnection, sql,queries} from '../database'


export const getServicios = async (req,res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request()
            .query(queries.getAllServicios)

        res.json(result.recordset)
    }
    catch(error) {
        res.status(500),
        res.send(error.message)

    }
}


export const createNewServicio = async (req,res) => {
    const {nombre} =req.body

    if(nombre==null) {
        return res.status(400).json({
            msg:'Bad request. please fill all fields'
        })
    }

    try {
        const pool = await getConnection()
        await pool.request()
            .input("nombre",sql.VarChar,nombre)    
            .query(queries.addNewServicio)

        res.json({nombre})
    }
    catch(error)
    {
        res.status(500),
        res.send(error.message)
    }
}

export const getServicioById = async (req,res) => {
        try {
            const {id} =req.params
            const pool = await getConnection()
            const result = await pool.request()
                .input("iidservicio",id)
                .query(queries.getServicioById)
    
            res.json(result.recordset)
        }
        catch(error) {
            res.status(500),
            res.send(error.message)
    
        }
        res.send({id})
    } 

    export const deleteServicioById = async (req,res) => {
        try {
            const {id} =req.params
            const pool = await getConnection()
            await pool.request()
                .input("iidservicio",id)
                .query(queries.deleteServicioById)
    
            res.json(id)
        }
        catch(error) {
            res.status(500),
            res.send(error.message)
    
        }
        res.send({id})
    }     


    export const updateServicioById = async (req,res) => {
        const {nombre} = req.body
        const {id} = req.params
    
        if(nombre==null) {
            return res.status(400).json({
                msg:'Bad request. please fill all fields'
            })
        }
    
        try {
            const pool = await getConnection()
            await pool.request()
                .input("nombre",sql.VarChar,nombre)    
                .input("iidservicio",sql.Int,id)    
                .query(queries.updateServicioById)
    
            res.json({nombre})
        }
        catch(error)
        {
            res.status(500),
            res.send(error.message)
        }
    }

