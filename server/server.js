// server/server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, '../dist')));

// API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Catch-all to serve the Vue app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});