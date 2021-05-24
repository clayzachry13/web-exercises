
// javascript function that searches for a matching result to alert the user
// with a prepared response through if and else statements.
function colorChecker(x) {
    if (x == "blue"){
    
        alert("blue is the color of the sky");

    }
    else if (x == "green") {
        alert("green is the color of the grass");
    }
    else if (x == "yellow") {
        alert("yellow is the color of lemons");
    }
    else {
        alert(x + " that color is unlucky!");
    }
}

//Here I alert the user for a respone
var color = prompt("what color do you like");

//Then I pass that response into the function i made on line 4-18
colorChecker(color);
// var colors makes an array of strings
//var randomColor randomize the colors variable
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(colors);
console.log(randomColor);

colorChecker(randomColor);

var userinput = confirm("would you like to enter a number");

if(userinput === true){
      var userNumber =  prompt("pick a number.");
    } 
    else if(userinput === false){
      alert("have a great day!");
    };






//if(userNumber ==  )


var numbers = [1 , 2  , 3 , 4 , 5 ];
var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
var bill = prompt("what is your bill total?");
function discount(x,bill) {
    x * 100 / 100 - bill
    
}

console.log(discount);

discount(15)

.console.log(discount);

var billTotal = discount;