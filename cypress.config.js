const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 60000,
    baseUrl: "https://uatconnectenterprise.kehe.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
