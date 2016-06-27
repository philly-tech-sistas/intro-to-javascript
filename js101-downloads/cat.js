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

var temperature = 96;
var haveHatAndGloves = true;
var humidity = 100;
var raining = true;
var message = '';

if (temperature < 0 || temperature >= 100) {
    document.getElementById('welcome-message').innerHTML = 
        'just stay inside it is not good weather';
}
else if (temperature < 30 && haveHatAndGloves == false) {
    document.getElementById('welcome-message').innerHTML = 
        'brrrrrr you need a hat and gloves';
}
else if (temperature < 30 && haveHatAndGloves == true) {
    document.getElementById('welcome-message').innerHTML = 
        'put on your hat and gloves!';
}
else if (temperature < 50) {
    document.getElementById('welcome-message').innerHTML = 
        'Put on a coat!';
} 
else if (temperature < 80 && humidity < 50) {
    document.getElementById('welcome-message').innerHTML = 
        'seems pretty pleasant';
}
else if (temperature < 100 || humidity >= 50) {
    message = 'are you sweating yet';
}

if (raining == true) {
    message += 'bring an umbrella';
}

document.getElementById('welcome-message').innerHTML = 
        message;



function announce(announcement) {
    return 'important announcement!!!! ' + announcement;
}

var kittenMessage = announce('kittens are cute. my cat Willa is the cutest.');
var JSMessage = announce('welcome to day 2 of JavaScript!!!!');

// now make these variables appear on the page!

console.log(kittenMessage);
alert(kittenMessage);
document.getElementById('headline').innerHTML = JSMessage;



// var myFaveFoods = ['chocolate', 'pickles', 'avocados', 'tahini', 'lemons', 'cookies', 'coffee', 'beer'];
// console.log(myFaveFoods[0]);
// console.log(myFaveFoods[1]);
// console.log(myFaveFoods[2]);
// console.log(myFaveFoods[3]);
// console.log(myFaveFoods[4]);
// console.log(myFaveFoods[5]);
// console.log(myFaveFoods);
// console.log(myFaveFoods[myFaveFoods.length - 1]); // should  be the last item in the array



var myFaveFoods = ['chocolate', 'pickles', 'avocados', 'tofu scramble', 'pancakes', 'donuts'];
myFaveFoods[0] = 'chocolate cake to be more specfic';
myFaveFoods.push('lemons');

var lastFood = myFaveFoods[myFaveFoods.length - 1];
document.getElementById('foods').innerHTML = myFaveFoods[0];
document.getElementById('foods').innerHTML += myFaveFoods[2];
document.getElementById('foods').innerHTML += myFaveFoods[5];
document.getElementById('foods').innerHTML += lastFood;


for (var i = 0; i < myFaveFoods.length; i++) {
  console.log('<h1>my favorite food is ' + myFaveFoods[i] + ' !!!!</h1>');
}

// real world examples:
// https://github.com/cfpb/owning-a-home/blob/master/src/static/js/modules/explore-rates.js#L495

// https://github.com/cfpb/owning-a-home/blob/master/src/static/js/modules/explore-rates.js#L785


var foodString = '<ul>';

for (var i = 0; i < myFaveFoods.length; i++) {
  foodString += '<li>' + myFaveFoods[i] + ', </li>';
}             
document.getElementById('foods').innerHTML = foodString + '</ul>';


//Count from 1 to 100
for (var i = 1; i <= 100; i++) {
    
    // For numbers which are multiples of both three and five print “FizzBuzz”.
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    }
    // for multiples of 3 print fizz instead of the number
    else if (i % 3 === 0) {
        console.log('fizz');
    } 
    // for multiples of 5 print buzz instead of the number
    else if (i % 5 === 0) {
        console.log('buzz');
    }
    // log the number if it's NOT divisible by 3
    else {
        console.log(i);
    }

}
        


// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even")

for (var i = 0; i <= 20; i++) {
    // check if i is even and say "i is even"
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } 
    // check if i is odd and say "i is odd"
    else {
        console.log(i + ' is odd');
    }
}

var myRecipe = {
  recipeTitle: 'Vegan pancakes',
  servings: 4,
  ingredients: ['flour', 'oil', 'almond milk', 'baking powder', 'salt', 'maple syrup', 'chocolate chips', 'blueberries']
}
// you need to make an HTML element with id #recipeTitle for this to work
document.getElementById('recipeTitle').innerHTML = myRecipe.recipeTitle;

document.getElementById('servings').innerHTML = myRecipe.servings;

document.getElementById('ingredients').innerHTML = myRecipe.ingredients;

function listIngredients(recipe) {
  var ingredients = recipe.ingredients;
  for (var i = 0; i < ingredients.length; i++) {
    // can you make this a bulleted list instead of comma separated?
    var ingredient = ingredients[i] + ', ';
    document.getElementById('foods').innerHTML += ingredient;
  }
}

listIngredients(myRecipe);


var salad = {
    recipeTitle: 'Avocado salad',
    servings: 2,
    ingredients: ['avocados', 'more avocados', 'dressing']
}

var recipeBook = [myRecipe, salad];

for (var i = 0; i < recipeBook.length; i++) {
  var recipe = recipeBook[i];
  var servings = recipe.servings;
  var title = recipe.recipeTitle + ', serves ' + servings + ' <br>';

  // add a #recipeList element to your page for this to work:
  document.getElementById('recipeList').innerHTML += title;
}


var jumbotron = document.getElementsByClassName('jumbotron')[0];
var header = document.querySelector('.header');
var footer = document.getElementsByTagName('footer')[0];

console.log(jumbotron);
console.log(header);
console.log(footer);


var imgKitten = document.getElementById('kittenPic');
imgKitten.setAttribute('height', '400');
imgKitten.setAttribute('width', '400');


var pageNode = document.getElementsByTagName('body')[0];
pageNode.style.backgroundColor = 'turquoise';



var pageNode = document.getElementsByTagName('body')[0];

var newImg = document.createElement('img');
newImg.src = 'http://placekitten.com/400/300';
newImg.style.border = '1px solid black';
pageNode.appendChild(newImg);

var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode('Squee!');
newParagraph.appendChild(paragraphText);
pageNode.appendChild(newParagraph);
              

imgKitten.onclick=function(){
    document.getElementById('headline').innerHTML = 'You clicked the kitten pic!!';
}

var button = document.querySelector('.btn-success');

button.onclick=function(){
     alert ('Thank you for attending JS 101!');
}
>>>>>>> Stashed changes
