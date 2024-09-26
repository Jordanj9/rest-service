const Joi = require('joi');

const paySchema = Joi.object({
    document: Joi.string().required(),
    phone: Joi.string().required(),
    amount: Joi.number().required(),
});

function validatePay(req, res, next) {
    const { error } = paySchema.validate(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
    next();
}

module.exports = { validatePay };