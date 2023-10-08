import authController from "../modules/Auth/Controller/index.js";
import express from 'express'

const router = express.Router()

router.post('/register', authController.registers)
router.post('/signin', authController.signIn)
router.get('/', authController.getAllUser)
router.get('/:id', authController.getOneUser)
export default router

