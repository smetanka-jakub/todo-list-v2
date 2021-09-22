/// <reference types="Cypress" />

describe('Add item to todolist test', () => {
    it('add item', ()=>{
        cy.visit('http://localhost:4200');
        cy.get('[data-cy=newTask]').first().click();
        cy.get('[data-cy=itemTitle]').type('Cypress todoitem');
        cy.get('[data-cy=itemDesc]').type('Cypress description');
        cy.get('[data-cy=itemDate]').type('01/09/2021');
        cy.get('[data-cy=itemSave]').click();
    })
})