const { PRODUCT } = require('../models')

class ProductService {
  constructor (fastify) {
    this.Product = fastify.mongo.db.model(PRODUCT)
  }

  save (product) {
    return this.Product.create(product)
  }

  getAll () {
    return this.Product.find({})
  }
}
module.exports = ProductService
