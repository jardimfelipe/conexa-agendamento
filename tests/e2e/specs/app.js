// https://docs.cypress.io/api/introduction/api.html

describe('Login page', () => {
  it('Should not login without credentials', () => {
    cy.visit('/login');
    cy.get('#email').type('jardim.felipe@hotmail.com');
    cy.get('#login-button').click();
    cy.location('pathname').should('eq', '/login');
  });
  it('Should login successfully', () => {
    cy.visit('/login');
    cy.get('#email').type('jardim.felipe@hotmail.com');
    cy.get('#password').type('password');
    cy.get('#login-button').click();
    cy.location('pathname').should('eq', '/');
  });
  it('Should create new appointment', () => {
    cy.visit('/login');
    cy.get('#email').type('jardim.felipe@hotmail.com');
    cy.get('#password').type('password');
    cy.get('#login-button').click();
    cy.location('pathname').should('eq', '/');
    cy.get('#new-appointment').click();
    cy.location('pathname').should('eq', '/nova-consulta');
    cy.get('#datetime-picker').click();
    cy.get('.v-date-picker-table--date .v-btn').first().click();
    cy.get('.v-time-picker-clock__item').first().click();
    cy.wait(500);
    cy.get('.v-time-picker-clock__item').first().click();
    cy.get('#submit-date').click();
    cy.get('#pacient').type('Nome do paciente');
    cy.get('#submit-button').click();
    cy.wait(3000);
    cy.location('pathname').should('eq', '/');
  });
});
