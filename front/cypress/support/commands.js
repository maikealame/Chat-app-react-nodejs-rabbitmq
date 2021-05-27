Cypress.Commands.add('loginWith', ({ email, password }) =>
    cy.visit('/')
        .get('#email')
        .type(email)
        .get('#password')
        .type(password)
        .get('#submit-btn')
        .click()
)

Cypress.Commands.add('registerWith', ({username, email, password, cpassword }) =>
    cy.visit('/signup')
        .get('#username')
        .type(username)
        .get('#email')
        .type(email)
        .get('#password')
        .type(password)
        .get('#rep-password')
        .type(cpassword)
        .get('#submit-btn')
        .click()
)