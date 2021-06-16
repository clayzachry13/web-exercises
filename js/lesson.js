var fyi = "error for testing/learning reasons";
alert(fyi);

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

function local() {
    var localvar = "this is local!";
    alert(localvar);
    alert(global);    
}

local();
alert(localvar); //error known and for learning how local variables work within a function.

// this is a test //
