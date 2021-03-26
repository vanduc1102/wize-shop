const { ORDER } = require('../models')

class OrderService {
  constructor (fastify) {
    this.Order = fastify.mongo.db.model(ORDER)
  }

  save (product) {
    return this.Order.create(product)
  }

  getAll () {
    return this.Order.find({})
  }
}
module.exports = OrderService
