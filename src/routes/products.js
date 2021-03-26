function productRoute (fastify, opts, next) {
  fastify.get('/', async (req, reply) => {
    const products = await fastify.productService.getAll()
    reply.send({
      data: products
    })
  })

  fastify.post('/', async (req, reply) => {
    const product = req.body
    const createdProduct = await fastify.productService.save(
      product
    )
    reply.send({
      data: createdProduct
    })
  })

  next()
}

module.exports = productRoute
