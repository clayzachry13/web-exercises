"use strict";

// Created a function that takes a number and console logs
//the multiplication table for  1 through 10

function multi(x) {
    for (var i = 1; i <= 10; i++)
    console.log(x + "X" + i + "=" + (i * x));
    
}

multi(3)




// built a for loop to generate 10 random numbers between 20 and 200
//check outputs if they  are even or odd.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  

  for (var j = 0; j <= 10; j++){
    var numb = getRandomInt(20, 200);
      if (numb % 2 === 0) {
          console.log(numb + "even");
          
      }else{
          console.log(numb + "odd");
      }
  }

// created a loop that consol.logs a number like 1 then logs 1
// if number is two it logs 22, if number 3 it logs 333  

for(var t = 1; t < 10; t++){
    var redovar = "";
    for(var g = 1; g <= t; g++){
    redovar = redovar + t;
}
    console.log(redovar);
}
