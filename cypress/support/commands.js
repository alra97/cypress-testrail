// cypress/support/commands.js

// Example: Custom command to log in
Cypress.Commands.add('login', (email, password) => {
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
  })
  
  // Example: Custom command to log out
  Cypress.Commands.add('logout', () => {
    cy.get('button.logout').click()
  })
  
  // If no commands are needed, include an empty export
  export {}
  