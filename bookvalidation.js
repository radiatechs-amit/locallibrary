const Joi = require("@hapi/joi");

module.exports.bookregistrationValidation = async function (data) {
  const bookDetailsSchema = Joi.object().keys({
    author: Joi.string().required(),
    title: Joi.string().required(),
    isbn: Joi.string().required(),
    release_date: Joi.string().allow('')
  });
  const { error } = Joi.validate(data, bookDetailsSchema);
  if (error) {
    return {
      status: error.isJoi,
      msg:error.details[0].message
  }
    
    } else { 
    return await Joi.validate(data, bookDetailsSchema);
  }
 
};

module.exports.bookupdateValidation = async function (data) {
  const bookupdateSchema = Joi.object().keys({
    id: Joi.number().required(),
    author: Joi.string().required(),
    title: Joi.string().required(),
    isbn: Joi.string().required(),
    release_date: Joi.string().allow('')
  });
  const { error } = Joi.validate(data, bookupdateSchema);
  if (error) {
    return {
      status: error.isJoi,
      msg:error.details[0].message
  }
    
    } else { 
    return await Joi.validate(data, bookupdateSchema);
  }
 
};