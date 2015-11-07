// var myMessage="Hello World! this message is saved as a variable so i can repeat it";

// // this is an alert message
// // alert(myMessage);

// // updating the value of myMessage
// myMessage = 'this is a new message';

// /* document.write will put the words on the webpage */
// document.write(myMessage);

// // console.log will put the words in the console
// console.log(myMessage);

// var numberOfKittens = 10;
// var bagsOfCatFood = 2;
// var kittensPerBag = numberOfKittens / bagsOfCatFood;
// console.log('kittens per bag:')
// console.log(kittensPerBag);

// var emptyBags = 1;
// bagsOfCatFood = bagsOfCatFood - emptyBags;

// console.log('bags of cat food:')
// console.log(bagsOfCatFood);

// var kittensPerBag = numberOfKittens / bagsOfCatFood;
// console.log('kittens per bag:')
// console.log(kittensPerBag);



// var myFirstName = 'Catherine';
// var space = ' ';
// var myLastName = 'Farman';

// // declares the function!
// function myFullName(firstName, lastName) {
//     return firstName + space + lastName;
// }

// var nameResult = myFullName('cat','farman');
// var newName = myFullName('new', 'name');

// document.write('my name is ' + nameResult);

// console.log('another name is ' + nameResult);

// alert('hello ' + nameResult);











// runs the function!
// myFullName(myFirstName, myLastName);
// myFullName('new first name', 'new last name');
// myFullName('new first name', myLastName);

// function percentOf(num1, num2) {
//     var percent = (num1/num2) * 100;
//     console.log(num1 + ' is ' + percent + '% of ' + num2);
//     return 'hello';
// }

// alert(percentOf(5, 10));


var temperature = 80;

if (temperature < 0 || temperature > 90) {
  console.log('do not go outside');
} else if (temperature > 50 || temperature < 60) {
  console.log('put on a coat');
} else if (!(temperature < 30)) {
  console.log('do not wear a coat and a hat');
} else {
  console.log('go outside and enjoy the weather!')
}


var job = 'programmer';
var city = 'Boston';
var home = 'mansion';
var hobby = 'go pats';

console.log('you will be a ' + job + ' in ' + city + ' living in a ' + home + ' and for fun you will ' + hobby);

function squareNumber(num) {
  var squareResult = num*num;
  console.log('the result of squaring ' + num + ' is ' + squareResult);
  return squareResult;
}

squareNumber(4);

for (var i = 0; i <= 10; i++) {
    console.log (i); 
}

// start at the number 1 and end at the number 12
// 9 x table.
for (var i = 1; i <= 12; i++) {
    console.log (i + ' multiplied by 9 equals ' + i * 9);
}

// start at the number 1 and end at the number 12
// index times (1 through 12) table.
for (var i = 1; i <= 12; i++) {
  console.log(i); 
  for (var n = 1; n <= 12; n++) {
    console.log(
      'the inner loop count ' + n + ' times the outer loop ' + i + ' equals ' +  n*i);
    if (n == 1  ) {
      console.log (n + ' equals 10! stop the loop');
      break;
    }
  }
}


var myFavoriteFoods = 
  [
    'chocolate',
    'pancakes',
    'avocado',
    'pickles',
    'sandwiches'
  ];

myFavoriteFoods.push('tacos');

console.log(myFavoriteFoods);

for (item = 0; item < myFavoriteFoods.length; item++) {
  console.log(myFavoriteFoods[item]);
}

// myRecipe is an object
var myRecipe = {
  recipeTitle: 'how to make vegan pancakes',
  servings: 4,
  ingredients: ['1 1/4 all purpose flour','oil','baking soda','maple syrup','1/2 cup water']
}
document.write('my recipe is called ' + myRecipe.recipeTitle + '<br>');
document.write('my recipe serves ' + myRecipe.servings + '<br>');
  document.write('my recipe ingredients are: <br><ul>');

function listIngredients(recipe) {
  for (ingredient = 0; ingredient < recipe.ingredients.length; ingredient++) {
    document.write('<li>' + recipe.ingredients[ingredient] + '</li>');
  }
}

listIngredients(myRecipe);

var newRecipe = {
  ingredients: myFavoriteFoods
}
document.write('<br>my new recipe is <br>')
listIngredients(newRecipe);

