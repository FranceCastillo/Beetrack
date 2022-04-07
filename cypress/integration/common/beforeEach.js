import { Before } from 'cypress-cucumber-preprocessor/steps';

Before({ tags: "@Registration"}, function (){
    cy.fixture('Registration').then(function(Registration) {this.Registration = Registration;})
})
Before({ tags: "@CreateWhishlist"}, function (){
    cy.fixture('CreateWhishlist').then(function(CreateWhishlist) {this.CreateWhishlist = CreateWhishlist;})
})
Before({ tags: "@BuyProduct"}, function (){
    cy.fixture('BuyProduct').then(function(BuyProduct) {this.BuyProduct = BuyProduct;})
})