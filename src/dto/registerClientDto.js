const Joi = require('joi');

const registerClientSchema = Joi.object({
    document: Joi.string().required(),
    names: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().regex(/^\d{10}$/).required()
});

function validateRegisterClient(req, res, next) {
    const { error } = registerClientSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
    }
    next();
}

module.exports = {
    validateRegisterClient
};