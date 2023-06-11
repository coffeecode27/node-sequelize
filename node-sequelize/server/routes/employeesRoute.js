import { Router } from "express";
import allController from "../controller/allController";

const router = Router()

router.get('/',allController.employeesController.findAll)
router.get('/:id',allController.employeesController.findOne)
router.post('/',allController.employeesController.create)
router.put('/:id',allController.employeesController.update)
router.delete('/:id',allController.employeesController.deleted)


export default router