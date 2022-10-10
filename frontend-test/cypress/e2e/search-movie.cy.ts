describe("Test to search for a movie", () => {
  const titleTotoroMovie = "My Neighbor Totoro";

  it("search for a movie using the search bar on the homepage", () => {
    cy.visit("/");

    cy.get("[data-testid='search-bar-select']").select("films");
    cy.get("[data-testid='search-bar-input']").type("totoro");
    cy.get("[data-testid='search-bar-button']").click();
  });

  it("click movie card on search page", () => {
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/search`);
    cy.get("[data-testid='movie-title']").should(
      "contain.text",
      titleTotoroMovie
    );
    cy.get("[data-testid='movie-title']").click();
  });

  it("check information on movie details page", () => {
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/details`);
    cy.get("[data-testid='movie-title-details']").should(
      "contain.text",
      titleTotoroMovie
    );
  });
});

export {};
