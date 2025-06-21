// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS so your API is remotely testable by FCC
app.use(cors({ optionsSuccessStatus: 200 }));

// Serve static files like HTML, CSS
app.use(express.static('public'));

// Serve homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint for /api/whoami
app.get('/api/whoami', (req, res) => {
  const ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress,
    language,
    software
  });
});

// Start server
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
