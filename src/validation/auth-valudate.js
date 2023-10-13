import Joi from 'joi';

const registerSchema = Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{5,20}$/)
        .trim()
        .required(),
    confirmpassword: Joi.string().valid(Joi.ref("password")).trim().required(),
    mobile: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required(),
    email: Joi.string().email({ tlds: false }).required(),
});


export default registerSchema;
