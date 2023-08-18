Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Kaled')
    cy.get('#lastName').type('Ferreira')
    cy.get('#email').type('kaled@exemplo.com')
    cy.get('#open-text-area').type('Test')
    cy.contains('button','Enviar').click()
})