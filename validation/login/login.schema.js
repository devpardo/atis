const joi = require('@hapi/joi');

const schema = {
  login : joi.object({
    username : joi.string().required(),
    password : joi.string().required()
  }),
  checkToken : joi.object({
    user : joi.number().required(),
    token : joi.string().required(),
  })
}

module.exports = schema;