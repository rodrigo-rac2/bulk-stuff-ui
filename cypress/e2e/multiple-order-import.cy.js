describe('Multiple Order Import', () => {
  it('Uploads 110 orders', () => {
    cy.viewport(1280, 720)
    cy.visit('/')
    cy.get('input[name="username"]').type(Cypress.env('EMAIL'))
    cy.get('.input-group > .btn').click()
    cy.get('#password').type(Cypress.env('PASS'))
    cy.get('.btn').click()
    cy.get('[data-kendo-menu-index="2"] > .k-link').click()
    cy.contains('Manage Orders').click()

    const date = new Date()
    const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    for(let i = 103; i < 110; i++) {
      cy.get('button').contains('Create Order').click()
      cy.get('button').contains('Multiple Order').click()
      // enters the order name in the input with placeholder containing string "e.g. December 2020"
      cy.get('input[placeholder*="e.g. December 2020"]').type(`${dateString} - Multiple Order ${i}`)
      cy.get('input[type="file"]').selectFile(Cypress.env('ORDERS-FILE'), { force: true })
      cy.get('#confirm-order-update').click()
      //cy.wait(4000)
    }
  })
})
