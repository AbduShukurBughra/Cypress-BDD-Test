const loginElementLocators = require('../PageElements/LoginPageElements.json')

export class LoginPageElements {
          userName(value) {
                    cy.get(loginElementLocators.LoginPageLocators.userName_text).type(value)
                    return
          }

          password(value) {
                    cy.get(loginElementLocators.LoginPageLocators.password_text).type(value)
                    return
          }

          clickLoginButton() {
                    cy.get(loginElementLocators.LoginPageLocators.login_button).click();
                    return
          }

}


