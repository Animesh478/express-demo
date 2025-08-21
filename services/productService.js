const fetchAllProducts = (res) => {
  res.send("Fetching all products");
};

const fetchProductById = (req, res) => {
  const id = req.params.id * 1;
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
