describe("Test navigation through header links", () => {
  it("visits the about page", () => {
    cy.visit("/");

    cy.get("[data-testid='about-link']").click();
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/about`);
  });

  it("visits the home page", () => {
    cy.get("[data-testid='home-link']").click();
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);
  });
});

export {};
