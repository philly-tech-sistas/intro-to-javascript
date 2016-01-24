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



var yourName = document.getElementById('name');
var submitButton = document.getElementById('simpleSubmit');
var form = document.getElementById('simpleForm');

submitButton.onclick = function(event) {
    event.preventDefault();
    
    var yourNameValue = yourName.value;

    var nameParagraph = document.createElement('p');
    var nameText = document.createTextNode(yourNameValue);
    
    nameParagraph.appendChild(nameText);
    form.appendChild(nameParagraph);

    catLadyCheck(yourName);
}

function catLadyCheck(numberOfCats) {
        if (numberOfCats == 1) {
            document.write('you are not cat lady');
        }
}

