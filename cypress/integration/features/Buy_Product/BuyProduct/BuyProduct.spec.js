And ('The user clicks on el menú {string}', function(menu){
    cy.get(this.BuyProduct.storeMenu).contains(menu).click()
})
And ('The user selects the option {string}', function(option){
    cy.get(this.BuyProduct.categories).contains(option).click({force:true})
})
And ('The user select {string} units', function(cantidad){
    cy.get(this.BuyProduct.increaseBtn).click()
})
And ('The user select {string}', function(){
    cy.wait(2000)
    cy.get(this.BuyProduct.proceedBth).click()  
})
Then ('The modal is displayed {string}', function(title){
    cy.get(this.BuyProduct.modal).contains(title).should('be.visible')
})
And ('The user accepts the terms and conditions', function(){
    cy.get(this.BuyProduct.chekHidden).should('be.hidden').invoke('show').should('be.visible')
    cy.get(this.BuyProduct.chekTerms).click({ force: true })
})
And ('The user selects the mode of delivery {string}', function(){
    cy.get(this.BuyProduct.checkPay).click({ force: true })
})