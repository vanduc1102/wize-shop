const { CART } = require('../models')

class CartService {
  constructor (fastify) {
    this.Cart = fastify.mongo.db.model(CART)
  }

  save (product) {
    return this.Cart.create(product)
  }

  getAll () {
    return this.Cart.find({})
  }
}
module.exports = CartService
