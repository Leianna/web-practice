/*
    canvasBounce.js
*/

//When the page has fully loaded, execute the eventWindowLoaded function
window.addEventListener("load", eventWindowLoaded, false);

//-----------------------------------------------------------
//eventWindowLoaded()
//Called when the window has been loaded it then calls the canvasapp() 
function eventWindowLoaded() {
    canvasApp();
} // eventWindowLoaded()

//-----------------------------------------------------------
//canvasSupport() 
//Check for Canvas Support using modernizr.js
function canvasSupport() {
    return Modernizr.canvas;
} // canvasSupport()

//-----------------------------------------------------------
//canvasApp() 
//The function where ALL our canvas code will go
function canvasApp() {

    //-----------------------------------------------------------
    //Check to see if the canvas has a context 
    if (!canvasSupport()) {
        return; //Canvas not supported so exit the function
    }

    // -----------------------------------------------------------
    //function for getting a random number with in a range	
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    } //getRandom

    //-----------------------------------------------------------
    //Setup the canvas object
    var theCanvas = document.getElementById("myCanvas");
    var context = theCanvas.getContext("2d");

    //get the canvas dimensions
    var canvasHeight = theCanvas.height;
    var canvasWidth = theCanvas.width;

    //define a canvas color
    var canvasColor = "#ffffff";

    // -----------------------------------------------------------
    //Setup the random circle paramaters

    var circlSizeMin = 10;
    var circlSizeMax = 50;
    //size of the circle
    var circleSize = getRandom(circlSizeMin, circlSizeMax);

    //movement of circle
    var circlSpeedMin = 20;
    var circlSpeedMax = 40;
    var circleSpeed = getRandom(circlSpeedMin, circlSpeedMax);

    //color of the circle
    var circleColor = "rgba( 0, 255, 0, 1)";

    // -----------------------------------------------------------
    //Setup the circle object
    var circle = {
        //position of circle
        x: canvasWidth / 2,
        y: canvasHeight / 2,

        //size of the circle
        size: circleSize,

        //color of the circle
        color: circleColor,

        //movement of the circle
        moveX: circleSpeed,
        moveY: circleSpeed
    };

    // -----------------------------------------------------------
    //function to draw circle
    function drawCircle(c) {

        //start path
        context.beginPath();
        //draw circle    
        context.arc(c.x, c.y, c.size / 2, 0, Math.PI * 2);
        //set fill color
        context.fillStyle = c.color;
        //fill the circle
        context.fill();
        //close path
        context.closePath();

        console.log(c.x + "," + c.y);

    } //drawCircle()  
    //-----------------------------------------------------------

    // -----------------------------------------------------------
    // move the circle inside the dimensions of the canvas
    function moveCircle(c) {
        var red = getRandom(0,255);
        var green = getRandom(0,255);
        var blue = getRandom(0,255);
        var opacity = Math.random();
        var circleColor = "rgba(" + red +", " + green + ", " + blue + ", " + opacity +")";
        // increment to the next location based on movement size
        c.x += c.moveX;
        c.y += c.moveY;
        // check boundaries of X axis (right and left)
        if (c.x > canvasWidth - circleSize / 2) {
            c.x = canvasWidth - circleSize / 2;
            c.moveX = -c.moveX;
            c.color = circleColor;
        }
        if (c.x < circleSize / 2) {
            c.x = circleSize / 2;
            c.moveX = -c.moveX;
            c.color = circleColor;
        }
        if (c.y > canvasHeight - circleSize / 2) {
            c.y = canvasHeight - circleSize / 2;
            c.moveY = -c.moveY;
            c.color = circleColor;
        }
        if (c.y < circleSize / 2) {
            c.y = circleSize / 2;
            c.moveY = -c.moveY;
            c.color = circleColor;
        }

        // check boundaries of Y axis (bottom or top)


    } //moveCircle() 
    //-----------------------------------------------------------

    // clear canvas
    function clearCanvas(color) {

        context.fillStyle = color;
        context.fillRect(0, 0, canvasWidth, canvasHeight);

    } //clearCanvas()

    //-----------------------------------------------------------
    //draw the canvas
    function drawCanvas() {

        //console.log( "in drawCanvas()" );

        //clear the canvas
        clearCanvas(canvasColor);

        //move the circle
        moveCircle(circle);

        //draw the circle
        drawCircle(circle);

    } //drawCanvas()
    //-----------------------------------------------------------

    //-----------------------------------------------------------
    // draw the canvas
    //-----------------------------------------------------------
    // draw the canvas at a specific interval 
    drawCanvas();
    setInterval(drawCanvas,100);

    //-----------------------------------------------------------

} //canvasApp()
