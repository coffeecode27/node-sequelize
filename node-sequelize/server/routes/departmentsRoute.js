import { Router } from "express";
import allController from "../controller/allController";

const router = Router()

router.get('/',allController.departmentsController.findAll)
router.get('/:id',allController.departmentsController.findOne)
router.post('/',allController.departmentsController.create)
router.put('/:id',allController.departmentsController.update)
router.delete('/:id',allController.departmentsController.deleted)


export default router