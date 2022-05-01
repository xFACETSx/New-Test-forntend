it('home page customer', () => {
      cy.visit('/') // change URL to match your dev URL
      cy.get('#navbar').click(380, 33) //Homepage in navbar
            .wait(1000)
      cy.get('#navbar').click(480, 33) //Menupage in navbar
            .wait(1000)
      cy.get('#navbar').click(590, 33) //AboutUspage in navbar
            .wait(1000)
      cy.get('#navbar').click(695, 33) //Gallerypage in navbar
            .wait(1000)
      cy.get('#navbar').click(820, 33) //Cart in navbar
            .wait(1000)
      cy.get('#navbar').click(920, 33) //Login in navbar
 })
