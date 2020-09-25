# Today's class
​
## Goal
​
Your goal will be to create something similar to the burger application meant for Homework 13 using a No-SQL database
​
## Requirements
​
* Create a web application that allows the user to input a restaurant order that can include multiple items in it.
* When an order is created, the user will input an item for food, drink and dessert and click on a button to "Send order"
* When done, the order (and its items) will display somewhere on the page with a button for "Finish"
* When the user clicks the Finish button, the order will move to another spot in the page and display a "The order is ready!" message
* Lastly, that ready order should now display a button for "Eat this meal!"
​
## Instructions
​
* Set up your express server
* Set up your Mongoose connection
* Create the appropiate model for the orders and the items they can contain
* Set up the routes for the operations that can be done on the order
* Test out the functionality using Postman
* Create the HTML and set up the server to show it from the public folder (no need for handlebars!)
* Set up the necessary api calls from your website in order to perform the operations through the front-end
​
## Tips
​
* Instead of creating a simple burger document, create an Order document that can hold multiple items (like a restaurant order that takes food, drinks, etc.) just like we did in last class (arrays in document), using populate and creating the relation between them
* The food, drinks and dessert items should have their own model or structure