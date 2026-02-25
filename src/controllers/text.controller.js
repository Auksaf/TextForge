const { processText } = require('../utils/text.processor');
const sendResponse = require('../utils/response');

exports.processTextController = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return sendResponse(res, 400, 'Text is required');
  }

  const processed = processText(text);

  return sendResponse(res, 200, 'Text processed successfully', {
    original: text,
    processed
  });
};
