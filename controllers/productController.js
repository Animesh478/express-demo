const productService = require("../services/productService");

const getAllProducts = (req, res) => {
  productService.fetchAllProducts(res);
};

const getProductById = (req, res) => {
  productService.fetchProductById(req, res);
};

const addProduct = (req, res) => {
  productService.createProduct(res);
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
};
