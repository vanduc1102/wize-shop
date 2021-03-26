const { Schema } = require('mongoose')
const Product = new Schema({
  sku: String,
  title: String,
  description: String,
  manufactureDetails: {
    modelNumber: Number,
    releaseDate: Date
  },
  shippingDetails: {
    weight: { type: Number, default: 0 },
    width: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
    depth: { type: Number, default: 1 }
  },
  quantity: { type: Number, default: 0 },
  pricing: {
    price: { type: Number, default: 0 }
  },
  created: { type: Date, default: Date.now }
})

module.exports = Product
