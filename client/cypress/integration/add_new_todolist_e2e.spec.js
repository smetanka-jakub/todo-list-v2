/// <reference types="Cypress" />

describe('Add todolist test', () => {
    it('add todolist', ()=>{
        cy.visit('http://localhost:4200');
        cy.get('[data-cy=newList]').click();
        cy.get('[data-cy=title]').type('Cypress todolist');
        cy.get('[data-cy=save]').click();
    })
})