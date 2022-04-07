@Registration
Feature: Registration

    Scenario: Enter email and password

        Given The user enters Organic Challenge
        And The home page is displayed
        And The user clicks on "Sign In"
        And The user see the form "Login or Register"
        And The user enter the field "email", "beetrack_test@mailinator.com"
        And The user activates the checkbox "register","Create an account"
        And The user enter the field "contraseña", "37Kz0071" para "Create"
        And The user clicks on el botón "Continue"
        
    Scenario: Complete the form

        And The user enter the field "Fist Name", "Maria"
        And The user enter the field "Last Name", "Perez"
        And The user enter the field "Address Line 1", "Segunda Avenida 2220"
        And The user enter the field "City Town", "Santiago"
        And The user enter the field "County", "Chile"
        And The user enter the field "Post/Zip Code", "1235"
        And The user enter the field "Telephone", "98567845"
        And The user clicks on el botón "Register"
        Then The Account view is displayed and the user should see the message "Welcome to your account. Use the menu below to navigate around your account, view your orders, update your address or send us a message"





