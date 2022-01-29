describe("Search elements", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("search for elements with multiple results", () => {
    cy.fixture("index").then((index) => {
      cy.get(index.searchBox).eq(0).type("puma");
      cy.get(index.searchButton).eq(0).click();
    });
    cy.fixture("searchResult").then((searchResult) => {
      cy.get(searchResult.title).should("contain", "puma");
    });
  });

  it("search for elements with no results", () => {
    cy.fixture("index").then((index) => {
      cy.get(index.searchBox).eq(0).type("qwerty");
      cy.get(index.searchButton).eq(0).click();
    });
    cy.fixture("searchResult").then((searchResult) => {
      cy.get(searchResult.alert).should(
        "contain",
        "No encontramos resultados para la palabra que ingresaste."
      );
    });
  });
});
