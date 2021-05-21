function shout(message) {
    alert(message.toUpperCase() + "!!!")
}

var returnValue = shout("hello there");
console.log(returnValue);

var askQuestion = prompt("type what to shout");

function shouting(x) {
    alert(x + "!!!!");

}

shouting(askQuestion);

function welcomeMe() {
    alert("hi!");
}

welcomeMe("green");

var global = "the world is big";

function talk() {
    alert(global);
    
}

talk();