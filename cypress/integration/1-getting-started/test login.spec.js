it('home page customer', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.get('#navbar').click(920, 33) //Login in navbar
    cy.get('.ant-tabs-nav-list').click('right')
        .get('#firstname').type('John')
        .get('#lastname').type('Cena').blur()
        .get('#phone-no').type('0817293384')
});
