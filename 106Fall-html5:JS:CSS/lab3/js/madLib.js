/*
    madLib.js
    
    See the notes - interactionOne-Notes.txt
*/

function myFunction() {
    var texts, blanks;

    texts = document.getElementsByClassName("text")
	blanks = document.getElementsByTagName("span")
	console.log(blanks)
	
    for(var i=0;i<texts.length;i++){
		blanks[i].innerHTML=texts[i].value
	}
}