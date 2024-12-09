//area and perimitter
const prompt= require('prompt-sync')();

var l=parseInt(prompt("Enter The Lenth: "));
var b=parseInt(prompt("Enrer The Breath: "));

area=l*b;
perimitter=2*(l+b);

console.log("The area is: ",area);
console.log("The Perimitter: ",perimitter);
