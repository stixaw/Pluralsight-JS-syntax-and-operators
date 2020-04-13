# Pluralsight-JS-syntax-and-operators
----------------------------------------
## Module 2  Paul Sheriff
### All About the Switch Statement

#### Simplify multiple if else statements
'case' statements compare to each expression in the switch
'break' statements exit out of each case
the 'default' statement is for no match
the default statement can be anywhere

example:
```javascript
switch(expression){
    case expression1:
        statement or statements
    break;

    case expression2:
        statement or statements
    break;

    default:
        statement or statements
    break;
}
```

##### Multiple Case Statments
```javascript
switch (color) {
    case "Red":
    case "Pink":
        console.log("The color is red");
        break;
    case "Blue":
    case "Light Blue":
    case "Dark Blue":
        console.log("The color is blue");
        break;
    case "Gray":
    case "Grey":
        console.log("The color is grey");
        break;
    default:
        console.log("Unknown color");
        break;
}
```


#### Block level scope issue/resolution
```javascript
switch (productId) {
    case 1:
      let message = "HL Road Frame - Black, 58";
      console.log(message);
      break;
    case 2:
      let message = "Sport-100 Helmet, Red";
      console.log(message);
      break;
    case 3:
      let message = "Mountain Bike Socks, M";
      console.log(message);
      break;
    default:
      let message = "Unknown product";
      console.log(message);
      break;
}
// result variable message has already been declared

//The Fix with one case:
    case 1: {
        let message = "HL Road Frame - Black, 58";
        console.log(message);
        break;
    }
```
EACH case statement is NOT a Block to make a case statement a block use {}

------------------------------------------
## Module 3
### The Difference between for/in and for/of

##### For/in Statement Ojects

* Iterates over elements of object (properties and methods)
* Returns key (property/method name)
* object[key] returns value

example:
 ```javascript
    const cars = {
        "Honda": "CR-V",
        "Toyota": "Corolla",
        "Mazda": "RX-3",
        "Ford": "F150"
    }

    for(const key in cars){
        console.log(key + "'=" + product[key])
    }
```

##### For/of statement array, string

* Iterates over values in array, string, etc
* Returns object for each iteration

the 'of' keyword keeps track of which item in the array is currently being accessed

```javascript
// array
    const cars = [
        "CR-V",
        "Corolla",
        "RX-3",
        "F150"
    ]

    for( const item of cars){
        console.log("Item: ", item)
    }

//string
const string = "thermonuclear"
let letters = [];

for(const char of string){
    letters.push(char);
    console.log(letters)
}
```

#### Break, continue and labels

* Break: Leave a loop early
* Continue: Next iteration of a loop

##### break
```javascript
const numbers = [1,4,5,6,11,14]

for(const num of numbers){
    if(num > 6){
        console.log(num)
        break; //breaks out of loop and on to next part of code
    }
    console.log(num)
}
```

##### continue
```javascript
const nums = [20, 25, 30, 40]
for(const num of nums){
    if(num % 10 !== 0){
        console.log(`${num} is does not divide by 10 with no remainder`)
        continue;
    }
    console.log(num)
}
```

##### labeled statement
* Define a location to "goto" similar to batch scripts
* not recommended for use - BAD CODING PRACTISE

------------------------------------------
## Module 4
### Using Math and Comparison Operators

#### Javascript Operators
##### Math
* Addition +
* Subtraction -
* Multiplication *
* Division /
* Exponentiation **
* Modulus %
* Increment ++
* Decrement --

Increment/Decrement makes a difference where you put the ++ or --
when placed after the variable, the current value of the variable is retrieved prior to the increment or decrement
when placed before the variable, the increment is applied before assigning to the variable.

##### Assignment
* Equal =
* Addition +=
* Subtraction -=
* Multiplication *=
* Division /=
* Exponentiation **=
* Modulus %=

##### Comparison
* Lesser than <
* lesser than or equal to <=
* greater than >
* greater than or equal to >=
* Equal in value ==
* Equal in value and type ===
* Not Equal in value !=
* Not Equal in value and type !==
* Ternary: This is like an if else statement 
        result = expression? if expression is true : if expression is false;

example ternary:
```javascript
result = price < 1500 ? "'less than 1500'" : "'greater than 1500'";
```

#### + with strings and numbers
* Plus sign is overloaded
* String Concatentation
* Numbers = Addition

JavaScript looks at both operands and determines their data type prior to applying the plus sign
If one of the operands is a string, then string concatenation is performed

to keep it numeric:
```javascript
const price = 200;
const stringValue = "100";
let result = 0;

result = price + (+stringValue) // the plus sign immediately prior to a string
                                // variable converts that string to a numeric
                                // datatype if possible
```

#### 'use strict' functionality
You should always be using use strict

* Ignored by older browsers
* Force all variables to be declared before they are used
* Mistype variable names are created globally scoped if you are not using strict
* Can't use a variable without 'const' or 'let' keyword
    - result = 10; would throw an error Uncaught ReferenceError: result is not defined.
* can't use reserved words as variables ie let eval or let arguments
* can't delete a variable
* can't delete a function

