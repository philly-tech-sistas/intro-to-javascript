/*
 * Select elements from the page to use in cat calculation.
 */
var guessInput = document.getElementById("user-guess");
var guessSubmitButton = document.getElementById("submit-guess");
 
/*
 * When the user clicks the "Submit" button, check to see how many cats they have
 * and then display the appropriate judgement.
 */
guessSubmitButton.addEventListener("click", function(evt) {
  var message = document.getElementById('message');
  var guessedNumber = parseInt( guessInput.value );
  
// Conditional!!!
  if (guessedNumber % 1 != 0) {
   message.innerHTML = "Please enter a number. Because that is just nonsense.";
 }
 else if (guessedNumber < 0) {
   message.innerHTML = "How do you have negative cats? You must be mistaken. Get yourself a cat.";
 } 
 else if (guessedNumber > 3000) {
   message.innerHTML = "The amount of cats you have is creeping me out.";
 }  
 else if (guessedNumber > 2000) {
   message.innerHTML = "Oh, you must be cat island. There is no other explanation.";
 } 
 else if (guessedNumber > 1000) {
   message.innerHTML = "You can't possibly be counting all your cats at this point.";
 } 
 else if (guessedNumber === 1000) {
   message.innerHTML = "Just rename yourself 'The smell of 1000 cats'.";
 } 
 else if (guessedNumber > 101) {
   message.innerHTML = "It's obvious, you have too many cats.";
 }
 else if (guessedNumber === 101) {
   message.innerHTML = "Stop lying about how many cats you have. 101 dalmations, sure. 101 cats? You're just trying to sound cool.";
 }
 else if (guessedNumber > 50) {
   message.innerHTML = "You have a cat problem. Please seek help.";
 }
 else if (guessedNumber > 40) {
   message.innerHTML = "Are you sure all those cats are yours?";
 }  
 else if (guessedNumber > 30) {
   message.innerHTML = "You're not a cat lady, you're a cat horder!";
 } 
 else if (guessedNumber > 20) {
   message.innerHTML = "You have a ridiculous amount of cats!";
 }
 else if (guessedNumber > 15) {
     message.innerHTML = "You have too many cats, not enough boats.";
 }
 else if (guessedNumber > 10) {
     message.innerHTML = "You have too many cats.";
 }
 else if (guessedNumber > 7) {
      message.innerHTML = "You are approaching a slippery slope of no return. Please don't get another cat.";
 } 
 else if (guessedNumber > 6) {
      message.innerHTML = "You're a crazy cat lady!";
 }
 else if (guessedNumber > 3) {
      message.innerHTML = "You're a cat lady!";
 }
 else if (guessedNumber > 0 && guessedNumber < 2) {
      message.innerHTML = "You need to get another cat!";
 }
 else if (guessedNumber < 1) {
      message.innerHTML = "You need to get a cat!";
  }

 else {
    message.innerHTML ="That's a good amount of cat.";
 }
});