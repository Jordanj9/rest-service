const Joi = require('joi');

const checkWalletSchema = Joi.object({
    document: Joi.string().required(),
    phone: Joi.string().required(),
});

function validateCheckWallet(req, res, next) {
    const { error } = checkWalletSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
    next();
}

module.exports = {
    validateCheckWallet,
};