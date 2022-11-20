const Joi = require("joi");

module.exports = Joi.extend((Joi) => ({
  base: Joi.string().pattern(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/), // checks if correct date string is returned
  type: "dateString",
  messages: {
    "string.pattern.base": "{{#label}} must be a valid date string",
  },
}));
