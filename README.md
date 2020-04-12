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


#### How short-circuit evaluation works


--------------------------------------------
## Module 6
### Utilizing JavaScript Exception Handling

#### try...catch



#### finally



--------------------------------------------
## Module 7
### How to Determine JavaScript Variable Data Types

#### typeof operator

#### instanceof operator

-------------------------------------------
## Module 8
### Understanding "this" in JavaScript

####  Use of this in different scopes


#### Call() and apply() methods


------------------------------------------
## Module 9
### Using the Powerful Spread Operator

#### Manipulating arrays


#### passing arrays to functions



