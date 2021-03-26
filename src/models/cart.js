const { Schema } = require('mongoose')
const Product = require('./product')

const Cart = new Schema({
  userSessionId: String,
  status: {
    type: String,
    default: 'Active'
  },
  quantity: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    default: 0
  },
  products: [Product],
  created: { type: Date, default: Date.now }
})

module.exports = Cart
