/// <reference types="cypress" />

describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("/"); // Ersetze dies durch die URL deiner Login-Seite, die URL sollte in cypress.config.ts in die baseUrl eingetragen werden
  });

  it("should login with valid credentials", () => {
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory"); // Überprüfe, ob die URL nach dem Login korrekt ist
  });

  it("should show error for invalid credentials", () => {
    cy.login("locked_out_user", "secret_sauce");
    cy.get(".error-message").should("be.visible"); // Überprüfe, ob eine Fehlermeldung angezeigt wird, Fehlermeldung muss aber noch abgepasst werden
  });
});
