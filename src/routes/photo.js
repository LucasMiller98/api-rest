import { Router } from 'express'

import photoController from '../controllers/PhotoContoller'
import loginRequired from '../middlewares/loginRequired'

const router = new Router()

router.post('/', loginRequired, photoController.store)

export default router
