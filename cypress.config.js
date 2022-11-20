const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://helloacm.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
