
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

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(colors);
console.log(randomColor);
