 Feature: The automation practice Create an Account page

  Scenario Outline: As a user, I can create an user

   Given I am on the Create an Account page by providing email <emailId>
    When Mandatory required fields <Title> <Fname> <Lname> <email> <Pwd> <Add_FName> <Add_LName> <Address> <City> <State> <ZipCode> <MobilePhone> <AliasAddress> is entered and Register button is clicked

     Examples:
       | emailId          | Title |  Fname | Lname  | email           | Pwd      | Add_FName | Add_LName | Address     | City        |  State        |ZipCode | MobilePhone | AliasAddress|
       | abcd2@abcd2.com  | Mr    |  John  | Miller | abcd2@abcd2.com | Test@123 | John      | Miller    | OldStreet   | LosAngeles  |  California   |12345   | 9876543210  | ParkRoad   |

    

    