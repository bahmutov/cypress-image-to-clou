/// <reference types="cypress" />

it('stores an image in Cypress cloud by returning path', () => {
  cy.visit('index.html')
  cy.get('h1').should('be.visible')
  cy.screenshot('spec2-hello', {
    capture: 'runner',
    overwrite: true,
  })
})
