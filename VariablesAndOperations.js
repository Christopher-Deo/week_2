//create a variable to hold the quantity of available plane seats left on a flight
let availableSeats = 42;
		
//create a variable to hold the cost of groceries at checkout
let groceryCost = 189.42

//create a variable to hold a person's middle initial
let middleInitial = "A";

//create a variable to hold true if it's hot outside and false if it's cold outside
let itsHotOutside = true;

//create a variable to hold a customer's first name
let firstName = "Chris"

//create a variable to hold a street address
let streetAddress = "123 Main";

//print all variables to the console
console.log(availableSeats);
console.log(groceryCost);
console.log(middleInitial);
console.log(itsHotOutside);
console.log(firstName);



//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availableSeats = availableSeats - 2;
console.log(availableSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
groceryCost = groceryCost + 2.15;
console.log(groceryCost);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "D";
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
itsHotOutside = !itsHotOutside;
console.log(itsHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var lastName = "Deo";
var fullName = firstName +" "+ middleInitial +" "+ lastName;
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable

console.log("Hello, my name is " + firstName + " and I live at " + streetAddress + ".");


