/// <reference types="cypress" />

it('stores an image in Cypress cloud by returning path to another png', () => {
  cy.visit('index.html')
  cy.get('h1').should('be.visible')
  cy.screenshot('spec3-hello', {
    capture: 'runner',
    overwrite: true,
    onAfterScreenshot(el, props) {
      // does not work
      // you cannot "point" Cypress at
      // another image in the individual "onAfterScreenshot" callback
      props.path = 'hello.png'
      // also try returning an object with path
      return { path: 'hello.png' }
    },
  })
})
