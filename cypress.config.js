const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    setupNodeEvents,
    baseUrl: 'https://www.oysho.com/',
  },
});
