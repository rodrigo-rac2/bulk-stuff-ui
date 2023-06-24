// Cypress test for multiple order import
const date = new Date()
const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
//fix
describe.skip('Multiple Order Import', { retries: 2 },() => {
    before(() => {
        cy.viewport(1280, 720)
        cy.visit('/')
        cy.get('input[name="username"]').type(Cypress.env('EMAIL'))
        cy.get('.input-group > .btn').click()
        cy.get('#password').type(Cypress.env('PASS'))
        cy.get('.btn').click()
        cy.contains('Sales').click()
        cy.contains('Manage Orders').click()
    });
    for (let i = 1; i <= 250; i++) {
        it(`Uploads order ${i}`, () => {
            cy.get('button').contains('Create Order').click()
            cy.get('button').contains('Multiple Order').click()
            // enters the order name in the input with placeholder containing string "e.g. December 2020"
            cy.get('input[placeholder*="e.g. December 2020"]').type(`${dateString} - Item Multiple Orders ${i}`)
            cy.get('input[type="file"]').selectFile(Cypress.env('ORDERS-FILE'), {force: true})
            cy.get('#confirm-order-update').click()
        })
    }
})