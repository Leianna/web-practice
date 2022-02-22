/*
    canvasMultiMove.js
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
    //Array to handle all our circles
    var circles = [];

    // -----------------------------------------------------------
    //Setup the random circle paramaters

    function getCircle() {
        //size of the circle
        var circleSizeMin = 10;
        var circleSizeMax = 50;
        var circleSize = getRandom(circleSizeMin, circleSizeMax);

        // ----------------------------
        //random circle speed and direction
        var minSpeed = -15; //it will change the direction(any of the direction)
        var maxSpeed = 15;
        var startMoveX = getRandom(minSpeed, maxSpeed);
        var startMoveY = getRandom(minSpeed, maxSpeed);

        //color of the circle
        var circleColor = randomColor();

        // -----------------------------------------------------------
        //Setup the circle object
        var circle = {
            //position of circle
            x: getRandom(0, canvasWidth - circleSize / 2),
            y: getRandom(0, canvasHeight - circleSize / 2),

            //size of the circle
            size: circleSize,

            //color of the circle
            color: circleColor,

            //movement of the circle
            moveX: startMoveX,
            moveY: startMoveY
        };

        return circle;
    }

    // -----------------------------------------------------------
    //function randomize the circle color
    function randomColor() {
        //color of circle
        var opacity = getRandom(3, 10) / 10;

        return "rgba(" + getRandom(0, 255) + "," + getRandom(0, 255) + "," + getRandom(0, 255) + "," + opacity + ")";
    } //randomColor()


    // -----------------------------------------------------------
    //function to generate a new random circle and add it an array
    function addCircle() {
        var circle = getCircle();
        circles.push(circle);
    } //addCircle()
    function removeCircle() {
        circles.pop(circles[getRandom(0, circles.length)]);
    } //removeCircle()
    function regeneratesCircle() {
        for (var i = 0; i < circles.length; i++) {
            circles[i] = getCircle();
        }
    } //regeneratesCircle()
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

        //console.log( c.x + "," + c.y );

    } //drawCircle()  
    //-----------------------------------------------------------

    // -----------------------------------------------------------
    // move the circle inside the dimensions of the canvas
    function moveCircle(c) {

        // increment to the next location based on movement size
        c.x += c.moveX;
        c.y += c.moveY;

        // check boundaries of X axis (right and left)
        if ((c.x > canvasWidth - c.size / 2) || (c.x < c.size / 2)) {

            //change direction
            c.moveX *= -1;

        }

        // check boundaries of Y axis (bottom or top)
        if ((c.y > canvasHeight - c.size / 2) || (c.y < c.size / 2)) {

            //change direction
            c.moveY *= -1;

        }

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
        for (var i = 0; i < circles.length; i++) {
            var circle = circles[i];
            moveCircle(circle);
            //draw the circle
            drawCircle(circle);
        }
    } //drawCanvas()
    //-----------------------------------------------------------

    //-----------------------------------------------------------
    // draw the canvas

    //-----------------------------------------------------------
    // do any setup
    clearCanvas(canvasColor);

    // draw the canvas at a specific interval 
    var interval = 50;
    setInterval(drawCanvas, interval);

    //-----------------------------------------------------------
    //Add circle event listener and handler
    addButton.addEventListener("click", addCircle);
    deletButton.addEventListener("click", removeCircle);
    regeneratesButton.addEventListener("click", regeneratesCircle);


} //canvasApp()
