// When you are declaring a variable as var, that variable can be used before the declaration 
// & the variable value is undefined
console.log('Before Declaration');
console.log(age);
console.log('After Declaration');
var age = 10;
console.log(age);
// You can reassign the values for the var variables.
age = 15;
console.log('After reassigning');
console.log(age);
{
    var a =10
}
console.log(a)
// When we declare a variable var variable inside a block, it can be accessed outside the var variable 
// outside the block 
// console.log(name)
