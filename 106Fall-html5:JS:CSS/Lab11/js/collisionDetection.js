/*
    collisionDetection.js
*/

/* ************************************************************* */
//When the page has fully loaded, execute the eventWindowLoaded function
window.addEventListener("load", eventWindowLoaded, false);

/* ************************************************************* */
//eventWindowLoaded()
//Called when the window has been loaded it then calls the canvasapp() 
function eventWindowLoaded() {
    canvasApp();
} // eventWindowLoaded()

/* ************************************************************* */
//canvasSupport() 
//Check for Canvas Support using modernizr.js
function canvasSupport() {
    return Modernizr.canvas;
} // canvasSupport()

/* ************************************************************* */
//canvasApp() 
//The function where ALL our canvas code will go
function canvasApp() {

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Canvas Support */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    /*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
    //Check to see if the canvas has a context 
    if (!canvasSupport()) {
        return;
    } //if 

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    // Utility Fuctions 
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    // -----------------------------------------------------------
    //function for getting a random number with in a range	
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    } //getRandom


    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Canvas Variables */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    //-----------------------------------------------------------
    //Setup the canvas object
    var theCanvas = document.getElementById("myCanvas"); //get the canvas element
    var context = theCanvas.getContext("2d"); //get the context
    var canvasHeight = theCanvas.height; //get the heigth of the canvas
    var canvasWidth = theCanvas.width; //get the width of the canvas
    var canvasColor = "white"; //starting bg color
    var circles = [];

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Object Variables */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    //-----------------------------------------------------------
    //define a frame counter
    var frameCounter = 0;

    //-----------------------------------------------------------    
    // The Paddle

    //paddle control variables
    var paddleWidth = 60;
    var paddleHeight = 10;
    var paddleLevel = canvasHeight - (paddleHeight * 1.5);

    //paddle
    var paddle = {
        x: (canvasWidth / 2) - (paddleWidth / 2),
        y: paddleLevel,
        h: paddleHeight,
        w: paddleWidth,
        color: "blue"
    }; //paddle {}

    //-----------------------------------------------------------    
    // The Circle

    // ----------------------------------------------
    //randomize circle

    //size of the circle
    function newCircle() {
        var circleMinSize = 10;
        var circleMaxSize = 30;
        var circleSize = getRandom(circleMinSize, circleMaxSize);

        //starting position
        var circleX = getRandom(circleSize / 2, canvasWidth - circleSize / 2);
        var circleY = (0 - circleSize / 2);

        //movement of circle
        var circleMinSpeed = 5;
        var circleMaxSpeed = 10;
        var circleSpeed = getRandom(circleMinSpeed, circleMaxSpeed);

        //color of the circle
        var circleColor = "red";

        // ----------------------------------------------
        //circl
        var circle = {
            x: circleX,
            y: circleY,
            size: circleSize,
            color: circleColor,
            speed: circleSpeed,
            direction: 1
        };
        //console.log(circles.length);
        //console.log(circle.x+':'+circle.y);
        circles.push(circle); //circle {}
    }
    /*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
    // The paddle
    /*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

    //-----------------------------------------------------------
    //draw a paddle
    function drawPaddle(p) {

        context.beginPath();
        context.fillStyle = p.color;
        context.fillRect(p.x, p.y, p.w, p.h);
        context.closePath();

    } //drawpaddle()

    //-----------------------------------------------------------
    //move the paddle based on mouse coordinates 
    function movePaddle(mouseX, mouseY) {

        //change the location of the paddle to follow the mouse across the bottom 
        paddle.x = mouseX;

        //keep the paddle within the canvas boundaries
        // if at the left border
        if (paddle.x <= 0) {

            // stay at the left border
            paddle.x = 0;

        }

        // if at right border
        if (paddle.x >= canvasWidth - paddle.w) {

            // stay at right border
            paddle.x = canvasWidth - paddle.w;

        }

    } //movePaddle()


    /*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
    // The Circle
    /*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

    //-----------------------------------------------------------
    //draw circle
    function drawCircle(c) {

        context.beginPath();
        context.arc(c.x, c.y, c.size / 2, 0, (2 * Math.PI));
        context.fillStyle = c.color;
        context.fill();
        context.closePath();

    } //drawCircle()

    //-----------------------------------------------------------
    //move circle 
    function moveCircle(c) {

        //move the circle down
        c.y += c.speed;

        //check the top of the circle for the bottom of the canvas
        if (c.y > canvasHeight + c.size / 2) {

            //re-set X to a random location
            c.x = getRandom((c.size / 2), (canvasWidth - c.size / 2));

            //re-set Y to above the canvas
            c.y = 0 - c.size / 2;
        } //if

    } //moveCircle()

    function moveCircleBackwards(c) {
        c.y -= c.speed;

        if (c.y < -c.size / 2) {
            c.speed = 0;
            for (var i = 0; i < circles.length; i++) {
                if (circles[i] === c) {
                    circles.splice(i, 1);
                    break;
                }
            }
        }
    }

    /*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
    // Check Collisions
    /*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

    //-----------------------------------------------------------
    //check collisions between box and circle
    function checkCollision(c) {

        //setup object1 dimensions

        var object1X = paddle.x;
        var object1Y = paddle.y;
        var object1W = paddle.w;
        var object1H = paddle.h;


        //setup object2 dimensions
        var i;
        for (i = 0; i < circles.length; i++) {
            var object2X = circles[i].x - (circles[i].size / 2);
            var object2Y = circles[i].y - (circles[i].size / 2);
            var object2W = circles[i].size;
            var object2H = circles[i].size;
            //check if the box is in contact with the circle
            if (object1X < object2X + object2W &&
                object1X + object1W > object2X &&
                object1Y < object2Y + object2H &&
                object1Y + object1H > object2Y) {

                //write out the object locations for debugging
                console.log("collision: " +
                    "object1 " + object1X + ":" +
                    object1Y + ":" +
                    object1W + ":" +
                    object1H + " " +
                    "object2 " + object2X + ":" +
                    object2Y + ":" +
                    object2W + ":" +
                    object2H + ":" + "index" + i);

                //->change circle direction to move backwards
                circles[i].direction = 0;

                //->Make the circle stop moving and change its color          
                // stop
                // circles[i].speed = 0;
                // circles[i].color = "green";
                // circles.splice(i, 1);
            } //if
        }
    } //checkCollisionRectangle()

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Clear and Draw Canvas */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    //-----------------------------------------------------------
    //write the frame counter to the canvas and HTML page
    function writeFrameCounter(frameCounter) {

        //build the frame counter message
        var message = "Frame: " + frameCounter;

        //write the frame counter on the canvas
        context.fillStyle = "black";
        context.font = "18px Orbitron";
        context.fillText(message, 5, 25);

    } //writeFrameCounter()


    //-----------------------------------------------------------
    // clear canvas
    function clearCanvas(canvasColor) {

        // set a fill style of white
        context.fillStyle = canvasColor;

        // fill the while canvas with the fill style
        context.fillRect(0, 0, canvasWidth, canvasHeight);

    } //clearCanvas()

    //-----------------------------------------------------------
    //draw the canvas
    function drawCanvas() {


        //1. clear the canvas
        clearCanvas(canvasColor);
        //clearCanvas(canvasColor);

        //2. move objects
        //moveCircle( circle );
        for (var i = 0; i < circles.length; i++) {
            if (circles[i].direction == 1) {
                moveCircle(circles[i]);
            } else {
                moveCircleBackwards(circles[i]);
            }
            drawCircle(circles[i]);
        }
        //3. draw objects
        drawPaddle(paddle);
        //4. check for collisions
        checkCollision();
        //5. write the frame counter
        writeFrameCounter(frameCounter);

    } //drawCanvas()

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Event Listeners & Handlers */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    //-----------------------------------------------------------
    //listen for the mouse moving on the canvas and call mousecoords
    theCanvas.addEventListener("mousemove", eventMouseMove, true);

    //-----------------------------------------------------------
    //mouse coordinates event handler that also moves the paddle
    function eventMouseMove(e) {

        //move the paddle based on the mouse X and Y
        movePaddle(e.offsetX, e.offsetY);

    } //eventMouseMove()

    /*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
    // Game Loop
    /*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

    //-----------------------------------------------------------
    // the game loop
    function gameLoop() {
        requestAnimationFrame(gameLoop);

        //increment the frame counter
        frameCounter++;

        //add a new circle at an interval
        if (frameCounter % 100 == 0) {
            newCircle();
        }
        //draw the canvas
        drawCanvas();
    } // gameLoop()

    //-----------------------------------------------------------
    //start the game loop
    newCircle();
    gameLoop();

} // canvasApp()
