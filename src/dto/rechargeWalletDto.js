const Joi = require('joi');

const rechargeWalletSchema = Joi.object({
    document: Joi.string().required(),
    phone: Joi.string().required(),
    amount: Joi.number().required(),
});

function validateRechargeWallet(req, res, next) {
    const { error } = rechargeWalletSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
    next();
}

module.exports = { validateRechargeWallet };
