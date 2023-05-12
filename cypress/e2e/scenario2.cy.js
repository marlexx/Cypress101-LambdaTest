/// <reference types="cypress" />
import {faker} from '@faker-js/faker'
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.viewport('samsung-note9');

    cy.findByText('Input Form Submit').click();

    //cy.injectAxe();
    //cy.checkA11y();

    cy.get('#name').type(faker.person.firstName());
    cy.get('#inputEmail4').type(faker.internet.email());
    cy.get('#inputPassword4').type(faker.string.alphanumeric(10));
    cy.get('#company').type(faker.person.lastName());
    cy.get('#websitename').type('www.' + faker.string.alpha(8)+'.com');
    cy.get(':nth-child(3) > .pr-20 > .w-full').select(faker.number.int({min: 2, max: 10}));
    cy.get('#inputCity').type(faker.location.city());
    cy.get('#inputAddress1').type(faker.location.streetAddress());
    cy.get('#inputAddress2').type(faker.location.secondaryAddress());
    cy.get('#inputState').type(faker.location.state());
    cy.get('#inputZip').type(faker.location.zipCode());

    cy.intercept('POST', 'https://www.facebook.com/tr/').as('submitRequest');

    cy.findByText('Submit').click().then(() =>{
    
    cy.wait('@submitRequest').its('response.statusCode').should('eq', 200);

  });

    cy.findByText('Thanks for contacting us, we will get back to you shortly.').should('exist');

    cy.clearCookies();
    cy.clearLocalStorage();
  })
})