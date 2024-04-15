import koa from 'koa'
import router from './routes'
// import debug from 'debug'
// import os from 'node:os'
// import chalk from 'chalk'

const app = new koa()

app.use(router.routes()).use(router.allowedMethods())
app.use(async (ctx) => {
  ctx.body = 'hello world'
})

const port = 3000
app.listen(port)

// // 获取 IP
// const interfaces = os.networkInterfaces()

// function getIp() {
//   let IpAddress = ''
//   for (const devName in interfaces) {
//     interfaces[devName]!.forEach((ip) => {
//       if (ip.family === 'IPv4' && ip.address !== '127.0.0.1' && !ip.internal) {
//         IpAddress = ip.address
//       }
//     })
//   }
//   return IpAddress
// }

// // 更新 onListening
// function onListening() {
//   const addr = server.address()
//   const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr!.port
//   debug('Listening on ' + bind)
//   console.log(`
//     Server running at:
//     - Local:   ${chalk.hex('#66D9EF')('http://localhost:' + port)}
//     - Network: ${chalk.hex('#66D9EF')('http://' + getIp() + ':' + port)}
//   `)
// }
