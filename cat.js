/* here
is
my
multiline 
comment */
// alert('hi');

// write a message on the page:
document.write('Hello World!');

// make the console say something:
console.log('hello i am the console!');

// initialize the variable!
var numberOfKittens = 5;
var numberOfPuppies = 0;
var numberOfAnimals = numberOfKittens + numberOfPuppies;

document.write("<br>I have this many animals total: ");
document.write(numberOfAnimals);

document.write('<br><h2>animals have mated and now i have this many:</h2> ');
document.write(numberOfAnimals*3);

console.log('i have this many puppies: ');
console.log(numberOfAnimals - numberOfKittens);

console.log('do i have an odd or even number of kittens??');
console.log(numberOfKittens%2);

var myFirstName = 'Catherine ';
var myMiddleName = 'Elizabeth ';
var myLastName = 'Farman';


// i want to change my name
myFirstName = 'Cat ';
var myFullName = myFirstName + myMiddleName + myLastName;

document.write('<h3>Now you know my full name is ' + myFullName + '</h3>');

// function printName() {
//     document.write('<p>' + myFullName + '</p>');
// }
// printName();

// function printAnyName(name1, name2) {
//     // document.write(name1 + ' ' + name2);
//     return name1 + ', ' + name2;
// }

// var newName = printAnyName('Mr.', 'Kittenz');

// console.log(newName);
// document.write('<h1>Hello, ' + newName + '!</h1>');
// document.write('<br>this webpage now belongs to ' + newName);

// // use this name output in a link:
// document.write('<p><a href="https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg">meet ' + newName + '\'s kitten.</a></p>');

// alert('HELLO TO YOU, ' + newName + '!!! Welcome to your page.');


// var loanResult = 0;

// function loanPrice() {
//     var loanResult = 100000 - 20000;
//     return loanResult;
// }

// loanPrice();

// console.log('Loan result: ' + loanResult); // undefined






var temperature = 27;
var youAreAlwaysCold = true;
var youHaveAHat = false;

// less than 0 OR greater than 100!
if (temperature < 0 || temperature > 100) {
    document.write('do not go outside.');
} else if (temperature < 30 && youHaveAHat) {
    document.write('wear a hat and coat');
} else if (temperature < 30 && !youHaveAHat) {
    document.write('buy a hat to go with your coat');
} else if (temperature < 50 || youAreAlwaysCold) {
    document.write('<h2>Put on a coat!!!</h2>');
} else {
    document.write('wear whatever you want');
}


function areaOfCircle(radius) {
    var result;
    result = 3.1415926 * (radius*radius);
    console.log('The area for a circle with radius ' + radius + ' is ' + result);
    return result;
}

areaOfCircle(2);



//This function uses the slice() method. It extracts a part of a string and returns a new string
function mixUp(string1, string2) {
  return string1.slice(1, 2) 
        + string2.slice(2) 
        + " " 
        + string2.slice(1, 2) 
        + string1.slice(2);
}

// mid pox
console.log(mixUp('mix', 'pod')); 
console.log(mixUp('cat', 'farman')); 



// will count 1 to 10
for (var b = 99; b > 0; b--) {
    if (b === 50) {
        console.log('have you had enough beer yet???');
    } else if (b === 1) {
        console.log('this is last bottle!')
    }
    else {
        console.log (b + ' bottles of beer');         
    }
}


// this loop gets all the multiples of 9 from 1-12
for (var i = 1; i <= 12; i++) {
    // multiply i times 9
    var result = i*9;

    console.log("9 times " + i + " equals " + result);
}

// this loop gets multiples of 1-12 times 1-12
for (var a = 1; a <= 12; a++) {
    console.log('a is ' + a);
    // another loop so we can multiply a*b
    for (var b = 1; b <= 12; b++) {
        console.log('b is ' + b);
        console.log(a + ' times ' + b + ' equals ' + a*b);
    }
}


var myFavoriteFoods = ['chocolate chip pancakes','coffee','avocados','tacos','beer','stuffing'];

document.write('<h1>my most fave food is ' + myFavoriteFoods[0] + ' </h1>');

document.write('<h2>my second most fave food is ' + myFavoriteFoods[1] + ' </h2>');

document.write('<h3>my third most fave food is ' + myFavoriteFoods[2] + ' </h3>');


for (var i = 0; i < myFavoriteFoods.length; i++) {
    document.write('<br>my favorite food number ' + i + ' is ' + myFavoriteFoods[i]);
} 


var pancakeRecipe = {
    recipeTitle: 'vegan chocolate chip pancakes',
    servings: 4,
    ingredients: ['flour','baking powder','salt','chocolate chips','water','oil','vanilla extract','maple syrup']
}

function printRecipe(recipe) {
    document.write('<h1>My recipe is for ' + recipe.recipeTitle + ' and it serves ' + recipe.servings + ' people.');
    document.write('<ul>');

    // Next, use a for loop to print the ingredients
    for (var i = 0; i < recipe.ingredients.length; i++) {
        document.write('<li>' + recipe.ingredients[i] + '</li>');
    }
    
    document.write('</ul>');
}

printRecipe(pancakeRecipe);

// try writing another recipe and calling your function with that.

var newRecipe = {
    recipeTitle: 'chocolate chip cookies',
    servings: 6,
    ingredients: ['chocolate chips', 'flour', 'oil', 'brown sugar', 'white sugar','vanilla extract', 'salt', 'baking soda']
}
printRecipe(newRecipe);