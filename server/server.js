const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the Vue build directory
app.use(express.static(path.join(__dirname, '../dist')));

// Example route
app.use('/api', require('./routes/api'));

// Catch-all to serve the Vue app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});