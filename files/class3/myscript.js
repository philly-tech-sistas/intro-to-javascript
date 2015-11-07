var body = document.getElementsByTagName('body')[0];
var wrapper = document.getElementById('wrapper');
var header = document.getElementById('header');
var main = document.getElementById('main');
var footer = document.getElementById('footer');

header.style.color = 'cyan';
footer.style.color = 'cyan';
footer.style.backgroundColor = 'grey';
body.style.backgroundColor = 'black';
body.style.fontFamily = 'Papyrus';





// create a new paragraph
var newParagraph = document.createElement('p');

// create some new text
var newText = document.createTextNode('hello world');

// append our paragraph to the header element
header.appendChild(newParagraph);

// append our new text to the new paragraph element
newParagraph.appendChild(newText);

// create new div, text, and append to main
var newDiv = document.createElement('div');
var divText = document.createTextNode('hello i\'m a div');
newDiv.appendChild(divText);
main.appendChild(newDiv);
var div = main.getElementsByTagName('div')[1];
div.style.backgroundColor = 'magenta';

function makeNewDiv(message) {
    // create new div
    var newDivElement = document.createElement('div');
    var newDivText = document.createTextNode(message);
    newDivElement.appendChild(newDivText);
    main.appendChild(newDivElement);
}

makeNewDiv('another message');
makeNewDiv('hello again with a new message');
makeNewDiv('functions let me do the same thing over and over');