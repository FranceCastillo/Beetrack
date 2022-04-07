

And ('The user enter {string} in the search field', function(itemSeach){
    cy.get(this.CreateWhishlist.form).should('be.hidden').invoke('show').should('be.visible')
    cy.get(this.CreateWhishlist.seachBtn).click()
    cy.get(this.CreateWhishlist.form).should('be.hidden').invoke('show').should('be.visible')
    cy.get(this.CreateWhishlist.inputSearch).click().type(itemSeach)
    cy.get(this.CreateWhishlist.seachBtn).click()
})
Then ('The product detail is shown', function(){
    cy.wait(1000)
    cy.get(this.CreateWhishlist.tabDescription).contains('Description').should('be.visible')
})
Then ('The product is updated to {string}', function(text){
    cy.wait(4000)
    cy.get(this.CreateWhishlist.wishlistRemoved).children().contains(text).should('be.visible')
})