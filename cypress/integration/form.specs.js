/// <reference types="Cypress" />
describe('Input and submit form', () => {
    it('can navigate to the site', ()=> {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
    })
    it('submit button is disabled', () => {
        cy.get('.btn-disabled').should('be.disabled')
    })
    it('Add royer order', () => {
        cy.get('input[name="first_name"]').type('Royer')
        cy.get('input[name="last_name"]').type('Adames')
        cy.get('input[name="pepperoni"]').click()
    })
    it('Check royer order', () => {
        cy.get('input[name="first_name"]').should('have.value', 'Royer')
        cy.get('input[name="last_name"]').should('have.value', 'Adames')
        cy.get('input[name="pepperoni"]').should('be.checked')
    })
    it('submit royer order', () => {
        cy.get('button.btn').click()
    })
    // it('Add steve order', () => {
    //     cy.get('input[name="first_name"]').type('steve')
    //     cy.get('input[name="last_name"]').type('jobs')
    //     cy.get('input[name="pepperoni"]').click()
    // })
    // it('Check steve order', () => {
    //     cy.get('input[name="first_name"]').should('have.value', 'steve')
    //     cy.get('input[name="last_name"]').should('have.value', 'jobs')
    //     cy.get('input[name="meatlovers"]').should('be.checked')
    // })

    // it('submit steve order', () => {
    //     cy.get('button.btn').click()
    // })
})
describe('Check for new Order at home', () => {
    it('can navigate to home', ()=> {
        cy.contains('Home').click()
    })

})