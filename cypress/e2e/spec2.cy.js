/// <reference types="cypress" />

it('stores an image in Cypress cloud by overwriting the image', () => {
  cy.visit('index.html')
  cy.get('h1').should('be.visible')
  cy.screenshot('spec2-hello', {
    capture: 'runner',
    overwrite: true,
  })
})
