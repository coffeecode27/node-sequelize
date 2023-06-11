import { Router } from "express";
import allController from "../controller/allController";

const router = Router()

router.get('/',allController.countriesController.findAll)
router.get('/:id',allController.countriesController.findOne)
router.post('/',allController.countriesController.create)
router.put('/:id',allController.countriesController.update)
router.delete('/:id',allController.countriesController.deleted)
// router.get('/query/:id',allController.countriesController.querySQL)

export default router