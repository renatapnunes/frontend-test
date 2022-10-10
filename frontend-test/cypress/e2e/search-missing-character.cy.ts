describe("Test to search for a missing character", () => {
  it("search for a character using the search bar on the homepage", () => {
    cy.visit("/");

    cy.get("[data-testid='search-bar-select']").select("people");
    cy.get("[data-testid='search-bar-input']").type("Goku");
    cy.get("[data-testid='search-bar-button']").click();
  });

  it("checks if the character card is not displayed on the search page", () => {
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/search`);
    cy.get("[data-testid='character-title']").should("not.exist");
  });
});

export {};
