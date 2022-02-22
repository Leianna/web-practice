/*
    canvas-animation.js
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

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Canvas Support */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    //-----------------------------------------------------------
    //Check to see if the canvas has a context 
    if (!canvasSupport()) {
        return; //Canvas not supported so exit the function
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Math Utility Fuctions */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //get a random number with in a range	
    var gameover = false;

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    } //getRandom()
    var circlesColor = ["#C14242", "#F3BA58", "#A3DE44", "#44DEC9", "#3F61BF", "#A844DE"];

    function getRandomColor() {
        return circlesColor[getRandom(0, circlesColor.length)];

    }


    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Image Utility Variables and Functions */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    //-----------------------------------------------------------
    // declare an array to hold the image objects
    var images = [];

    //declare an array for image sources and assign the image sources
    var imageSources = [
        //bg Image
        "../images/bgImage.jpg"
    ]; //imageSource    

    // Image Location Variables
    var bgImageIndex = 0;

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // create and load image objects into an array 
    // based on an image source array
    function loadImages(images, imageSources, callback) {
        var loadedImages = 0;

        //- - - - - - - - - - - - - - - - - - - - -
        // for each imageSource
        for (var src = 0; src < imageSources.length; src++) {

            //- - - - - - - - - - - - - - - - - - - - -
            //create a new image object
            images[src] = new Image();

            //- - - - - - - - - - - - - - - - - - - - -
            //load the image 
            images[src].onload = function () {
                if (++loadedImages >= imageSources.length) {
                    callback(images);
                }; //if
            } //onload()

            //- - - - - - - - - - - - - - - - - - - - -
            //set the image source
            images[src].src = imageSources[src];

        } //for

        console.log(images);
    } //loadimages()
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Canvas Variables */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    //-----------------------------------------------------------
    //Setup the canvas object
    var theCanvas = document.getElementById("myCanvas"); //get the canvas element
    var context = theCanvas.getContext("2d"); //get the context
    var canvasHeight = theCanvas.height; //get the heigth of the canvas
    var canvasWidth = theCanvas.width; //get the width of the canvas
    var canvasColor = "rgba(0, 0, 0, 1)"; // set the default canvas bg color
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
        color: getRandomColor()
    }; //paddle {}

    //-----------------------------------------------------------    
    // The Circle
    var circles = [];
    var circleGeneratingInterval = 100;

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
        var circleMinSpeed = 3;
        var circleMaxSpeed = 7;
        var circleSpeed = getRandom(circleMinSpeed, circleMaxSpeed);

        //color of the circle
        var circleColor = getRandomColor();

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
    //-----------------------------------------------------------
    //sound variables

    //audio object
    var FTSound = new Audio('audio/FT.mp3');
    var FTESound = new Audio('audio/FTError.mp3');
