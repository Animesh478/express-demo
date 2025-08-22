const { sendErrorResponse } = require("../utils/response");

const getCart = (req, res) => {
  const userId = req.params.userId * 1;
  if (userId > 10) {
    return sendErrorResponse(res, {
      statusCode: 404,
      message: "Cart not found",
    });
  }
  res.send(`Fetching cart for user with ID: ${userId}`);
};

const postCart = (req, res) => {
  const userId = req.params.userId * 1;
  res.send(`Adding product to cart for user with ID: ${userId}`);
};

module.exports = {
  getCart,
  postCart,
};
