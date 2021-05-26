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

