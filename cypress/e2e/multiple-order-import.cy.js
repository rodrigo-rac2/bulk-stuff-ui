// Cypress test for multiple order import
describe('Multiple Order Import', () => {
    before(() => {
        cy.viewport(1280, 720)
        cy.visit('/')
    });
    beforeEach(() => {
        cy.visit('/')
        cy.get('input[name="username"]').type(Cypress.env('EMAIL'))
        cy.get('.input-group > .btn').click()
        cy.get('#password').type(Cypress.env('PASS'))
        cy.get('.btn').click()
        cy.get('[data-kendo-menu-index="2"] > .k-link').click()
        cy.contains('Manage Orders').click()
    });
    it('Uploads 1-20 orders', () => {
        for (let i = 1; i <= 20; i++) {
            uploadOrder(i);
        }
    })
    it('Uploads 21-40 orders', () => {
        for (let i = 21; i <= 40; i++) {
            uploadOrder(i);
        }
    })
    it('Uploads 41-60 orders', () => {
        for (let i = 41; i <= 60; i++) {
            uploadOrder(i);
        }
    })
    it('Uploads 61-80 orders', () => {
        for (let i = 61; i <= 80; i++) {
            uploadOrder(i);
        }
    })
    it('Uploads 81-100 orders', () => {
        for (let i = 81; i <= 100; i++) {
            uploadOrder(i);
        }
    })
    it('Uploads 101-120 orders', () => {
        for (let i = 101; i <= 120; i++) {
            uploadOrder(i);
        }
    })
})

function uploadOrder(i) {
    const date = new Date()
    const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    cy.get('button').contains('Create Order').click()
    cy.get('button').contains('Multiple Order').click()
    // enters the order name in the input with placeholder containing string "e.g. December 2020"
    cy.get('input[placeholder*="e.g. December 2020"]').type(`${dateString} - Multiple Order ${i}`)
    cy.get('input[type="file"]').selectFile(Cypress.env('ORDERS-FILE'), {force: true})
    cy.get('#confirm-order-update').click()
}