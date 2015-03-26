// // this is an annoying popup
// alert('hello Girl Develop It class!!!! THIS RULES!!!!!!!!!!!!!!!!!!!!!');

// // this message will show in the console
// console.log('this is a console statement!!!! read me in the browser inspector');

// // this will write to the page content
// document.write('hello i dont know what this does apparently')


// var myName = 'Cat';

// var yourName = 'unknown';

// var surpriseGif = 'ACCORDION KITTEN!!!!1111'

// alert(surpriseGif);

// console.log(yourName);

// var tuckersTreats = 0;

// var brunchLeftovers = 2;

// tuckersTreats = tuckersTreats + brunchLeftovers;

// alert(tuckersTreats);

// myName = 'Catherine';

// var myMiddleName = "Elizabeth";

// var myLastName = "Farman";

// var space = ' ';

// var exclamation = '!!!!!!!!';

// function outputMyName(first, middle, last) {

// 	var myFullName = first + space + middle + space + last + exclamation;

// 	// console.log(myFullName);
// 	return myFullName;
// }

// // run my name function using some strings!!
// outputMyName('Catherine','Elizabeth','Farman');

// // run my name function with variables as arguments.
// outputMyName(myName,myMiddleName,myLastName);

// // I'm renaming myself in honor of Tucker the dog.
// outputMyName('Tucker',myMiddleName,myLastName);





// var temperature = 60;
// var weather = 'rain';

// // super cold scenario 
// if (temperature < 70 && temperature > -200) {
// 	alert('you might be on mars???? are u ok');
// }
// // if its less than 0 it's too cold
// else if (temperature < 0) {
// 	alert('stay inside, it\'s too cold outside');
// }
// // if it's below or equal to 30 degrees we need a scarf
// else if (temperature <= 30 || temperature > 90 || weather == 'rain') {
// 	alert('ALSO YOU NEED A SCARF');
// }
// // check if it's less than 50 degrees!
// else if (temperature < 50) {
// 	alert('PUT A COAT ON MAYBE IT\'S A LIL CHILLY');
// }
// else {
// 	alert('good job you are on a tropical vacation');
// }

// // for every number between 1 and 12, i'm going to multiply by every number between 1 and 12
// for (i = 1; i <= 12; i++) {
// 	// another loop to get another set of 1-12 to calculate
// 	for (n = 1; n <= 12; n++) {
// 		// print out the answer
// 		// multiple n times i and print it out
// 		console.log(n + ' x ' + i + ' equals ' + n*i);
// 	}
// }

// // Function review!!
// function greaterNum(num1, num2) {
//     if (num1 == num2) {
//         console.log ('Those numbers are equal');
//         return num1;
//     } else if (num1 > num2) {
//         return num1;
//     } else if (num2 > num1) {
//         return num2;
//     } else {
//         console.log ('Those are simply incomparable!');
//         return undefined;
//     }
// }

// console.log (greaterNum('5', 3));

// console.log (greaterNum(7, -2));
// console.log (greaterNum(5, 9));
// console.log (greaterNum(5, 'dog'));

// // For Loop review!!
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + ' is even');
//     } else {
//         console.log(i + ' is odd');
//     }
// }


var faveFoods = ['chocolate','pancakes','avocados','toast','sandwiches','stuffing'];

var firstFood = faveFoods[0];
var lastFood = faveFoods[faveFoods.length - 1];

// console.log('I like to eat ' + firstFood + ' and ' + lastFood);

for (i = 0; i < faveFoods.length; i++) {
	if (faveFoods[i] === lastFood) {
		console.log('I like to eat ' + faveFoods[i] + '. ');
	} else {
		console.log('I like to eat ' + faveFoods[i] + ', ');
	}
}

// an object called aboutMe, curly braces
var aboutMe = {

 // key: 'value' 
  hometown: 'Atlanta, GA',
  
	// string with quotes 
  hair: 'Auburn', 
  
   // array with brackets
  likes: [
  	'knitting', 
  	'code'
  ],
  
	// object with curly braces
  birthday: {
  	month: 10,
  	day: 17
  }
}; 


// recipe object
var recipe = {

	// servings property has a number as its value
	servings: 2,

	// title of recipe is a string
	title: 'pancakes',

	// ingredients is a list of strings
	ingredients: ['flour','baking powder','salt','baking power','chocolate chips','oil','soy milk','maple syrup','water','vanilla extract','cinnamon'],

	cook: function() {
		// do something with the other properties!
		console.log('cook some ' + recipe.title);
	}
}

console.log(recipe.ingredients);

// loop through recipe.ingredients!!
for (i = 0; i < recipe.ingredients.length; i++) {
	console.log('ingredient #' + (i + 1) + ': ' + recipe.ingredients[i]);
}