/*Add your own code here!*/

// JAVASCRPIT here

var wrapper = 
 document.getElementById('wrapper');

var header =
 document.getElementById('header');

var main = 
 document.getElementById('main');

var footer = 
 document.getElementById('footer');
 
main.style.backgroundColor = 'pink';

header.style.backgroundColor = 'purple';

main.style.backgroundColor = 'magenta';

main.style.color = 'blue';

footer.style.backgroundColor = 'purple';

var body = document.querySelector('body');

body.style.backgroundColor = 'blue';

// create a new element
var newElement = document.createElement('section');

// give the element an id property!
newElement.id = 'new-element';
newElement.style.border = '10px solid teal';

// add content to my element
newElement.innerHTML = '<h1>test!!!!!!</h1>'

// add it to my page!
header.appendChild(newElement);