-------------------------------------------
## Module 5
### Working with logical Operators and short-circuit Evaluation

#### Truthy and Falsy
* Any variable with a value or a Boolean true is true
* Any variable = false, null, undefined, NaN, 0, "" is false

#### Logical Operators
* AND (&&) Operator (both have to be true to proceed)
* OR (||) Operator (one of the options needs to be true to proceed)
* NOT (!) Operator this will negate !price means 0 would be true

#### How short-circuit evaluation works
Short circuiting (&&)
this && that
if this is false then && option is never evaluated

Short circuiting (||)
this || that
All sides are evaluated until one returns a true 
if the first side is true the rest are skipped

#### Order of Precedence
left to right
1. Grouping ()
2. Not (!)
3. Multiplications (*)
4. Division (/)
5. Modulus (%)
6. Addition (+)
7. Subtraction (-)
8. Less than (<)
9. Less than or equal (<=)
10. Greater than (>)
11. Greater than or equal (>=)
12. Equal (=)
13. Not Equal (!=)
14. Strict Equal (===)
15. Strict Not Equal (!==)
16. And (&&)
17. OR (||)
18. Assignment (=)

--------------------------------------------
## Module 6
### Utilizing JavaScript Exception Handling

JavaScript Error object always has a name and message property

#### try...catch

example:
```javascript
function simpleTryCatch() {
      let result;

      try {
        result = x / 10;
      } catch (error) {
        console.log(error.message);
      }
    }
```

#### finally

example:
```javascript
function finallyCatchSample() {
      let result;

      try {
        result = x / 10;
        console.log("This line will never run.");
      } catch (error) {
        console.log("In the 'Catch' block: " + error.message);
      }
      finally {
        console.log("In the 'finally' block");
      }
    }
```

#### custom error
* Can throw your own custom error object
* Create an object with at least two properties: "message" and "name"

```javascript
    function attemptDivision() {
      let result;

      try {
        result = x / 10;
      } catch (error) {
        // Always include at least a 'message' and 'name' properties
        throw {
          "message": "In the attemptDivision() method the following error occurred: " + error.message,
          "name": "CustomError"
        };
      }
    } 
```

#### Builtin Error Types in JavaScript
* Reference Error
* Range Error
* Type Error
* URI Error
* Syntax Error
* EvalError *

--------------------------------------------
## Module 7
### How to Determine JavaScript Variable Data Types

#### Primitive Data types
* Boolean
* null
* undefined
* number
* string

##### Object Data Types
* Array
* Error
* function
* Object
* regex
* new Boolean (object)
* new Number (object)
* new String (object)

Use the primitives boolean, number and string instead of the Objects when possible

#### typeof operator

* Returns the data type of the passed in expression
* A string value is returned such as: 'string', 'number', 'object', etc.

example:
```javascript
let num = 0
let string = 'abc'
let bool = true
let values = [1,2,3,4]
let stats = {
    stat: 100,
    average: 50
}

console.log(typeof num) number
console.log(typeof string) string
console.log(typeof bool) boolean
console.log(typeof values) object
console.log(typeof stats) object
```

#### Object Data Type/Constructor Property
* All object data types inherit from Object (not Primitives)
* Object has constructor property
* Returns a reference to the object itself
* Object literals and primitives are cast to Objects data type first then it can apply the constructor property

```javascript
_products = function Array() { native code}

//helper function
//value.constructor.toString().indexOf("Array") > -1: = true
//looks for Array in the string the constructor returns "function Array()"

function isArray(value) {
    return value.constructor.toString().indexOf("Array") > -1;
    // or use: return value.constructor === Array;
}
```

#### instanceof operator
* tests if an object inherits from the Object data type (not a primitive)
* Tests for a specific type of object or for object itself

```javascript
let name = "Ted"

console.log((name instanceof String))  //returns true 
```


-------------------------------------------
## Module 8
### Understanding "this" in JavaScript

#### What is This
* this keyword refers to an object where the current code is running
* Sometimes the object can be changed

example:
```HTML
<script>
    console.log(this.toString());
    //prints [object Window]
</script>
```

```javascript
person {
    firstName: "John"
    lastName: "Smith"
    fullName: function() {
        const result = `${this.firstName} ${this.lastName}`
        return result
    }
    //this = person object literal
}

let p1 = new Person("John", "Smith"); //this = current person object p1
```

####  Use of this in different scopes
##### this in Global and Function Scope
###### this keyword will have different values based on the excution context
* in a method owner object
* in a function: global Object
* in an event: element that received the event
* call()/apply methods refers to object passed in
* 'use strict' also affects this

##### Global Scope:
code outside of any function will refer to the global object

Example:
```javascript
// Global scope - 'this' is mapped to global/window object
    console.log(this.toString()); // [object Window]
    console.log("this === window = " + (this === window).toString()); //true
```

##### Function scope
```javascript
function functionScope() {      
    console.log(this.toString()); // [object Window]
    console.log("this === window = " + (this === window).toString()); //true
}
```

