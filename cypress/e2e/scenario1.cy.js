/// <reference types="cypress" />
var x, y, width, height;
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/');

    cy.findByText('Drag & Drop Sliders').click();

    const getRect = ($el) => $el[0].getBoundingClientRect();

    cy.get("input[value='15']")
      .then(getRect).then((rect) => {
cy.wrap(rect).as('rect');
      });
      cy.viewport(2048, 2048)
     
cy.get('@rect').then((rect) => {
  cy.log(rect)
   cy.get("input[value='15']").realClick({position:'right'});
   for(var i = 0; i<5; i++)
   cy.realPress("{leftarrow}");
})

//None of these below seem to work, if you have the time could you please explain why and provide a solution to how it coud be done?
   // cy.get("[id = 'rangeSuccess']")

    //cy.get("input[value='15']").as('range').invoke('val', 95).trigger('change', {force: true})

  cy.get("input[value='15']").siblings('output').should('have.text', '95');
    // .trigger('mousedown')
    // .trigger('mouseup')
    //   .trigger('mousedown', { which: 0, pageX: x, pageY: y })
    //   .trigger('mousemove', { which: 0, pageX: x+100, pageY: y+100 })
    //   .trigger('mouseup');
  })
})