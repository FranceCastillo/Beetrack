And ('The user clicks on the product {string}', function(producto){
    cy.get(this.CreateWhishlist.product).contains(producto).click()
})
And('The user clicks on {string}', function(button){
    if (button == 'Select'){
        cy.get(this.BuyProduct.selectBtn).contains(button).click();
    }
    else if (button == 'Continue to Payment'){
        cy.get(this.BuyProduct.payBtn).click();
    }
    else if (button == 'Complete Order'){
        cy.get(this.BuyProduct.completeBtn).click({ force: true });
    }
    else {
    cy.contains(button).click();
    }
})