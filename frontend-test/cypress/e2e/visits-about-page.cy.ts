describe("About page test", () => {
  it("visits the about page", () => {
    cy.visit("/about");
    cy.get("[data-testid='about-title']").should(
      "contain.text",
      "About Studio Ghibli"
    );
  });
});

export {};
