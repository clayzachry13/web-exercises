var i = 0;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}for (var i = 0; i < 10; i++) {
    console.log('for loop iteration #' + i);
}


function multi(x) {
    for (var i = 1; i <= 10; i++)
    console.log(x + "X" + i + "=" + (i * x));
    
}

console.log(multi(2));