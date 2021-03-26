module.exports = function (fastify, opts, next) {
  fastify.register(require('./carts'), { prefix: '/carts' })
  fastify.register(require('./products'), { prefix: '/products' })
  fastify.register(require('./orders'), { prefix: '/orders' })
  next()
}
