import authController from "../modules/Auth/Controller/index.js";
import express from 'express'

const router = express.Router()

router.post('/register', authController.registers)

export default router

