const Joi = require("../../joi");
var options = require("../../joi-options");

const UNIX_TO_STRING_SCHEMA = Joi.dateString(); //custom JOI schema for the date string format of what the endpoint returns

const STRING_TO_UNIX_SCHEMA = Joi.number();

module.exports = {
  UNIX_TO_STRING_SCHEMA,
  STRING_TO_UNIX_SCHEMA,
};
