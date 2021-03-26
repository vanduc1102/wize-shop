const { Schema } = require('mongoose')
const Product = require('./product')

const Order = new Schema({
  shipping: {
    address: String,
    tracking: {
      company: String,
      trackingNumber: String,
      status: String,
      estimatedDelivery: Date
    }
  },
  payment: {
    method: String,
    transactionId: String
  },
  products: [Product],
  created: { type: Date, default: Date.now }
})

module.exports = Order
