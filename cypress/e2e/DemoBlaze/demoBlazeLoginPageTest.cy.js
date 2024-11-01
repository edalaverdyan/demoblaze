import LoginPage from "../../PageObjects/loginPage";
describe('Test', ()=> {
    it('Testing login', () => {
        cy.visit('https://demoblaze.com/index.html');
        //create instance for class
        const loginPage = new LoginPage()

        loginPage.open()
        loginPage.login('prom', 'code')
        loginPage.assertSuccessfulLogin()
        loginPage.addingToCart()
        loginPage.assertAlertOpens()
        loginPage.assertProductPresent()

    });
})