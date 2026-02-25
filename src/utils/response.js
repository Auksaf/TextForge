const sendResponse = (res, statusCode, status, message, data = null) => {
  res.status(statusCode).json({
    status,
    message,
    ...(data && { data })
  });
};

module.exports = sendResponse;
