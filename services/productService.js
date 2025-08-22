const { sendErrorResponse } = require("../utils/response");

const fetchAllProducts = (res) => {
  res.send("Fetching all products");
};

const fetchProductById = (req, res) => {
  const id = req.params.id * 1;
  if (id > 10) {
    return sendErrorResponse(res, {
      statusCode: 404,
      message: "Product not found",
    });
  }
  res.send(`Fetching product with ID: ${id}`);
};

const createProduct = (res) => {
  res.send("Adding a new product");
};

module.exports = {
  fetchAllProducts,
  fetchProductById,
  createProduct,
};
