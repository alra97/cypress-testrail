// cypress/support/e2e.js

// This is where you can import commands.js or other support files
import './commands'

// Any global configurations or behaviors that modify Cypress can go here

// Example: A global beforeEach hook
beforeEach(() => {
  cy.log('Running before each test')
})
