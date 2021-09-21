const joi = require('@hapi/joi');

const schema = {
  createNews : joi.object({
    title : joi.string().required(),
    body : joi.string().required(),
    created_by: joi.number().required()
  }),
  deleteNews : joi.object({
    id : joi.number().required()
  })
}

module.exports = schema;