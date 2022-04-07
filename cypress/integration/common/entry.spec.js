Given('The user enters Organic Challenge', function () {
    cy.visit('https://automationstore.onlineweb.shop/');    
})
And('The home page is displayed', function(){
    cy.get(this.Registration.header).find('span').contains("Welcome to")
}) 
And ('The user see the form {string}', function(title) {
    cy.get(this.Registration.title_login).contains(title).should('be.visible')
})
And('The user clicks on el botón {string}', function(button){
    cy.get('.button').contains(button).click();
})
And ('The user activates the checkbox {string},{string}', function(tipo, value){
    cy.get(this.Registration.check).find('#account_login_register_which_'+tipo+'').contains(value).click()
})
And ('The user enter the field {string}, {string}', function(input, value){
    switch (input){
        case "email":
            cy.get(this.Registration.input_email).click().type(value)
            break;
        case "Fist Name":
            cy.get(this.Registration.firstName).scrollIntoView().click().type(value)
            break;
        case "Last Name":
            cy.get(this.Registration.lastName).click().type(value)
            break;
        case "Address Line 1":
            cy.get(this.Registration.addresLine1).click().type(value)
            break;
        case "City Town":
            cy.get(this.Registration.city).click().type(value)
            break;
        case "County":
            cy.get(this.Registration.county).click().type(value)
            break;
        case "Post/Zip Code":
            cy.get(this.Registration.postCode).click().type(value)
            break;
        case "Telephone":
            cy.get(this.Registration.telephone).click().type(value)
    }
})
And ('The user enter the field {string}, {string} para {string}', function(input, value, razón){
    cy.get(this.Registration.input_hidden).should('be.hidden').invoke('show').should('be.visible')
    if(razón=="Create"){
       cy.get(this.Registration.input_password_create).should('be.visible').click().type(value)
    }else{
       cy.get(this.Registration.input_password_login).should('be.visible').click().type(value)
    }
})
Then ('The Account view is displayed and the user should see the message {string}', function(message){ 
    cy.wait(3000)
    cy.get(this.Registration.title_login).contains('Welcome').should('be.visible')
    cy.get(this.Registration.welcome_message).find('p').contains(message)
})