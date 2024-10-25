describe('Testing product adding', () => {
    it('Placing order', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('#root > div > header > div > div.search > form > input').click().type('Brocolli')
        cy.get('#root > div > div.products-wrapper > div').should('contain.text', 'Brocolli')
        cy.get('.stepper-input > input').should('have.value', 1)
        cy.get('#root > div > div.products-wrapper > div > div > div.stepper-input > a.increment').click().click()
        cy.get('#root > div > div.products-wrapper > div > div > div.stepper-input > input').should('have.value', 3)
        cy.get('#root > div > div.products-wrapper > div > div > div.product-action > button').click()
        cy.contains('button', 'ADDED').should('be.visible')
        cy.get('#root > div > header > div > div.cart > a.cart-icon > img').click()
        cy.get('#root > div > header > div > div.cart > div.cart-preview.active > div:nth-child(1) > div:nth-child(1) > ul').should('contain.text', 'Brocolli')
        cy.get('#root > div > header > div > div.cart > div.cart-preview.active > div.action-block > button').click()
        cy.get('table').contains('td', 'Brocolli').should('be.visible')
        cy.get('#root > div > div > div > div > div > input').click().type('test')
        cy.get('#root > div > div > div > div > div > button').click()
        cy.contains('Invalid code ..!', { timeout: 7000 }).should('be.visible')
        cy.get('#root > div > div > div > div > button').click()
        cy.get("#root > div > div > div > div > div > select").select('Georgia')
        cy.get("#root > div > div > div > div > input").check({force: true})
        cy.get("#root > div > div > div > div > button").click()
        cy.contains('Thank you, your order has been placed successfully\n' +
            'You\'ll be redirected to Home page shortly!!', { timeout: 8000 }).should('be.visible')g
    })
})