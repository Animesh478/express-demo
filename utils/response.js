const sendErrorResponse = (res, err) => {
  const statusCode = err.statusCode;
  const message = err.message;

  res.status(statusCode).send({
    success: false,
    message,
  });
};

const sendResponse = (res, data, statusCode) => {};

module.exports = {
  sendErrorResponse,
};
