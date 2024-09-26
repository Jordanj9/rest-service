const walletService = require('../services/walletService');

async function registerClient(req, res) {
    const { document, names, email, phone } = req.body;
    try {
        const result = await walletService.registerClient(document, names, email, phone);
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function rechargeWallet(req, res) {
    const { document, phone, amount } = req.body;
    try {
        const result = await walletService.rechargeWallet(document, phone, amount);
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function pay(req, res) {
    const { document, phone, amount } = req.body;
    try {
        const result = await walletService.pay(document, phone, amount);
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function confirmPayment(req, res) {
    const { session_id, token } = req.body;
    try {
        const result = await walletService.confirmPayment(session_id, token);
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function checkBalance(req, res) {
    const { document, phone } = req.body;
    try {
        const result = await walletService.checkBalance(document, phone);
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = {
    registerClient,
    rechargeWallet,
    pay,
    confirmPayment,
    checkBalance,
};
