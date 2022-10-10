describe("Test to search for a character and a location", () => {
  const nameCharacter = "Chihiro Ogino";
  const nameLocation = "The Cat Kingdom";
  const titleMovie = "The Cat Returns";

  it("search for a character using the search bar on the homepage", () => {
    cy.visit("/");

    cy.get("[data-testid='search-bar-select']").select("people");
    cy.get("[data-testid='search-bar-input']").type("chihiro");
    cy.get("[data-testid='search-bar-button']").click();
  });

  it("checks if the character card is displayed on the search page", () => {
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/search`);
    cy.get("[data-testid='character-title']").should(
      "contain.text",
      nameCharacter
    );
  });

  it("search for a location using the search bar on the search page", () => {
    cy.get("[data-testid='search-bar-select']").select("locations");
    cy.get("[data-testid='search-bar-input']").type(nameLocation);
    cy.get("[data-testid='search-bar-button']").click();
  });

  it("checks if the location card is displayed on the search page", () => {
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/search`);
    cy.get("[data-testid='location-title']").should(
      "contain.text",
      nameLocation
    );
  });

  it("click movie card on location card on search page", () => {
    cy.get("[data-testid='movie-title']").should("contain.text", titleMovie);
    cy.get("[data-testid='movie-title']").click();
  });

  it("check information on movie details page", () => {
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/details`);
    cy.get("[data-testid='movie-title-details']").should(
      "contain.text",
      titleMovie
    );
  });
});

export {};
