module.exports = {
  PRODUCT: 'Product',
  ORDER: 'Order',
  CART: 'Cart',
  initialize
}

function initialize (fastify, opts, next) {
  fastify.mongo.db.model(module.exports.PRODUCT, require('./product'))
  fastify.mongo.db.model(module.exports.ORDER, require('./order'))
  fastify.mongo.db.model(module.exports.CART, require('./cart'))
  next()
}
