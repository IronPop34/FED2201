// // JavaScript Fundamentals

// Variable Declaration, Data Types
var name = "Samuel";
var nullValue = null;

// Strings
var aString = "A string of characters";
// Numbers
var aNumber = 5;
// Booleans
var aBooleans = true;


// Collection of data
//Arrays
var anArray = [ false, 1, "2", 3];
//Objects
var anObject = {
    //key-value pairs
    //properties
    number: 1,
    string: "something",
    //methods
    aMethod() {
        console.log("This object holds a string with the phrase " + this.string);
    }
};

//Functions
function myFunc() {
    console.log(aBoolean);
};

// Functions with Parameters
function myParamFunc (arr) {

    //For Loop
    for(let index = 0; index <arr.lenght; index++) {
        // Pseudocode: I want the phrase to be "The array at the index of ## is of type [data types of the index's value] with a value of [whatever that index's value is]]""
        console.log ("The array at the index of " + index + " is of type: " + typeof anArray[index]);
    }

    return arr
};

// // IIFEs: Immediately Invoked Function Expressions
// (function ()) {
    var name = "Samuel";
    var nullValue = null;

    var aString = "A string of characters";
    var aNumber = 5;
    var aBooleans = true;

    var anArray = [ false, 1, "2", 3];

    var anObject = {
        number: 1,
        string: "something",
        aMethod() {
            console.log("This object holds a string with the phrase " + this.string);
        }
    };

    function myFunc() {
        "use strict"
        // console.log(aBoolean);
        var x = 0;
        return x;
    };

    function myParamFunc (arr) {

        for(let index = 0; index <arr.leng; index++) {
            console.log ("The array at the index of " + index + " is of type: " + typeof anArray[index]);
        }

        return arr
    } 
    
    console.log("IIFE is now running!")
//})();

