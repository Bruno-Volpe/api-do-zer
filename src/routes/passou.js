import { Router } from 'express'
import passou from '../controllers/passou'

const router = Router()

router.get('/', passou.index)

export default router
