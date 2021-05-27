"use strict";

// Created a function that takes a number and console logs
//the multiplication table for  1 through 10

function MultiTable(x) {

    for(var i = 1; i <= 10; i++);
        console.log(x + "X" + i + "=" + (i * x));
    
}

MultiTable(3)

// built a for loop to generate 10 random numbers between 20 and 200
//check outputs if they  are even or odd.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}



for(let i = 0; i <= 10; i++){
    var number = getRandomInt(20, 200);
    
    if (number % 2 === 0) {
        console.log(number + "even");
        
    }else{
        console.log(number + "odd");
    }
    
}

// created a loop that consol.logs a number like 1 then logs 1
// if number is two it logs 22, if number 3 it logs 333  