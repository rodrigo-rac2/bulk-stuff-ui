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
        // cy.get('[data-kendo-menu-index="2"] > .k-link').click()
        cy.contains('Sales').click()
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
    it('Uploads 121-140 orders', () => {
        for (let i = 121; i <= 140; i++) {
            uploadOrder(i);
        }
    })
    it('Uploads 141-160 orders', () => {
        for (let i = 141; i <= 160; i++) {
            uploadOrder(i);
        }
    })
    it('Uploads 161-180 orders', () => {
        for (let i = 163; i <= 180; i++) {
            uploadOrder(i);
        }
    })
    it('Uploads 181-200 orders', () => {
        for (let i = 181; i <= 200; i++) {
            uploadOrder(i);
        }
    })
    it('Uploads 201-220 orders', () => {
        for (let i = 201; i <= 220; i++) {
            uploadOrder(i);
        }
    })
    it('Uploads 221-240 orders', () => {
        for (let i = 221; i <= 240; i++) {
            uploadOrder(i);
        }
    })
    it('Uploads 241-260 orders', () => {
        for (let i = 241; i <= 260; i++) {
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
    cy.get('input[placeholder*="e.g. December 2020"]').type(`${dateString} - 5000 Item Multiple Orders ${i}`)
    cy.get('input[type="file"]').selectFile(Cypress.env('ORDERS-FILE'), {force: true})
    cy.get('#confirm-order-update').click()
}