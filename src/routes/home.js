import { Router } from 'express'
import home from '../controllers/home'

const router = Router()

router.get('/', home.index)
router.post('/', home.store)
router.delete('/:id', home.delete)
router.put('/:id', home.update)
router.get('/:id', home.show)

export default router
