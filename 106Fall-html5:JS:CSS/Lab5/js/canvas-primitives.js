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

    // -------------------------------------------
    //Check to see if the canvas has a ctx 
    if (!canvasSupport()) {
        return; //Canvas not supported so exit the function
    }

    // -------------------------------------------
    //Setup the canvas object
    var theCanvas = document.getElementById("myCanvas");
    //get the ctx

    
    //scarf
    var scarf = theCanvas.getContext("2d"); 
    scarf.beginPath();
    scarf.rect(0, 230, 400, 50);
    scarf.strokeStyle = "#999999";
    scarf.fillStyle = "#999999";
    scarf.fill();

    scarf.rect(40, 280, 100, 70);
    scarf.strokeStyle = "#999999";
    scarf.fillStyle = "#999999";
    scarf.fill();
    scarf.stroke();

    scarf.beginPath();
    scarf.moveTo(40, 350);
    scarf.lineTo(40, 390);

    scarf.moveTo(44, 350);
    scarf.lineTo(44, 390);

    scarf.moveTo(48, 350);
    scarf.lineTo(48, 390);

    scarf.moveTo(52, 350);
    scarf.lineTo(52, 390);

    scarf.moveTo(56, 350);
    scarf.lineTo(56, 390);

    scarf.moveTo(60, 350);
    scarf.lineTo(60, 390);

    scarf.moveTo(64, 350);
    scarf.lineTo(64, 390);

    scarf.moveTo(68, 350);
    scarf.lineTo(68, 390);

    scarf.moveTo(72, 350);
    scarf.lineTo(72, 390);

    scarf.moveTo(76, 350);
    scarf.lineTo(76, 390);

    scarf.moveTo(80, 350);
    scarf.lineTo(80, 390);

    scarf.moveTo(84, 350);
    scarf.lineTo(84, 390);

    scarf.moveTo(88, 350);
    scarf.lineTo(88, 390);

    scarf.moveTo(92, 350);
    scarf.lineTo(92, 390);

    scarf.moveTo(96, 350);
    scarf.lineTo(96, 390);

    scarf.moveTo(100, 350);
    scarf.lineTo(100, 390);

    scarf.moveTo(104, 350);
    scarf.lineTo(104, 390);

    scarf.moveTo(108, 350);
    scarf.lineTo(108, 390);

    scarf.moveTo(112, 350);
    scarf.lineTo(112, 390);

    scarf.moveTo(116, 350);
    scarf.lineTo(116, 390);

    scarf.moveTo(120, 350);
    scarf.lineTo(120, 390);

    scarf.moveTo(124, 350);
    scarf.lineTo(124, 390);

    scarf.moveTo(128, 350);
    scarf.lineTo(128, 390);

    scarf.moveTo(132, 350);
    scarf.lineTo(132, 390);

    scarf.moveTo(136, 350);
    scarf.lineTo(136, 390);

    scarf.moveTo(140, 350);
    scarf.lineTo(140, 390);
    scarf.stroke();
    //face
    var face = theCanvas.getContext("2d");
    face.rect(0, 0, 400, 230);
    face.fillStyle = "#ffe6cf";
    face.fill();
    face.stroke();
    face.beginPath();

    //Eyebrown left
    var Eyebrown = theCanvas.getContext("2d");
    Eyebrown.rect(40, 35, 100, 20);
    Eyebrown.strokeStyle = "#663300";
    Eyebrown.fillStyle = "#663300";
    Eyebrown.fill();
    Eyebrown.stroke();
    Eyebrown.beginPath();
    //Eyebrown right
    Eyebrown.rect(260, 35, 100, 20);
    Eyebrown.strokeStyle = "#663300";
    Eyebrown.fillStyle = "#663300";
    Eyebrown.fill();
    Eyebrown.stroke();
    Eyebrown.beginPath();

    var Eyes = theCanvas.getContext("2d");
    //left eyes
    Eyes.beginPath();
    Eyes.ellipse(90, 130, 50, 60, 45 * Math.PI, 0, 2 * Math.PI);
    Eyes.fillStyle = "#FFFFFF";
    Eyes.fill();
    Eyes.stroke();

    Eyes.beginPath();
    Eyes.arc(100, 130, 30, 0, 2 * Math.PI);
    Eyes.fillStyle = "#6699CC";
    Eyes.fill();
    Eyes.stroke();

    Eyes.beginPath();
    Eyes.arc(100, 130, 15, 0, 2 * Math.PI);
    Eyes.fillStyle = "#336699";
    Eyes.fill();
    Eyes.stroke();

    //right eyes
    Eyes.beginPath();
    Eyes.ellipse(310, 130, 50, 60, 45 * Math.PI, 0, 2 * Math.PI);
    Eyes.fillStyle = "#FFFFFF";
    Eyes.fill();
    Eyes.stroke();

    Eyes.beginPath();
    Eyes.arc(300, 130, 30, 0, 2 * Math.PI);
    Eyes.fillStyle = "#6699CC";
    Eyes.fill();
    Eyes.stroke();

    Eyes.beginPath();
    Eyes.arc(300, 130, 15, 0, 2 * Math.PI);
    Eyes.fillStyle = "#336699";
    Eyes.fill();
    Eyes.stroke();

    //cheek
    var cheek = theCanvas.getContext("2d");
    cheek.beginPath();
    cheek.ellipse(40, 210, 20, 10, 45 * Math.PI, 0, 2 * Math.PI);
    cheek.strokeStyle = "#FF6666";
    cheek.fillStyle = "#FF6666";
    cheek.fill();
    cheek.stroke();

    cheek.beginPath();
    cheek.ellipse(360, 210, 20, 10, 45 * Math.PI, 0, 2 * Math.PI);
    cheek.fillStyle = "#FF6666";
    cheek.fill();
    cheek.stroke();

    //pocket
    var pocket = theCanvas.getContext("2d");
    pocket.beginPath();
    pocket.rect(280, 320, 90, 15);
    pocket.strokeStyle = "black";
    pocket.fillStyle = "black";
    pocket.fill();
    pocket.stroke();
    pocket.beginPath();
    pocket.rect(280, 335, 90, 60);
    pocket.strokeStyle = "black";
    pocket.fillStyle = "#777777";
    pocket.fill();
    pocket.stroke();
    pocket.beginPath();
    pocket.rect(315, 335, 20, 60);
    pocket.stroke();



    var cloth = theCanvas.getContext("2d");
    //cloth
    cloth.beginPath();
    cloth.moveTo(200, 400);
    cloth.lineTo(200, 320);
    cloth.moveTo(250, 280);
    cloth.lineTo(200, 320);
    cloth.moveTo(150, 280);
    cloth.lineTo(200, 320);
    cloth.strokeStyle = "black";
    cloth.stroke();

    //mouth
    var mouth = theCanvas.getContext("2d");
    mouth.beginPath();
    mouth.arc(200, 180, 30, 0, 1 * Math.PI);
    mouth.strokeStyle = "#CC0033";
    mouth.fillStyle = "#ff5c23";
    mouth.fill();
    mouth.stroke();

    //button1
    var button = theCanvas.getContext("2d");
    button.beginPath();
    button.arc(220, 345, 8, 0, 2 * Math.PI);
    button.strokeStyle = "#FFFFFF";
    button.fillStyle = "black";
    button.fill();
    button.stroke();
    //button2
    button.beginPath();
    button.arc(220, 375, 8, 0, 2 * Math.PI);
    button.strokeStyle = "#FFFFFF";
    button.fillStyle = "black";
    button.fill();
    button.stroke();
    
    //words
    var words = theCanvas.getContext("2d");
    words.font = "25px Arial";
    words.fillStyle = "black";
    words.textAlign = "center";
    words.fillText("Happy", 320, 310); 

    var height = theCanvas.height; //get the heigth of the canvas
    var width = theCanvas.width; //get the width of the canvas

    // -------------------------------------------
    //Start your code here...



} //canvasApp()
