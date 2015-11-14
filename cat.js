/*I can wrap long comments 
with multiple lines 
like this*/
// alert('welcome to cat\'s page');

//Or mark short comments like this
// more comments!
// now i have to add different ways to print text to the page.
console.log('i am in the console');

// here is a document.write() message
document.write('here is a document.write message');

// initialize the variables!!
var numberOfKittensIWishIHad = 4;
var numberOfKittensMyFriendHas = 10;
var soManyKittens = numberOfKittensMyFriendHas + numberOfKittensIWishIHad;
var myFriendsDogs = 2;
var myFriendsAnimals = myFriendsDogs + numberOfKittensMyFriendHas;

var kittensIStole = 2;
var numberOfKittensMyFriendHas = numberOfKittensMyFriendHas - kittensIStole;

var cutenessRating = 9.6;
var cutenessScale100 = cutenessRating * 10;

// print the variable to the page in an alert
console.log(soManyKittens);
console.log('after I stole some kittens:');
console.log(numberOfKittensMyFriendHas);
console.log('cuteness rating on a scale of 1-100:');
console.log(cutenessScale100);


function callKitten (kittenName) {
    document.write('Come here, ' + kittenName + '!<br>');
}
callKitten ('Fluffy'); //outputs 'Come here, Fluffy!'
callKitten ('spartacus'); //outputs 'Come here, spartacus!'
callKitten ('kittyCAt'); //outputs 'Come here, kittyCAt!'
callKitten ('Willa'); //outputs 'Come here, Willa!'

    
function addNumbers(x, y) {
    console.log(x + y);
}
addNumbers(5,7); //outputs 12
addNumbers(9,12); //outputs 21

function addPets(puppies, kittens) {
    console.log('I have this many puppies and kittens:');
    console.log(puppies + kittens);
}
addPets(10,10); // outputs 20

addPets(numberOfKittensMyFriendHas, myFriendsDogs); // outputs 25


function printRoyalName(name1, name2, name3) {
    // add the names together - concatenate!
    var fullName = name1 + ' ' + name2 + ' ' + name3;

    // add a silly honorific to the end of my name
    fullName += ' the First';

    // save royal name so we can reuse it in different ways
    return fullName;
}

var myRoyalName = printRoyalName('Catherine', 'Elizabeth', 'Farman');

var catsRoyalName = printRoyalName('Willa', 'the', 'Beast'); 

// print my cat's name
document.write(catsRoyalName);

//print my name

console.log(myRoyalName);


// global scope
var group = 'gdi';

function whatsAwesome() {
    var group = 'new group';
    group = 'girl develop it south new jersey';
    console.log(group + ' is awesome');
}

console.log(group); // prints 'gdi'

whatsAwesome(); // prints girl develop it south new jersey is awesome

console.log(group); // prints 'girl develop it south new jersey';

// these things are 'falsy'
var myName = null;
myName = "";
myName = 0;
var newName; // undefined value

// truthy
myName = 'new name value';


var temperature = 57;

if (temperature < 50) {
    document.write('Put on a jacket!');
} else {
    document.write('you don\'t need a jacket');
}

var kittensarecute = true;

if (!kittensarecute) {
    document.write('what happened to those kittens that made them ugly');
}

temperature = 12;
var youhaveacoat = true;

if (temperature < 0 || temperature > 100) {
    console.log('stay inside');
} else if (temperature < 30 && youhaveacoat) {
    console.log('if you\'re going outside put on a coat and a hat');
} else if (temperature < 30 && !youhaveacoat) {
    console.log('chilly out there for ya');
} else if (temperature < 50) {
    console.log('put on a coat');
} else {
    console.log('not too bad temperature, wear whatever you want');
}

/*
Store the following into variables: city or place, job title, home, and hobby.
Output your fortune to the screen like so: "You will be a _job_ living in a _home_ in _city or place_. For fun you will _hobby_."
*/

// make a variable for each fortune thingy
var city = 'Paris';
var job = 'bookseller';
var home = 'basement apartment';
var hobby = 'collect stamps';

document.write("<h1>You will be a " + job + " living in a " + home + " in " + city + ". For fun you will " + hobby + ".</h1>");



// find all the multiplications 

// 9 x 1 = 9 to 9 x 12 = 108
for (var i = 1; i <= 12; i++) {
    var result = i*9;
    console.log(9 + ' x ' + i + ' = ' + result);
}

//outer loop counts from 1 to 12
for (var i = 1; i <= 12; i++) {
    // inner loop counts from 1 to 12
    for (var n = 1; n <= 12; n++) {
        var result = i*n;
        console.log(i + ' x ' + n + ' = ' + result);
    }
}


var myFavoriteFoods = ['chocolate chip pancakes','tacos','avocado','muesli'];

// iterate the array!!
for (var i = 0; i < myFavoriteFoods.length; i++) {
    
    if (i == 0) {
        document.write('<br> my most favorite food is ' + myFavoriteFoods[i]);
    } else {
        document.write('<br> another good food is ' + myFavoriteFoods[i]);
    }
}

var myRecipe = {
    recipeTitle: 'chocolate chip pancakes',
    servings: 4,
    ingredients: ['flour','oil','milk','baking powder','vanilla extract','water','maple syrup','chocolate chips']
}

document.write('<h1>My recipe: how to make ' + myRecipe.recipeTitle + '</h1>');

var myIngredients = myRecipe.ingredients;

for (var i = 0; i < myIngredients.length; i++) {
    if (i == myIngredients.length - 1) {
        document.write(myIngredients[i] + '.');
    } else {
        document.write(myIngredients[i] + ', '); 
    }
}