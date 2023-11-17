// Creating array using literal
let cars = ['Alto','Celerio','WagonR','Swift','DZire','Breeza'];
console.log(typeof(cars))
console.log(cars)

// Using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers)

// Getting one entity out of array
let firstCar = cars[0]; // 'apple'
let secondNumber = numbers[1]; // 2

console.log(firstCar);
console.log(secondNumber)

// Modifing 2nd element in the cars
cars[1] = 'Ciaz';
console.log(cars)

// Add element to the last in the array
cars.push('Jimny');
console.log(cars)

// Remove the last element from the array -> returns the last element
let lastCar = cars.pop();
console.log(lastCar)
console.log(cars)

// Add element to the first of the array
cars.unshift('Ertiga');
console.log(cars)

// Remove the first element in thr array -> return the first element
let first_Car = cars.shift();
console.log(first_Car)
console.log(cars)

// Add, remove, replace any item in any index
cars.splice(1,2,'Tiago','Tigor')
console.log(cars)

// Create a new sub-array with a given indexes 1-5 -> 1,2,3,4 only separated as a sub array
let favCars = cars.slice(1,5);
console.log(favCars)

// Creating a new array out of two arrays merging
let sedens = ['Amaze','Ciaz','City','Tigor'];
let suv = ['Thar', 'Bolero','XUV 300','Nexon'];
let desires = sedens.concat(suv);
console.log(desires)

// Getting the index of element in the array
let car = desires.indexOf('Thar')
console.log(car)