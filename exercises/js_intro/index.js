// Single line comment

/*
multi
line
comment
*/

/*
Exercise 1: Declaring Variables
Declare a variable named firstName using the const keyword, and assign your name as the string value */
const firstName = "Frodo";

// Declare a variable named lastName using the let keyword, and assign your name as the string value
let lastName = "Baggins";

// Declare a variable named age using the var keyword, and assign your age as the number value
var age = 51;

// ASI, or Automatic Semicolon Insertion

/*
Exercise 2: Working with Strings#
Declare a variable named fullName using the let keyword, and assign your firstName plus your lastName as the string value
You will need to use concatenation, combining two string values with the + operator
Ex: "FirstName" + "LastName" // would equal "FirstNameLastName"
Print the value of fullName to the console (to open you browser console in Google Chrome, right-click and press "Inspect" or fn+F12) */
let fullName = firstName + " " + lastName; // "Frodo Baggins"
let templateFullname = `${firstName} ${lastName}`; // "Frodo Baggins"

console.log(fullName);
console.log(templateFullname);

/*
Exercise 3#
Declare a variable named myStory using the let keyword, and assign a string with 3 sentences detailing:
An introduction using your fullName variable.
An introduction using your city variable.
An introduction using your favorite pastime variable.
Be sure to use variables as the above answers (declare and assign variables if you haven't already)
Print the result of myStory to the browser console using console.log() (passing any value into the parentheses to be printed)
Example
let myStory = `Hello! My name is ${fullName}. I live in ${city}. I enjoy ${pastime} and coding!`;
console.log(myStory);
BONUS: Complete step two using a template literal string instead of concatenation
Template strings can include placeholders, ${variableValue}, where you can inject variable values into a string
*/

let myStory; // undefined

let home = "Shire";

let pasttime = "adventuring";

home = "Grey Haven";

myStory = `My name is ${fullName}. I reside at ${home}. I enjoy ${pasttime}.`;

console.log(myStory);
