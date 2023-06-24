const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 60000,
    numTestsKeptInMemory: 5,
    experimentalMemoryManagement: true,
    baseUrl: "https://uatconnectenterprise.kehe.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
