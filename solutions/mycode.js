var numberOfKittens = 5;
console.log(numberOfKittens);

var numberOfPuppies = 4;
var numberOfPlants = 16;
var numberOfAnimals = numberOfKittens + numberOfPuppies;
document.getElementById('headline').innerHTML = numberOfAnimals;

// how can i add spaces between the variables? 
// can i do it without changing the variable values?


// Store the following into variables: city or place, job title, home, and hobby.
var city = 'Philly';
var job = 'gardener';
var home = 'yurt';
var hobby = 'make wine';

// Output your fortune to the screen like so: "You will be a _job_ living in a _home_ in _city or place_. For fun you will _hobby_."

document.write("You will be a " + job + " living in a " + home + " in " + city +". For fun you will " + hobby + ".");

// add name stuff here!
function sayMyCatsName(name1, name2) {

    return name1 + ' ' + name2;
}

var version1 = sayMyCatsName('willa', 'farman');
var version2 = sayMyCatsName('Kitten', 'farman');
var version3 = sayMyCatsName(2, 'farman');

console.log(version1);
document.getElementById('headline').innerHTML = version2;
document.write(version3);


// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(number) {
    console.log('The result of squaring the number ' + number + ' is ' + number*number);
    return number*number;
}

function halfNumber() {

}


var temperature = 86;


if (temperature > 70) {
    console.log('why do you have a coat?');
} else if (temperature <= 70) {
    console.log('maybe you need a jacket');
} else if (temperature >= 32) {
    console.log('you need a coat');
}
else {
    console.log('stay inside');
}

if (temperature > 60 && temperature < 70) {
    document.getElementById('welcome-message').innerHTML = 
        'the weather is lovely, wear whatever you like';
} else if (temperature < 180 && temperature >= 55) {
    document.getElementById('welcome-message').innerHTML = 'eat some ice cream!!!!';
}
else if (temperature > 85 || temperature < 0) {
   document.getElementById('welcome-message').innerHTML = 
        'stay inside, the weather is awful'; 
}

// Some other scenarios to try...
// wear a scarf and gloves
// wear shorts and sandals
// eat some ice cream

var myFaveFoods = [
'chocolate', 
'pop-tarts',
'pickles', 
'avocados',
'ice cream',
'falafel',
'tacos',
'pancakes',
'cookies'
];

myFaveFoods[0] = 'strawberries';
myFaveFoods.push('soft pretzels');


// print out all the items in myFaveFoods array
for (var i = 0; i < myFaveFoods.length; i++) {
  console.log(myFaveFoods[i]);
}

var foodString = '<ul>';

for (var i = 0; i < myFaveFoods.length; i++) {
  foodString += '<li><i>' + myFaveFoods[i] + '</i></li>';
    console.log(foodString);
}
console.log(foodString);

foodString += '</ul>';
document.getElementById('foods').innerHTML = foodString;
console.log(foodString);




//Count from 1 to 100
for (var i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + ' is FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log(i + ' is Fizz');
    }
    // for the multiples of five print “Buzz”
    else if (i % 5 === 0) {
        console.log(i + ' is Buzz');
    }

}

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even")

for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even!');        
    } else {
        console.log(i + ' is odd!');
    }
}

var myRecipe = {
  recipeTitle: 'Vegan chocolate chip pancakes',
  servings: 4,
  ingredients: ['flour', 'oil', 'almond milk', 'baking powder', 'water', 'chocolate chips', 'blueberry']
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


var jumbotron = document.getElementsByClassName('jumbotron')[0];
var header = document.querySelector('.header');
var footer = document.getElementsByTagName('footer')[0];

var paragraphs = document.getElementsByTagName('p');

console.log(jumbotron);
console.log(header);
console.log(footer);
console.log(paragraphs);

var imgKitten = document.getElementById('kittenPic');
imgKitten.setAttribute('height', '1500');
imgKitten.setAttribute('width', '1500');


var pageNode = document.getElementsByTagName('body')[0];

var newImg = document.createElement('img');
newImg.src = 'http://www.funnykittensite.com/pictures/Kitten_Party.jpg';
newImg.style.border = '1px solid black';
pageNode.appendChild(newImg);

var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode('hello!');
// headline.appendChild(paragraphText);

// save the big green button as a variable
var button = document.getElementById('clickme');

button.onclick = function() {
    headline.appendChild(paragraphText);
}

var nameField = document.getElementById('name');
var submit = document.getElementById('submit');

submit.onclick = function(event) {
    event.preventDefault();
    var value = nameField.value;
    alert('Hi ' + value);
}
