require('dotenv').config({ path: 'w3s-dynamic-storage/.env' });
const express = require("express");
const path = require('path');
const { saveMessage } = require('./db');
const { hasValidRecaptchaToken } = require('./utils');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/message/send', async (req, res) => {
  const rData = await hasValidRecaptchaToken(req.body.token);

  if (rData.valid) {
    const status = await saveMessage(req.body);

    if (status) {
      return res.status(201).send();
    }

    return res.status(400).send({ error: 'Failed to send message' });
  } else {
    res.status(400).send({ error: rData.message });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

if (process.env.NODE_ENV !== 'development') {
  const clientApp = express();
  clientApp.use(express.static('dist'));
  clientApp.use(express.json());

  clientApp.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
  });
  clientApp.listen(3000, () => console.log('client listening on port 3000'));
}


