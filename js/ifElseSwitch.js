
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

var price = prompt("what is your bill total");
var luckyNumber = Math.floor(Math.random() * 6);
console.log(luckyNumber);
alert("your luck number is " + luckyNumber);
function discount(x) {
    
    if (x == 0 ) {
        return 0;
        
    }else if(x == 1){
        return 10;
    }else if (x == 2){
        return 25;
    }else if(x == 3){
        return 35;
    }else if (x == 3){
        return 50;
    }else if(x == 5) {
        return 100;
    }
    
}

var test = discount(luckyNumber);
console.log(test);
console.log(typeof test);

function discountTotal(x,y) {

    if (x == 0) {
        return x * 100 / 100 - y;
        
    } else if (x == 10) {
        return x * 100 / 100 - y;
        
    }else if (x == 25){
        return x * 100 / 100 - y;
    }else if(x == 35){
        return x * 100 / 100 - y;
    }else if(x == 50){
        return x * 100 / 100 - y;
    }else if(x == 100){
        return x * 100 / 100 - y;
    }
    
}

var big = discountTotal(test);
