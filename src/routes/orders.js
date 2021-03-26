function orderRoute (fastify, opts, next) {
  fastify.get('/', async (req, reply) => {
    const orders = await fastify.orderService.getAll()
    reply.send({
      data: orders
    })
  })

  fastify.post('/', async (req, reply) => {
    const order = req.body
    const createdOrder = await fastify.orderService.save(
      order
    )
    reply.send({
      data: createdOrder
    })
  })
  next()
}

module.exports = orderRoute
