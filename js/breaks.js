'use strict';

var userInput = prompt("please enter a number between 1 and 50");


while (userInput > 50) {

    if (userInput % 2 > 0) {
       var  user = prompt("please enter a number between 1 and 50!!!")
        userInput = user
        console.log("this number is odd" + userInput)
        
    }
    
}