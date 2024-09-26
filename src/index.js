const express = require('express');
const bodyParser = require('body-parser');
const walletController = require('./controllers/walletController');
const { validateRegisterClient } = require('./dto/registerClientDto');
const { validateRechargeWallet } = require("./dto/rechargeWalletDto");
const { validatePay } = require("./dto/payDto");
const { validateConfirmPayment } = require("./dto/confirmPaymentDto");
const {validateCheckWallet} = require("./dto/checkWalletDto");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/registerClient', validateRegisterClient, walletController.registerClient);
app.post('/api/rechargeWallet', validateRechargeWallet, walletController.rechargeWallet);
app.post('/api/pay', validatePay, walletController.pay);
app.post('/api/confirmPayment', validateConfirmPayment, walletController.confirmPayment);
app.post('/api/checkBalance', validateCheckWallet, walletController.checkBalance);

app.listen(port, () => {
    console.log(`API REST listening on port ${port}`);
});