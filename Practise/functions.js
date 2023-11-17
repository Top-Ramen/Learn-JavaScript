// Exercise 1
var a = 10
var b = 7
add()
function add(){
    console.log(a+b)
}
console.log('--------------------------------------------------------------------------------------------------')
// Exercise 2
var factor = 'Kamal'
var fplayer = 'Dhoni'
var fmovie = 'Anbe Sivam'
favourite()
function favourite(){
    console.log('Favourite Actor: '+factor)
    console.log('Favourite Player: '+fplayer)
    console.log('Favourite Movie: '+fmovie)
}
console.log('--------------------------------------------------------------------------------------------------')
// Exercise 3
area(5,7)
function area(length, breadth){
    console.log('Area of the Square: '+(length*breadth))
}
console.log('--------------------------------------------------------------------------------------------------')
// Exercise 4
var result = sum(5,18)
console.log('The sum of two numbers: '+result)
function sum(number1, number2){
    return number1+number2
}