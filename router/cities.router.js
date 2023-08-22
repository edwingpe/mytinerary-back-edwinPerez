import express from 'express'
import citiesController from '../controllers/city.controllers.js'

const router = express.Router();

const {getCities, getCityById, createCity} = citiesController;

router.get('/', getCities)
router.get('/:id', getCityById)
router.post('/', createCity)

export default router