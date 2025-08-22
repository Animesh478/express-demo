const { sendErrorResponse } = require("../utils/response");

const getAllUsers = (req, res) => {
  res.send("Fetching all users");
};

const getUserById = (req, res) => {
  const id = req.params.id * 1;
  if (id > 10) {
    return sendErrorResponse(res, {
      statusCode: 404,
      message: "User not found",
    });
  }
  res.send(`Fetching user with ID: ${id}`);
};

const createUser = (req, res) => {
  res.send("Adding a new user");
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
