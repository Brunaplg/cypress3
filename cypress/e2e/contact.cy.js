///<reference types ="Cypress"/>

describe('contact form', () => {
    it('should submit the form', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-input-message"]').type('some text');
        cy.get('[data-cy="contact-input-name"]').type('Bruna');

        cy.get('[data-cy="contact-btn-submit"]').should('not.have.attr', 'disabled');

        cy.get('[data-cy="contact-input-email"]').type('bruplg@hotmail.com{enter}');
        //cy.screenshot();
        cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');//reuse value using alias .as('alias') and reuse eg.= cy.get('@submitBtn')
        // cy.get('@submitBtn').click();
        //cy.screenshot();
        cy.get('[data-cy="contact-btn-submit"]').contains('Sending...');
        cy.get('[data-cy="contact-btn-submit"]').should('have.attr', 'disabled');
    })
})


describe('contact form', () => {
    it('should submit the form', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-input-message"]').type('some text');
        cy.get('[data-cy="contact-input-name"]').type('Bruna');

        cy.get('[data-cy="contact-btn-submit"]').should('not.have.attr', 'disabled');

        cy.get('[data-cy="contact-input-email"]').type('bruplg@hotmail.com{enter}');

        cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');//reuse value using alias .as('alias')  
        // cy.get('@submitBtn').click();
        cy.get('[data-cy="contact-btn-submit"]').contains('Sending...');
        cy.get('[data-cy="contact-btn-submit"]').should('have.attr', 'disabled');
    })


    it('should validate de the form input', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-btn-submit"]').click();
        cy.get('[data-cy="contact-btn-submit"]').contains('Send Mkessage');


    })
})