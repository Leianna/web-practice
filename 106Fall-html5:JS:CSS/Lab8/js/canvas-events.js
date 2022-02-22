/*
    canvas-events.js
*/

//-----------------------------------------------------------
//When the page has fully loaded, execute the eventWindowLoaded function
window.addEventListener("load", eventWindowLoaded, false);
//-----------------------------------------------------------

//-----------------------------------------------------------
//eventWindowLoaded()
//Called when the window has been loaded it then calls the canvasapp() 
function eventWindowLoaded() {
    canvasApp();
} // eventWindowLoaded()
//-----------------------------------------------------------

//-----------------------------------------------------------
//canvasSupport() 
//Check for Canvas Support using modernizr.js
function canvasSupport() {
    return Modernizr.canvas;
} // canvasSupport()
//-----------------------------------------------------------

//-----------------------------------------------------------
//canvasApp() 
//The function where ALL our canvas code will go
function canvasApp() {

    //-----------------------------------------------------------
    //Check to see if the canvas has a context 
    if (!canvasSupport()) {
        return; //Canvas not supported so exit the function
    }

    //-----------------------------------------------------------
    //Setup the canvas object
    var theCanvas = document.getElementById("myCanvas"); //get the canvas element
    var context = theCanvas.getContext("2d"); //get the context
    var boxSizeDelta = 5;
    var boxSpeedDelta = 10;
    var canvasHeight = theCanvas.height; //get the heigth of the canvas
    var canvasWidth = theCanvas.width; //get the width of the canvas
    var canvasColor = "rgba( 255, 255, 255, 1)"; //canvas bg color

    // -----------------------------------------------------------
    //Setup the box control parameters
    var boxSizeMin = 10;
    var boxSizeMax = 50;
    var boxSpeedMin = 10;
    var boxSpeedMax = 50;

    // -----------------------------------------------------------
    //Setup the box object
    var box = {

        //position of box
        x: canvasWidth / 2 - (boxSizeMin / 2),
        y: canvasHeight / 2 - (boxSizeMin / 2),

        //size of the box
        size: boxSizeMin,

        //color of the box
        color: "rgba( 0, 0, 255, 1 )",

        //box speed
        speed: boxSpeedMin

    }; //box object

    // -----------------------------------------------------------
    //draw a box
    function drawBox() {

        context.beginPath();
        context.fillStyle = box.color;
        context.fillRect(box.x, box.y, box.size, box.size);
        context.closePath();

    } //drawBox()
    //-----------------------------------------------------------

    //-----------------------------------------------------------
    // clear canvas
    function clearCanvas() {

        context.fillStyle = canvasColor;
        context.fillRect(0, 0, canvasWidth, canvasHeight)

    } //  clearCanvas()

    //-----------------------------------------------------------
    //draw the canvas
    drawCanvas();


    //-----------------------------------------------------------
    //listen for key press
    window.addEventListener("keydown", eventKeyDown);
    //-----------------------------------------------------------
    //event handler for keydown
    function eventKeyDown(e) {
        var keyPressed = String.fromCharCode(e.keyCode);
        console.log("eventKeyDown():" + keyPressed);


        if (keyPressed == "A" || keyPressed == "a") {
            box.x -= box.speed; //move left in x
        } else if (keyPressed == "D" || keyPressed == "d") {
            box.x += box.speed; //move right in x
        } else if (keyPressed == "S" || keyPressed == "s") {
            box.y += box.speed; //move down in y
        } else if (keyPressed == "W" || keyPressed == "w") {
            box.y -= box.speed; //move up in y
        } else if (keyPressed == "Q" || keyPressed == "q") {
            box.y -= box.speed; //move up in y
            box.x -= box.speed; //move left in x
        } else if (keyPressed == "E" || keyPressed == "e") {
            box.y -= box.speed; //move up in y
            box.x += box.speed; //move right in x
        } else if (keyPressed == "Z" || keyPressed == "z") {
            box.y += box.speed; //move down in y
            box.x -= box.speed; //move left in x
        } else if (keyPressed == "C" || keyPressed == "c") {
            box.y += box.speed; //move down in y
            box.x += box.speed; //move right in x
        } else if (keyPressed == "M" || keyPressed == "m") {
            //change color
            var red = parseInt(Math.random() * 255);
            var green = parseInt(Math.random() * 255);
            var blue = parseInt(Math.random() * 255);
            box.color = "rgb(" + red + "," + green + "," + blue + ")";
        } else if (keyPressed == "I" || keyPressed == "i") {
            box.size += boxSizeDelta; //increase box size
            if (box.size > boxSizeMax) {
                box.size = boxSizeMax;
            }
        } else if (keyPressed == "K" || keyPressed == "k") {
            box.size -= boxSizeDelta; //decrease box size
            if (box.size < boxSizeMin) {
                box.size = boxSizeMin;
            }
        } else if (keyPressed == "J" || keyPressed == "j") {
            box.speed += boxSpeedDelta; //increase box speed
            if (box.speed > boxSpeedMax) {
                box.speed = boxSpeedMax;
            }
        } else if (keyPressed == "L" || keyPressed == "l") {
            box.speed -= boxSpeedDelta; //decrease box speed
            if (box.speed < boxSpeedMin) {
                box.speed = boxSpeedMin;
            }
        }

        if (box.x > canvasWidth - box.size) {
            box.x = canvasWidth - box.size;
        } //not out of right
        if (box.x < 0) {
            box.x = 0; //not out of leftttttrrrrttttrr
        } //not out of right
        if (box.y > canvasHeight - box.size) {
            box.y = canvasHeight - box.size;
        } //not out of bottom
        if (box.y < 0) {
            box.y = 0; //not out of top
        }

        //draw the canvas
        drawCanvas();
    } //eventKeyDown()

    //-----------------------------------------------------------
    // draw the canvas
    function drawCanvas() {

        //clear the canvas
        clearCanvas();

        // draw the box  
        drawBox();


    } // drawCanvas()


} //canvasApp()
//-----------------------------------------------------------
