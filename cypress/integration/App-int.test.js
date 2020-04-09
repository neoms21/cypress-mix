/// <reference types="cypress" />


context('Booking flow', () => {
  beforeEach(() => {
    cy.visit(
      'http://localhost:3000/'
    );
  });

  it('render booking flow at desktop size', () => {
    // should('be.visible');

    //expect the seleted date visible as label
    cy.findByText("To test with cypress").should('exist');
   
  });
});