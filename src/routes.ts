import Router from 'koa-router'
import UserController from './controllers/user'

const router = new Router()

router.get('/users', UserController.listUsers)

export default router
