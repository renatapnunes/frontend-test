describe("Not Found page test", () => {
  it("visits a wrong url", () => {
    cy.visit("/any");
    cy.get("[data-testid='not-found-title']").should(
      "contain.text",
      "Page not found"
    );
  });
});

export {};
