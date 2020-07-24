/// <reference types="Cypress" />
describe('Input and submit form', () => {
    it('can navigate to the site', ()=> {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
    })
    it('submit button is disabled', () => {
        cy.get('.btn-disabled').should('be.disabled')
    })
    it('Populate all fields', () => {
        cy.get('input[name="first_name"]').type('Royer')
        cy.get('input[name="last_name"]').type('Adames')
        cy.get('input[name="pepperoni"]').click()

    })
   
})