/// <reference types="cypress" />

import selectors from "../fixtures/appSelectors.json";

class LoginPage {
  usernameField = selectors.loginPageInputField.username;
  passwordField = selectors.loginPageInputField.password;
  loginButton = selectors.loginPageButtons.login;

  enterUsername(username: string) {
    cy.get(this.usernameField).type(username);
  }

  enterPassword(password: string) {
    cy.get(this.passwordField).type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }
}

export const loginPage = new LoginPage();
