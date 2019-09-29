/// <reference types="Cypress" />

describe("homepage", () => {
  it(`has h1 'ACTIVITY'`, () => {
    cy.visit("localhost:4200");
    cy.get("h1").should("contain", "test");
  });
});
