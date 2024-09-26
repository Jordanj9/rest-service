const express = require('express');
const bodyParser = require('body-parser');
const walletController = require('./controllers/walletController');
const { validateRegisterClient } = require('./dto/registerClientDto');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/registerClient', validateRegisterClient, walletController.registerClient);

app.post('/api/checkBalance', walletController.checkBalance);

app.listen(port, () => {
    console.log(`API REST listening on port ${port}`);
});