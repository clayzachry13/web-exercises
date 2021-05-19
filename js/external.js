console.log("Hello from external javaScript");

alert("This is not a scam!");

var userInput = prompt("what is your favorite color?");

alert(userInput + " that is my favorite color too!");

var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;
var googleHours = prompt("how many hours did you work for google");
var amazonHours = prompt("how many hours did you work for amazon");
var facebookHours = prompt("how many hours did you work for facebook");
alert("google pay $" + googlePay * googleHours);
alert("amazon pay $" +amazonHours * amazonPay);
alert("facebook pay $" +facebookHours * facebookPay);

var userName = 'codeing';
var passWord = 'notastrongpassword';
console.log(passWord);

var passwordChecker = ( userName == passWord );
console.log(passwordChecker);

if(passwordChecker){
    console.log("password failed");
}else{
    console.log("password approved");
}

var passwordLength = passWord.length;
console.log (passwordLength);

var passwordCount = passwordLength <= 20 ;
console.log(passwordCount);

if(passwordCount){
    console.log("password approved");
}else{
    console.log("password failed");
}

var passwordMinimum = passwordLength >= 5 ;

if(passwordMinimum){
    console.log("password approved");
}else{
    console.log("password failed");
}

var whiteSpace =  (passWord.trim());
console.log(whiteSpace);