var SciFiSound = new Audio('audio/BG.mp3');
    //interval to play sounds
    var soundIntervalOff = 0;
    var soundIntervalOn = 1000;
    var soundInterval = soundIntervalOn;

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Event Listeners & Handlers */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    //-----------------------------------------------------------
    //listen for the mouse moving on the canvas and call mousecoords
    theCanvas.addEventListener("mousemove", eventMouseMove, true);
    restartButton.addEventListener("click", reset);
    //-----------------------------------------------------------
    //mouse coordinates event handler that also moves the paddle
    function eventMouseMove(e) {

        //move the paddle based on the mouse X and Y
        movePaddle(e.offsetX, e.offsetY);

    } //eventMouseMove()

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Object Functions */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    //-----------------------------------------------------------
    // function to write the frame counter to the canvas and HTML page
    function writeFrameCounter(frameCounter) {

        //build the frame counter message
        var message = "Frame: " + frameCounter;

        //write the frame counter on the canvas
        context.fillStyle = "black";
        context.font = "20px Orbitron";
        context.fillText(message, 5, 20);

        //write the frame counter on the HTML page


    } //writeFrameCounter()

    function writecirclecolor(countRed, countOrange, countGreen, countlightblue, countdarkblue, countPurple) {
        //build the frame counter message
        var message1 = "Red: " + countRed + " ||Orange: " + countOrange + " ||Green: " + countGreen + " ||LightBlue: " + countlightblue + " ||DarkBlue: " + countdarkblue + " ||Purple: " + countPurple;

        //write the frame counter on the canvas
        context.fillStyle = "black";
        context.font = "20px Orbitron";
        context.fillText(message1, 265, 20);


    } //writeFrameCounter()
    function writegameover() {
        //build the frame counter message
        var message2 = "◆Game Over!◆"

        //write the frame counter on the canvas
        context.fillStyle = "black";
        context.font = "40px Orbitron";
        context.fillText(message2, 350, 250);


    } //writeFrameCounter()


    function reset() {
        circles = [];
        frameCounter = 0;
        gameover = false;
        countRed = getRandom(5, 10);
        countOrange = getRandom(5, 10);
        countGreen = getRandom(5, 10);
        countlightblue = getRandom(5, 10);
        countdarkblue = getRandom(5, 10);
        countPurple = getRandom(5, 10);

    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Sound Object Functions */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    //-----------------------------------------------------------
    // play a  sound
    function playSciFiSound() {

        //play the turkey sound
        SciFiSound.play();

    } //playMySound() 
    function playFTSound() {

        //play the turkey sound
        FTSound.play();

    } //playMySound()
    function playFTESound() {

        //play the turkey sound
        FTESound.play();

    } //playMySound()

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Draw Object Functions */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    //put any draw functions here...

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
                if (circles[i] == c) {
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

                //change circle direction to move backwards
                circles[i].direction = 0
                checkCount(circles[i]);
            } //if
        }
    } //checkCollisionRectangle()

    var countRed = getRandom(5, 10);
    var countOrange = getRandom(5, 10);
    var countGreen = getRandom(5, 10);
    var countlightblue = getRandom(5, 10);
    var countdarkblue = getRandom(5, 10);
    var countPurple = getRandom(5, 10);
    function checkCount(circle) {
        if (countRed == 0 && countOrange == 0 && countGreen == 0 && countlightblue == 0 && countdarkblue == 0 && countPurple == 0) {
            gameover = true;
        }
        if (circle.color == "#C14242") {
            if (countRed >= 1) {
                countRed = countRed - 1;
                playFTSound();
            }
        } else if (circle.color == "#F3BA58") {
            if (countOrange >= 1) {
                countOrange = countOrange - 1;
                playFTSound();
            }
        } else if (circle.color == "#A3DE44") {
            if (countGreen >= 1) {
                countGreen = countGreen - 1;
                playFTSound();
            }
        } else if (circle.color == "#44DEC9") {
            if (countlightblue >= 1) {
                countlightblue = countlightblue - 1;
                playFTSound();
            }
        } else if (circle.color == "#3F61BF") {
            if (countdarkblue >= 1) {
                countdarkblue = countdarkblue - 1;
                playFTSound();
            }
        } else if (circle.color == "#A844DE") {
            if (countPurple >= 1) {
                countPurple = countPurple - 1;
                playFTSound();
            }
        }
        //check
        console.log("Red: " + countRed + " ||Orange: " + countOrange + " ||Green: " + countGreen + " ||LightBlue: " + countlightblue + " ||DarkBlue: " + countdarkblue + " ||Purple: " + countPurple);



    }


    //-----------------------------------------------------------
    // draw the BG Image
    function drawBGImage() {

        //draw the bg image to fill the canvas
        context.drawImage(images[bgImageIndex], 0, 0, canvasWidth, canvasHeight);

    } //drawBGImage

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Clear and Draw Canvas */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    //-----------------------------------------------------------
    // clear canvas
    function clearCanvas(canvasColor) {

        // set a fill style of white
        context.fillStyle = canvasColor;

        // fill the while canvas with the fill style
        context.fillRect(0, 0, canvasWidth, canvasHeight);

        writegameover();

    } //  clearCanvas()

    //-----------------------------------------------------------
    //draw the canvas
    function drawCanvas() {

        //--------------------------------------------
        //1. clear and setup the canvas

        //clear the canvas
        clearCanvas(canvasColor);

        //draw the bg image
        drawBGImage();

        //--------------------------------------------
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
        writecirclecolor(countRed, countOrange, countGreen, countlightblue, countdarkblue, countPurple);


    } //drawCanvas()

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /* Game Loop */
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    // -----------------------------------------------------------
    // the game loop
    function gameLoop() {

        //get the next animation frame
        requestAnimationFrame(gameLoop);

        //increment the frame counter
        frameCounter++;
        if (gameover == true) {
            playSciFiSound();
            return clearCanvas("white");
        }


        //play a sound based on an interval

        if ((frameCounter % circleGeneratingInterval) == 0) {
            newCircle();
        }

        //draw the canvas
        drawCanvas();

    } //gameLoop()

    // -----------------------------------------------------------
    // do any setup
    frameCounter = 0;

    //load the images and then call gameLoop()
    loadImages(images, imageSources, function (images) {
        newCircle();

        //call game loop
        gameLoop();

    });



} //canvasApp()
