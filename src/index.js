const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const textRoutes = require('./routes/text.routes');

const app = express();

app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'TextForge API is running'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'TextForge API is running'
  });
});

app.use('/api/text', textRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});