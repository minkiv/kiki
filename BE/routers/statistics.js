import express from 'express'
import statisticsController from '../modules/Statistics/controller/api/index.js'

const router = express.Router()
router.get("/", statisticsController.statisticsProduct)


export default router 