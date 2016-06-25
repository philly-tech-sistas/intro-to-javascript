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
