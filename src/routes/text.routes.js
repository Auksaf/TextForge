const express = require('express');
const router = express.Router();

const { processTextController } = require('../controllers/text.controller');
const rateLimit = require('../middleware/rate.limit');

router.post('/process', rateLimit, processTextController);

module.exports = router;
