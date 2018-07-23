// add a comment
console.log('Hello World');
// alert('Hello World!');


// comments can go anywhere!! they are for us, the people, not the computer.

var numberOfKittens = 5;
console.log(numberOfKittens);
document.getElementById('headline').innerHTML = numberOfKittens;

var numberOfPuppies = 4;
var numberOfAnimals = numberOfKittens + numberOfPuppies;
document.getElementById('headline').innerHTML = numberOfAnimals;


var myNewCat = 'Francis ';
var myLastName = 'Farman';

var myNewCatsName = myNewCat + myLastName;

document.getElementById('headline').innerHTML = myNewCatsName;


// Store the following into variables: city or place, job title, home, and hobby.
var myCity = 'Houston';
var job = 'circus clown';
var home = 'circus tent';
var hobby = 'knitting';

// Output your fortune to the screen like so: "You will be a _job_ living in a _home_ in _city or place_. For fun you will _hobby_."

document.write('You will be a' + job + 'living in a ' + home + ' in ' + myCity + '. For fun you will ' + hobby + '.');


// function sayMyName(firstName, lastName, elementId) {
//     console.log(fullName);
//     var fullName = firstName + ' ' + lastName;
//     document.getElementById(elementId).innerHTML = fullName;
// }

// sayMyName('Cat', 'Farman', 'headline');
// sayMyName('Francis', 'Farman', 'welcome-message');

function sayMyName(first, last) {
    // this also adds a space between the 2 arguments
    return first + ' ' + last;
}
var name1 = sayMyName('Kelly', 'Rowland');
var name2 = sayMyName('Michelle', 'Williams');

// alert(name1);
document.getElementById('headline').innerHTML = name2;

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num) {
    var result = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + result);
    return result;
}

squareNumber(1);
squareNumber(2);
squareNumber(3);
squareNumber(4);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

function areaOfCircle(radius) {
    var result = Math.PI * radius * radius;
    console.log('The area for a circle with radius ' + radius + ' is ' + result + '.');
    return result;
}

areaOfCircle(10);
areaOfCircle(100);
areaOfCircle(50);
areaOfCircle(2);


var temperature = 81;
var raining = true;

// If it's more than 80 degrees, go to the beach.
if (temperature > 80 && !raining) { // and it's not raining!
    console.log('Go to the beach! Wear sunscreen!');
}
else if (temperature > 80 && raining ) {
    console.log('stay indoors, go to the museum!');
}
// If it's more than 70 degrees, take a walk.
else if (temperature > 70) {
    console.log('take a walk!!!!');
}
// If it's more than 60 degrees, play some tennis, or volleyball.
else if (temperature > 60) {
    console.log('play some tennis outside it is very nice weather for sports');
}
// If it is less than 50 degrees, wear a coat.
else if (temperature < 50) {
    // put on a coat
    console.log('Put on a coat');
}
else {
    console.log('this is probably pretty cold?')
}


// Write a function that compares two numbers and returns the larger one. Be sure to try it our with some different numbers. Bonus: add error messages if the numbers are equal or cannot be compared.

function biggerNumber(num1, num2) {
    var result = null;

    if (num1 > num2) {
        result = num1;
    } else if (num2 > num1) {
        result = num2;
    } else if (num1 === num2) {
        result = 'Error!!! These are the same number and cannot be compared.';
    }
    else {
        console.error('Error!!! These may not be numbers that can be compared, check your data type and try again.')
    }


    return result;
}

console.log(' the bigger number is ' + biggerNumber('fourteen', 4));


var myFaveFoods = ['chocolate', 'avocados', 'pesto'];
var foodString = '<ol>';
for (var i = 0; i < myFaveFoods.length; i++) {
  foodString += '<li><strong>' + myFaveFoods[i] + ', </strong></li>';
}             
document.getElementById('foods').innerHTML = foodString + '</ol>';


// Write a program that prints the numbers from 1 to 100.

// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.

// For numbers which are multiples of both three and five print “FizzBuzz”.

for (var i = 1; i <=100; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {
        console.log('FizzBuzz')
    }   
    else if (i % 3 === 0) { // i divided by 3 has a remainder of 0
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } 
    else {
        console.log(i);
    }
}


// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even")

for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}

var myRecipe = {
  recipeTitle: 'Vegan pancakes',
  servings: 4,
  ingredients: ['flour', 'sugar', 'baking powder', 'oil', 'blueberries', 'chocolate chips', 'salt']
}
// you need to make an HTML element with id #recipeTitle for this to work
document.getElementById('recipeTitle').innerHTML = myRecipe.recipeTitle;


function listIngredients(recipe) {
  var ingredients = recipe.ingredients;
  for (var i = 0; i < ingredients.length; i++) {
    var ingredient = ingredients[i] + ', ';
    document.getElementById('foods').innerHTML += ingredient;
  }
}

listIngredients(myRecipe);

// Create a new array named recipeBook.

var recipeBook = [];

//Create a new recipe object.

var cookieRecipe = {
    recipeTitle: 'My chocolate chip cookiesssss',
    servings: 1,
    ingredients: ['cookie dough', 'extra chocolate chips on dough']
}

myRecipe.describe = function() {
    return myRecipe.recipeTitle + ', serves ' + myRecipe.servings + ' ';
}

cookieRecipe.describe = function() {
    return myRecipe.recipeTitle + ', serves ' + myRecipe.servings + ' ';
}

//  Add your recipe objects to the recipeBook list using the push() function.

recipeBook.push(cookieRecipe, myRecipe);
console.log(recipeBook);

for (var i = 0; i < recipeBook.length; i++) {
  var recipe = recipeBook[i];
  var servings = recipe.servings;
  var title = recipe.describe();
  document.getElementById('recipeList').innerHTML += title;
}

cookieRecipe.describe();


var jumbotron = document.getElementsByClassName('jumbotron')[0];
var header = document.querySelector('.header');
var footer = document.getElementsByTagName('footer')[0];

console.log(jumbotron);
console.log(header);
console.log(footer);

var pageNode = document.getElementsByTagName('body')[0];
pageNode.style.backgroundColor = 'turquoise';