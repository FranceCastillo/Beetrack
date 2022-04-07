@Registration @CreateWhishlist
Feature: Whishlist creation with registered user 

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
    
    Scenario: Product search

        And The user clicks on "Back to Store"
        Then The home page is displayed
        And The user enter "Tomatoes" in the search field
        And The user clicks on the product "Tomatoes"
        Then The product detail is shown
        And The user clicks on "Add To Wishlist"
        Then The product is updated to "Remove From Wishlist"
        And The user clicks on "Remove From Wishlist"
