/// <reference types="cypress" />

it('stores an image in Cypress cloud', () => {
  cy.visit('index.html')
  cy.get('h1').should('be.visible')
  // let's take an existing image "hello.png"
  // and store it with the recording of this test
  // on Cypress cloud
  cy.readFile('hello.png', 'base64').then((base64) => {
    cy.wrap(Cypress.$(`<img src="data:image/png;base64,${base64}" />`))
  })
})
