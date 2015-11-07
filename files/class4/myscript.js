function writeResults (result){
    //First, find the empty div where we want to put the answers.
    var resultsDiv = document.getElementById('resultsBox');

    //Second, create a new paragraph
    var newParagraph = document.createElement('p');

    //Create a text node, a string of text, to put inside the paragraph.
    var paragraphText = document.createTextNode(result);
        
    //Now, we assemble our results. Put the new text in the new paragraph
    newParagraph.appendChild(paragraphText);

    //Then put it inside the div we found earlier
    resultsDiv.appendChild(newParagraph);
}

writeResults('Hi there!');

function whatsUp() {
    alert('what is up?');
}

var footer = document.getElementById('footer');
var header = document.getElementById('header');
var turtle = document.getElementById('turtlePic');

turtle.onclick = function() {
    writeResults('you clicked the turtle');
    turtle.style.borderColor = 'magenta';
}

// header.onmouseover = function() {
//     whatsUp();
// }

var link = document.getElementById('gdiLink');

link.onclick = function(event) {
    // prevent the default behavior of my link onclick
    event.preventDefault();

    // alert or write a message to the page instead
    // whatsUp();
    this.innerHTML = 'this link doesn\'t go anywhere';
}

var myInput = document.getElementById('inputValue');
var simpleForm = document.getElementById('simpleForm');

simpleForm.onsubmit = function(event) {
    event.preventDefault(); // prevent form form submitting

    // get the value of myInput:
    var myValue = myInput.value;

    // print the value of myInput to the page:
    console.log(myValue);
}

var targetPic = document.getElementById('turtlePic');
targetPic.onclick = function () {
    var leftMarginValue = 0;
    function increaseMargin() {
        leftMarginValue++  // update parameter each time 
        targetPic.style.marginLeft = leftMarginValue + 'px' //set left margin 
        if (leftMarginValue === 1500)  // check finish condition {
            clearInterval(movePic);
        }
    var movePic = setInterval(function(){increaseMargin()}, 10) // update every 10ms
}