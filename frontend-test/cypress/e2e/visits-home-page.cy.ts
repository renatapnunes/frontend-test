describe("Home page test", () => {
  it("visits the home page", () => {
    cy.visit("/");
    cy.get("[data-testid='home-title']").should("contain.text", "All movies");
  });
});

export {};
