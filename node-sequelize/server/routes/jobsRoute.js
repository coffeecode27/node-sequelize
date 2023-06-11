import { Router } from "express";
import allController from "../controller/allController";

const router = Router()

router.get('/',allController.jobsController.findAll)
router.get('/:id',allController.jobsController.findOne)
router.post('/',allController.jobsController.create)
router.put('/:id',allController.jobsController.update)
router.delete('/:id',allController.jobsController.deleted)


export default router