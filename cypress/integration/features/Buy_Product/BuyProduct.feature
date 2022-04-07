@Registration @CreateWhishlist @BuyProduct
Feature: Buy of product with registered user

    Background: Entry

        Given The user enters Organic Challenge
        And The home page is displayed
        And The user clicks on "Sign In"
        And The user see the form "Login or Register"
        And The user enter the field "email", "beetrack_test@mailinator.com"
        And The user activates the checkbox "login","Login to your account"
        And The user enter the field "contraseña", "37Kz0071" para "Login"
        And The user clicks on el botón "Login"
        Then The Account view is displayed and the user should see the message "Welcome to your account. Use the menu below to navigate around your account, view your orders, update your address or send us a message"
        And The user clicks on "Back to Store"
        Then The home page is displayed
    
    Scenario: Buy of Product

        And The user clicks on el menú "Store"
        And The user selects the option "Organic Vegetables"
        And The user clicks on the product "Lettuce"
        And The user select "2" units
        And The user clicks on "Add to Cart"
        Then The modal is displayed "Product Successfully Added to Cart"
        And The user select "Proceed to checkout"
        And The user clicks on "Checkout"
        And The user clicks on "Select"
        And The user clicks on "Continue to Payment"
        And The user accepts the terms and conditions
        And The user selects the mode of delivery "Pay by Cash on Delivery"
        And The user clicks on "Complete Order"