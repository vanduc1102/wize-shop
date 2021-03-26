const CartService = require('./carts')
const OrderService = require('./orders')
const ProductService = require('./products')

async function servicesIndex (fastify) {
  fastify.decorate('productService', new ProductService(fastify))
  fastify.decorate('orderService', new OrderService(fastify))
  fastify.decorate('cartService', new CartService(fastify))
}

module.exports = servicesIndex
