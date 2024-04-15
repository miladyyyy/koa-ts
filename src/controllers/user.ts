import { Context } from 'koa'

class UserController {
  static async listUsers(ctx: Context) {
    ctx.body = 'This is listUsers'
  }
}

export default UserController