Example with 'use strict':
```javascript
function functionScope() {      
    console.log(this.toString()); // Uncaught TypeError: Cannot read property 'toString' of undefined
    console.log("this === window = " + (this === window).toString()); //true
}

//if you want to get at the global window object when 'use strict' is in effect use:
// window.toString();
```

##### this in Event Handler
* this in the context of an event handler always refers to the HTMLELement to which it is attached

example:
```javascript
    // Pass 'this' to function from event handler is passed as ctl variable
function eventHandler(ctl) {
    console.log(ctl.toString()); //[object HTMLButtonElement]
}
```

##### this in Object Literal
example:
```javascript
function objectLiteral() {
    let product = {
    "productID": 680,
    "name": "HL Road Frame - Black, 58",
    "standardCost": 1059.31,
    "listPrice": 1431.50,
    grossProfit: function () {  
        console.log(this.toString()); // [object Object]
        return (this.listPrice - this.standardCost)
        .toLocaleString('en-US', {
            style: 'currency', currency: 'USD'
        });
    }
    };
    console.log(product.grossProfit());
}
```

#### Call() and apply() methods
example:
```javascript    
function callAndApply() {
    let product = {
    "productID": 680,
    "name": "HL Road Frame - Black, 58",
    "standardCost": 1059.31,
    "listPrice": 1431.50,
    grossProfit: function () {
        console.log(this.toString()); // [object Object]
        return (this.listPrice - this.standardCost)
        .toLocaleString("en-US", {
            "style": "currency", "currency": "USD"
        });
    }
    };

    let prod2 = {
    "standardCost": 500,
    "listPrice": 850
    }
    // Call using reference to 'product' properties
    console.log(product.grossProfit.call(product)); // this will refer to product
    // Call using reference to 'prod2' properties // this will refer to prod2
    console.log(product.grossProfit.call(prod2));
    console.log("");
    console.log(product.grossProfit.apply(product)); // this will refer to product
    console.log(product.grossProfit.apply(prod2)); // this will refer to prod2
}
```
        
#### Constructor Functions

example:
```javascript
function Product(id, name, cost, price) {
      this.productID = id;
      this.name = name;
      this.standardCost = cost;
      this.listPrice = price;

      this.grossProfit = function () {
        return (this.listPrice - this.standardCost) //[object Object]
            .toLocaleString("en-US", {
              "style": "currency", "currency": "USD"
            });
      }
    }
```

------------------------------------------
## Module 9
### Using the Powerful Spread Operator
The Spread operator
* Expand any 'iterable' such as a string or array into an array
* For passing multiple arguments to methods
* The syntax uses the ellipsis symbol
* Always on the right-side of an equal sign
* Note IE and Edge do not support the spread operator
* can make code harder to read

#### convert a string to an array
```javascript
let productNumber = "FR-R92B-58"
let values = [...productNumber] // the spread operator iterates over the string and creates a single character out of each character in the string and puts it in the values array
console.log(values) // ["F", "R", "-", "R", "9", "2", "B", "-", "5", "8"]
```

#### copy/concatenate arrays
example:
```javascript
let arr = [1, 2, 3];      
let arr2 = [...arr];
console.log(arr2) //[1, 2, 3]
```

##### Copy an array of Objects
example:
```javascript
// Careful with object arrays the copy is just the pointer to the original array of objects, objects are copied by reference

// The array is copied, but the underlying objects are still accessed by reference
let diff = [..._products];
diff[0].productID = 999; //this change will be made to the original array and diff
```

##### Concatenate array
```javascript
let spProducts = [..._products, ..._newProducts];
console.log(spProducts.length);
console.log(spProducts) 
/* 0: {productID: 680, name: "HL Road Frame - Black, 58", productNumber: "FR-R92B-58", color: "Black", standardCost: 1059.31, …}
1: {productID: 707, name: "Sport-100 Helmet, Red", productNumber: "HL-U509-R", color: "Red", standardCost: 13.08, …}
2: {productID: 709, name: "Mountain Bike Socks, M", productNumber: "SO-B909-M", color: "White", standardCost: 3.3963, …}
3: {productID: 712, name: "AWC Logo Cap", productNumber: "CA-1098", color: "Multi", standardCost: 6.9223, …}
4: {productID: 821, 
*/
```

#### Pass to constructors

example:
```javascript
let dateFields = [2019, 11, 15];  // 15 Dec 2019
dt = new Date(...dateFields);
console.log(dt);  //Sun Dec 15 2019 00:00:00 GMT-0700 (Mountain Standard Time)
```

#### Call function with multiple parameters

example:
```javascript
let args = [1, 2, 3];
multipleParams(...args);

function multipleParams(arg1, arg2, arg3) {
    console.log(arg1); //1
    console.log(arg2); //2
    console.log(arg3); //3
}
```

#### Shallow copy objects

example:
```javascript

let product = {
productID: 680,
name: "HL Road Frame - Black, 58",
standardCost: 1059.31,
listPrice: 1431.50
};

// The following performs a shallow-copy
// Similar to Object.assign()
let prod2 = { ...product };

prod2.productID = 999;
console.log(prod2) // exact duplicate of product except the productId

console.log(product.productID) // 680
console.log(prod2.productID) // 999





