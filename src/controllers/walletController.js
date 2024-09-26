const walletService = require('../services/walletService');

// Controlador para manejar el registro de clientes
async function registerClient(req, res) {
    const { document, names, email, phone } = req.body;
    try {
        const result = await walletService.registerClient(document, names, email, phone);
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// Controlador para consultar el saldo
async function checkBalance(req, res) {
    const { document, phone } = req.body;
    try {
        const result = await walletService.checkBalance(document, phone);
        res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// Exporta los métodos del controlador
module.exports = {
    registerClient,
    checkBalance,
};
