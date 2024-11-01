class LoginPage {
    elements = {
        usernameField: '#loginusername',
        passwordField: '#loginpassword',
        loginButton: '#logInModal .modal-footer .btn-primary',
        GalaxyS6Button: '#tbodyid > div:nth-child(1) > div > div > h4 > a',
        AddToCartButton: '#tbodyid > div.row > div > a',
        CartButton: '#cartur'
    }

    open(){
        cy.visit('https://demoblaze.com/index.html')
    }

    typeText(selector, text){
        cy.get(selector).type(text)
    }

    clickButton(selector){
      cy.get(selector).click()
    }

    clickGalaxyS6Button(selector){
        cy.get(selector).click()
    }

    clickAddToCartButton(selector){
        cy.get(selector).click()
    }

    clickCartButton(selector){
        cy.get(selector).click()
    }



    login(prom, code) {
        cy.get('#login2').click()
        this.typeText(this.elements.usernameField,prom)
        cy.wait(4000)
        this.typeText(this.elements.passwordField,code)
        cy.wait(3000)
        this.clickButton(this.elements.loginButton)
    }

    assertSuccessfulLogin(){
        cy.contains('Welcome prom').should('be.visible')
        cy.get('#logout2').should('be.visible')
        cy.get('#logInModal > div > div').should('not.be.visible')
    }

   addingToCart(){
        this.clickGalaxyS6Button(this.elements.GalaxyS6Button)
        this.clickAddToCartButton(this.elements.AddToCartButton)
    }

    assertAlertOpens(){
        cy.on('window:alert', (str) =>
            expect(str).to.equal('Product added.'))
    }

    assertProductPresent(){
        this.clickCartButton(this.elements.CartButton)
        cy.contains('Samsung galaxy s6').should('be.visible')
    }
}

export default LoginPage
