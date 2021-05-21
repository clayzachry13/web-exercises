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

var color = prompt("what color do you like");

colorChecker(color);


