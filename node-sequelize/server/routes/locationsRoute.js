import { Router } from "express";
import allController from "../controller/allController";

const router = Router()

router.get('/',allController.locationsController.findAll)
router.get('/:id',allController.locationsController.findOne)
router.post('/',allController.locationsController.create)
router.put('/:id',allController.locationsController.update)
router.delete('/:id',allController.locationsController.deleted)


export default router