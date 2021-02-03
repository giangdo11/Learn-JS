/* Placing scripts in external files has some advantages:
    - It separates HTML and code
    - It makes HTML and JavaScript easier to read and maintain
    - Cached JavaScript files can speed up page loads */

/* Remember that JavaScript identifiers (names) must begin with:
    - A letter (A-Z or a-z)
    - A dollar sign ($)
    - Or an underscore (_) 
Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.
Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables. */

function myFunction() {
    document.getElementById("demo").innerHTML = "External JavaScript";
}

var length = 16;                                // Number
var lastName = "Johnson";                       // String
var cars = ["Saab", "Volvo", "BMW"];            // Array
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};   // Object
person = null;    // Now value is null, but type is still an object
person = undefined;   // Now both value and type is undefined
typeof undefined           // undefined
typeof null                // object
null === undefined         // false
null == undefined          // true

typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)
typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (in JavaScript arrays are objects)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"

/* Do Not Declare Strings, Numbers, and Booleans as Objects!
var x = new String();        // Declares x as a String object
var y = new Number();        // Declares y as a Number object
var z = new Boolean();       // Declares z as a Boolean object
Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed. */

