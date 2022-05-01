const { wait } = require("@testing-library/react")

it('home page customer', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.get('#navbar').click(480, 33) //Menupage in navbar
        .wait(1000)
    cy.get('img').last().click()
        .wait(1000)
    //cy.get('#MenuDetailPage_button_1UGMF').click()
    cy.get('.MenuDetailPage_button__1UGMF').click()
    cy.get('.ant-form-item-control-input').first()
    cy.get('.ant-radio-button-wrapper').first().click()
    cy.get('.ant-input-number').clear().type('2')
    cy.get('.ant-input-number').clear().type('2')
    cy.get('#note').type('in front office').blur()
    cy.get('.ant-drawer-wrapper-body').contains('CART').click()
        .wait(1000)

})
