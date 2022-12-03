// 2: What are the results of these expressions
 console.log("" + 1 + 0) 
 console.log("" - 1 + 0 )
console.log(true + false) 
console.log(6 / "3")
console.log("2" * "3" )
console.log(4 + 5 + "px") 
console.log("$" + 4 + 5 )
console.log("4" - 2 )
console.log("4px" - 2 )
console.log("   -9   " + 5)  
console.log("   -9   " - 5 )
console.log(null + 1) 
console.log(undefined + 1) 
console.log("  \t  \n" - 2) 

// 3: here's code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values)
// Why? Fix it. The result should be 3.

function question() {
    let a = prompt("First Number?", 1);
    let b = prompt("Second Number?", 2);

   alert(a === b); //12
}

// 4: Answer of question 4?

a: 5 > 4 = true
b: "apple" > "pineapple" = false
c: "2" > "12" = true
d: undefined == null =false
e: undefined === null = false
f: null == "\n0\n" = false
g: null === +"\n0\n" = false


    // 5: Will an alert be shown?
    // Hello

    if ("0") {
        alert( 'Hello' );
    }


//  6: Rewrite this if using the conditional operator '?':
answer= over

 function questionFive() {
     let result;
    let a = 5;
    let b = 3;

    if (a + b < 4) {
        result = 'Below';
    } else {
        result = 'Over';
    }

    console.log(result)
 }
 questionFive()


// 7: Write the delay method with arrow function, delay(func,ms)

// 
//     //Write delay arrow function here

   setTimeout(hello = ( ) => console.log('Hello World' ), 300);
//    

// 8: Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// function questionSeven() {
//     //Write isEmpty function here

    function isEmpty(object){
        
    for(let key in object){
        return false
    }
    return true
    }

    let schedule = {};

    console.log(isEmpty(schedule)) // true

    schedule['8:30'] = "get up";

    console.log(isEmpty(schedule)) // true



// questionSeven()
// 9: There's a ladder object that allows you to go up and down

function questionEight() {
    let ladder = {
        step: 0,
        up() {
            this.step++;
            console.log("up")
            return this
        },
        down() {
            this.step--;
            console.log("down")
            return this
        },
        showStep: function() { 
            this.step ;
            console.log("showstep");
            return this
        }
    }; 

    ladder.up().up().down().showStep().down(); // 1
}
questionEight()

// 10: Create New Accumulator
//Create a constructor function Accumulator(startingValue).
//Object that it creates should:

//  1: Store the "current value" in the property value. The starting value
//  is set to the argument of the constructor startingValue
//
//  2: The read() method should use prompt to read a new number and add it to value

//In other words, the value property is the sum of all user-entered
//values with the initial value startingValue

//Here's the demo of the code:

function questionNine() {
    function Accumulator(startingValue){
        this.value=startingValue;
        this.read = function (newvalue){
            this.value += newvalue;
        } 
        this.add  = function(num1 , num2){
            this.sumvalue = num1 + num2 
        }}

    let accumulator = new Accumulator(100); 

var num3 = prompt('Enter new value');

var num1 = prompt('Enter number 1');
var num2 = prompt('Enter number 2');

   accumulator.read(parseInt(num3)); 
    accumulator.add(parseInt(num1),parseInt(num2)); 


    alert("New Value: " + accumulator.value); 
    alert("Sum of 2 numbers: " +accumulator.sumvalue)
}


