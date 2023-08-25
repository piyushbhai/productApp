const mongoose = require('mongoose');
const Product = require('../schema/product');

const ProductModel = mongoose.model("Product",Product);

module.exports = ProductModel