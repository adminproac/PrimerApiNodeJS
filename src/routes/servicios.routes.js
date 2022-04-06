//Definimos las rutas

import { Router } from "express";
import {createNewServicio, deleteServicioById, getServicioById, getServicios, updateServicioById} from '../controllers/servicios.controller'

const router =Router()

router.get('/servicios',getServicios)
router.post('/servicios',createNewServicio)
router.get('/servicios/:id',getServicioById)
router.delete('/servicios/:id',deleteServicioById)
router.put('/servicios/:id',updateServicioById)


export default router