/*
    canvas-primatives.js
*/

// ***********************************************
//When the page has fully loaded, execute the eventWindowLoaded function
window.addEventListener("load", eventWindowLoaded, false);

// ***********************************************
//eventWindowLoaded()
//Called when the window has been loaded it then calls the canvasapp() 
function eventWindowLoaded() {
    canvasApp();
} // eventWindowLoaded()

// ***********************************************
//function canvasSupport() 
//Check for Canvas Support using modernizr.js
function canvasSupport() {
    return Modernizr.canvas;
} // canvasSupport()

// ***********************************************
//canvasApp() 
//The function where ALL our canvas code will go
function canvasApp() {

    //Check to see if the canvas has a context 
    if (!canvasSupport()) {
        return; //Canvas not supported so exit the function
    }

    //Setup the canvas object
    var theCanvas = document.getElementById("myCanvas");
    var ctx = theCanvas.getContext("2d"); //get the context

    var height = theCanvas.height; //get the heigth of the canvas
    var width = theCanvas.width; //get the width of the canvas

    // write your canvas code here...


} //canvasApp()
