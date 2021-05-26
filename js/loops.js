"use strict";

// Created a function that takes a number and console.logs
//the multiplication table for  1 through 10

function MuliplicationTable(k) {

    for (var i = 0; i < 10; i++) {
        console.log(k + "*" + i + "=" + (i * k));
    }
    
}

console.log(MuliplicationTable(10));
console.log(MuliplicationTable(3));

// built a for loop to generate 10 random numbers between 20 and 200
//check outputs if they  are even or odd.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

for (var i = 0; i < 10; i++){
    var random = getRandomInt(20, 200)
    if (random % 2 === 0) {
        console.log(" even " + random);
        
    }else{
        console.log(" odd " + random);
    }
}

