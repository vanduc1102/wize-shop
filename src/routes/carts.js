function cartRoute (fastify, opts, next) {
  fastify.get('/', async (req, reply) => {
    const carts = await fastify.cartService.getAll()
    reply.send({
      data: carts
    })
  })

  fastify.post('/', async (req, reply) => {
    const cart = req.body

    const createdCart = await fastify.cartService.save(
      cart
    )
    reply.send({
      data: createdCart
    })
  })
  next()
}

module.exports = cartRoute
