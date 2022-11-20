module.exports = {
  convert: false,
  abortEarly: false,
  presence: "required",
  context: {
    env: Cypress.config().environment,
  },
};
