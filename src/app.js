const { isProduction } = require('./utils/environment')

const swaggerOption = require('./config/index')

const fn = require('fastify-plugin')
const fastify = require('fastify')({
  logger: {
    level: isProduction ? 'info' : 'debug'
  }
})

fastify
  .register(require('fastify-swagger'), swaggerOption)
  .register(require('fastify-helmet'), { contentSecurityPolicy: false })
  .register(require('fastify-mongoose'), {
    uri: process.env.MONGODB_URI
  }, err => {
    if (err) throw err
  })
  .register(require('./models/index').initialize)
  .register(fn(require('./services/index')))
  .register(require('./routes/index'), { prefix: '/api/v1' })

module.exports = fastify
