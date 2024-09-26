const Joi = require('joi');

const confirmPaymentSchema = Joi.object({
    session_id: Joi.string().required(),
    token: Joi.string().required(),
});

function validateConfirmPayment(req, res, next) {
    const { error } = confirmPaymentSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
    next();
}

module.exports = {
    validateConfirmPayment,
};