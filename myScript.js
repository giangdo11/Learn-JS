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

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};
name1 = person.fullName();

/* Common HTML Events
Here is a list of some common HTML events:

Event	        Description
onchange	An HTML element has been changed
onclick	    The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	    The browser has finished loading the page */

NaN - Not a Number

var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000

var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0

var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600

var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23

Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN
Number(new Date("2017-09-30"));    // returns 1506729600000

parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 

parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN

var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
document.getElementById("demo").innerHTML = cars[0];
// the full array can be accessed by referring to the array name:
document.getElementById("demo").innerHTML = cars;

var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

fruits.push("Lemon");    // adds a new element (Lemon) to fruits
fruits[fruits.length] = "Lemon";    // adds a new element (Lemon) to fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Result:
Banana,Orange,Apple,Mango

document.getElementById("demo").innerHTML = fruits.join(" * ");
Result:
Banana * Orange * Apple * Mango

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();              // Removes the last element ("Mango") from fruits
var x = fruits.pop();      // the value of x is "Mango"

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
var x = fruits.push("Kiwi");   //  the value of x is 5

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits
var x = fruits.shift();    // the value of x is "Banana"

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
fruits.unshift("Lemon");    // Returns 5

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
New Array:  Banana,Orange,Lemon,Kiwi,Apple,Mango

fruits.splice(2, 2, "Lemon", "Kiwi");
New Array:  Banana,Orange,Lemon,Kiwi

fruits.splice(0, 1);        // Removes the first element of fruits
New Array:  Orange,Apple,Mango

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3

var arr1 = ["Emil", "Tobias", "Linus"];
var myChildren = arr1.concat("Peter"); 

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
New Array:  Apple,Mango

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
New Array:  Orange,Lemon

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
New Array:  1,5,10,25,40,100

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
New Array:  100,40,25,10,5,1

// Sorting an Array in Random Order
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});

// Find Min/Max
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

// Sorting Object Arrays
var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
cars.sort(function(a, b){return a.year - b.year});

cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});
<p>--------------------------------------------------------------------------------------------</p>
// Array.forEach()
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
txt = txt + value + "<br>";
}

// Callback Function
function sayHello(name, callback) {
	var myName = name.toUpperCase() + ", Hello";
    return callback(myName);
}
 
var result = sayHello("Khoa", function (arg) {
    return arg;
});
 
alert(result);

// Mảng            
var keywords = ["Khoa", "codelearn", "Học lập trình", "codelearn.io"];
​
// Lặp qua từng phần tử và xử lý trong hàm callback
keywords.forEach(function (eachName, index){
    console.log(index + 1 + ". " + eachName);
});

// Callback Function
function doSomething() {
    alert('vào');
}
function something(doCallback) {
    doCallback();
}
something(doSomething);

function showPopup(callback) {
    if (typeof callback !== 'function'){
        alert('Bạn phải truyền vào là một function');
        return false;
    }
    // do something
}

// Object chứa hàm callback
var personInfo = {
    name : 'khoa',
    setName : function(name_para){
        // giá trị này sẽ không có tác dụng với key name trong object này
        // nếu như ta sử dụng nó là một callback function
        this.name = name_para;
    }
};
 
// Hàm có tham số callback
function test(callback, callbackObject){
    var name_para = "Nguyễn Đình Khoa";
    callback.apply(callbackObject, [name_para]);
}
 
// Gọi đến hàm và truyền hàm callback vào
test(personInfo.setName, personInfo);
 
// Kết quả: Nguyễn Đình Khoa
document.write(personInfo.name);
<p>--------------------------------------------------------------------------------------------</p>