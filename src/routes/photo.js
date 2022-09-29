import { Router } from 'express'

import photoController from '../controllers/PhotoContoller'

const router = new Router()

router.post('/', photoController.store)

export default router
