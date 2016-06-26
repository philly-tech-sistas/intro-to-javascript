// this goes at the bottom of the <body> element
document.write('Hello World! Can you even see this way down here??');

// this will replace the text inside the #headline element
document.getElementById('headline').innerHTML = 'Cat\'s JavaScript!!';

// write a console message
console.log('Hello World! My name is Cat and this is my JavaScript practice page.');

// write an alert
// alert('Hello World!'); // but i hate alerts so i commented it out


var numberOfKittens = 5;
console.log (numberOfKittens);
document.getElementById('headline').innerHTML = numberOfKittens;

var numberOfPuppies = 4;

// add kittens and puppies together
var numberOfAnimals = numberOfKittens + numberOfPuppies;

document.getElementById('headline').innerHTML = numberOfAnimals;

var myFirstName = 'Catherine ';
var myMiddleName = 'Elizabeth ';
var myLastName = 'Farman';
var space = ' ';

var myFullName = myFirstName + space + myMiddleName + ' ' + myLastName;

document.getElementById('headline').innerHTML = myFullName;



// my message will go here:

var job = 'front end dev';
var home = 'mansion';
var city = 'San Francisco';
var hobby = 'surf';

var fortune = 'You will be a ' + job + ' living in a ' + home + ' in ' + city + '. For fun you will ' + hobby + '.';

document.getElementById('welcome-message').innerHTML = fortune;

// 1. add arguments inside the parentheses:
function sayMyName(first, last) {
// 2. use the arguments first and last in my function code
  var fullName = first + ' ' + last;
  console.log(fullName);
}

// 3. call my function - with argument values - in quotes because they are strings
sayMyName('Cat', 'Farman'); // don't forget to call it!


sayMyName('Destiny\'s', 'Child'); // should output "Destiny's Child"
sayMyName('Kelly', 'Rowland'); // should output "Kelly Rowland"
sayMyName('Michelle', 'Williams');
sayMyName('Beyoncé', 'Knowles');


function squareNumber(num) {
    return num*num;
}

var squareResult = squareNumber(20);
console.log(squareResult);


function halfNumber(num) {
    return num/2;
}

var halfNumberResult = halfNumber(10);
console.log(halfNumberResult);

// these are placeholders: finish them using the puzzles page as a guide
function percentOf(num1, num2) {
    var result = num1 / num2 * 100;
    console.log(num1 + " is " + result + "% of " + num2);
    return result;
}

var percentResult = percentOf(2,4);
console.log(percentResult);

function areaOfCircle(radius) {
    // var result = ;
    console.log("The area for a circle with radius 2 is 12.566370614359172.");
    // return result;
}

var temperature = 6;

// is it cold out?
if (temperature < 0) {
    document.getElementById('welcome-message').innerHTML = 
        'just stay inside it is TOO cold';
}
else if (temperature < 30) {
    document.getElementById('welcome-message').innerHTML = 
        'brrrrrr you need a hat and gloves';
}
else if (temperature < 50) {
    document.getElementById('welcome-message').innerHTML = 
        'Put on a coat!';
} else {
    document.getElementById('welcome-message').innerHTML = 
        'Wear whatever you want';
}
