// // Puts message in the console:
// console.log('Hello World!');

// // Puts my message at the bottom of the page:
// document.write('Hello from the bottom of the page');

// // Puts my message in the #headline element:
// document.getElementById('headline').innerHTML = 'Hello, welcome to my page!';

// // initialize the variable
// var numberOfKittens = 5;

// // put the variable in the console
// console.log(numberOfKittens);

// // put the variable in the headline
// document.getElementById('headline').innerHTML = numberOfKittens;

// var numberOfPuppies = 4;
// var numberOfAnimals = numberOfKittens + numberOfPuppies;
// document.getElementById('headline').innerHTML = numberOfAnimals;


// var myFirstName = 'Cat ';
// var myLastName = 'Farman';

// var myFullName = myFirstName + myLastName;

// document.getElementById('headline').innerHTML = myFullName;


// // Store the following into variables: city or place, job title, home, and hobby.
// var city = 'Philly';
// var job = 'gardener';
// var home = 'tiny house';
// var hobby = 'sew';


// // Output your fortune to the screen like so: "You will be a _job_ living in a _home_ in _city or place_. For fun you will _hobby_."
// document.write('You will be a ' + job + ' living in a ' + home + ' in ' + city + '. For fun you will ' + hobby + '.' );


// function sayMyName(fName, lName) {
//   var fullName = fName + lName;
//   return fullName;
// }

// var clientName = sayMyName('Abe', 'Froman');
// alert(clientName);

// console.log(sayMyName('Kelly', 'Rowland') + sayMyName('Cat', 'Farman') + sayMyName('Willa', 'Farman'));

// function square(num) {
//     return num * num;
// }
// console.log(square(4));

// numberOfKittens = square(2);

// var squareOf5 = square(5);


// // Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."


// // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."


// // 1. write the function
// // 2. add argument(s)
// // 3. return statement
// // 4. call the function

// function percentOf(num1, num2) {
//     var result = num1 / num2 * 100;
//     console.log(num1 + ' is ' + result + '% of ' + num2);
//     return result;
// }

// var percentResult = percentOf(2, 4);
// var percentResult2 = percentOf(5, 100);
// alert(percentResult);
// alert(percentResult2);


// function areaOfCircle(radius) {
//     var result = 3.14 *(radius*radius);
//     return result;
// }


// // Write some code that tells you to put on a coat if it is below 50 degrees.
// var temperature = 65;

// if (temperature <= 0) {
//     alert('stay inside');
// }
// else if (temperature <= 30) {
//     alert('you need a coat and hat');
// } else if (temperature <= 50 ) {
//     alert('Put on a coat!!!');
// } else {
//     console.log('wear whatever you want!');
// }

// if (temperature > 60 && temperature < 70) {
//     document.getElementById('welcome-message').innerHTML = 
//         'the weather is lovely, wear whatever you like';
// } else if (temperature > 100 || temperature < 0) {
//    document.getElementById('welcome-message').innerHTML = 
//         'stay inside, the weather is awful'; 
// }


// Write a function that compares two numbers and returns the larger one. Be sure to try it our with some different numbers. Bonus: add error messages if the numbers are equal or cannot be compared.


// function whatsBigger(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else if (num1 === num2) {
//         return alert('Cannot compare, they are equal');
//     }
//     else {
//         return num2;
//     }
// } 

// console.log(whatsBigger(2, 3));
// console.log(whatsBigger(5, 1));
// // console.log(whatsBigger(5, 5));
// console.log(whatsBigger(0, -5));
// console.log(whatsBigger('5', 1));

// var myFaveFoods = ['chocolate', 'pickles', 'avocados'];
// console.log(myFaveFoods[0]);
// console.log(myFaveFoods[1]);
// console.log(myFaveFoods[2]);

// myFaveFoods[0] = 'chocolate cake to be more specfic';
// myFaveFoods.push('lemons');
// document.getElementById('foods').innerHTML = myFaveFoods;  


// // for (var i = 0; i < myFaveFoods.length; i++) {
// //   console.log(myFaveFoods[i]);
// // }

// var foodString = '<ul>';
// for (var i = 0; i < myFaveFoods.length; i++) {
//   foodString += '<li>' + myFaveFoods[i] + ', </li>';
//   console.log(foodString);
// }         

// // add the foodString to the HTML page    
// document.getElementById('foods').innerHTML = foodString + '</ul>';


// Write a program that prints the numbers from 1 to 100.

// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.

// For numbers which are multiples of both three and five print “FizzBuzz”.

//Count from 1 to 100
// for (var i = 1; i <= 100; i+=2) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     }
//     else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     }
//     else {
//         console.log(i);
//     }
// }

var myRecipe = {
  recipeTitle: 'Vegan pancakes',
  servings: 4,
  ingredients: ['flour', 'almond milk', 'oil', 'baking soda', 'chocolate chips', 'bananas']
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
var newVariable = [];

// Create a new recipe object.
var cookieRecipe = {
    recipeTitle: 'Chocolate chip cookies',
    servings: 6,
    ingredients: ['flour', 'oil', 'baking soda', 'vanilla extract', 'chocolate chips']
}

// Add your recipe objects to the recipeBook list using the push() function.
recipeBook.push(cookieRecipe, myRecipe);

// Loop through the recipeBook array to list information about each recipe title and servings on the page.
//  for (var i = 0; i < recipeBook.length; i++) {
//   var recipe = recipeBook[i];
//   var servings = recipe.servings;
//   var title = recipe.recipeTitle + ', serves ' + servings + ' ';
//   document.getElementById('recipeList').innerHTML += title;
// }

// myRecipe.describe = function() {
//     return myRecipe.recipeTitle + ', serves ' + myRecipe.servings + ' ';
//   }

// cookieRecipe.describe = function() {
//     return cookieRecipe.recipeTitle + ', serves ' + cookieRecipe.servings + ' ';
// }

// console.log(recipeBook);

// for (var i = 0; i < recipeBook.length; i++) {
//   var recipe = recipeBook[i];
//   console.log(recipeBook[i]);
//   document.getElementById('recipeList').innerHTML += recipe.describe();
// }



var jumbotron = document.getElementsByClassName('jumbotron')[0];
var header = document.querySelector('.header');
var footer = document.getElementsByTagName('footer')[0];

console.log(jumbotron);
console.log(header);
console.log(footer);

var pageNode = document.getElementsByTagName('body')[0];
pageNode.style.backgroundColor = 'turquoise';

var heading = document.getElementsByTagName('h1')[0];
heading.style.fontFamily = 'Papyrus';

jumbotron.style.border = '10px double purple';


// Create a new paragraph element and add it to a div on your page.

var newParagraph = document.createElement('p');

var newText = document.createTextNode('Hello this is my new paragraph!!');

newParagraph.appendChild(newText);

pageNode.appendChild(newParagraph);


var myTarget = document.getElementById('clickMe');

// add Event handler
myTarget.onclick = sayHi;

// add event listener:
function sayHi() {
     alert('Hi!');
}


// Write event code that collects the name from the page when the form is submitted.
var submitButton = document.getElementById('submit');
submitButton.onclick = function (event) {
    event.preventDefault();
    // Put the name from the user input onto the page in a new HTML element, or an alert.
    alert(document.getElementById('name').value);
}


