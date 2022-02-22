/*
    canvas-events.js
*/

//When the page has fully loaded, execute the eventWindowLoaded function
window.addEventListener("load", eventWindowLoaded);

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

    //-----------------------------------------------------------
    //Setup the canvas object
    var theCanvas = document.getElementById("myCanvas");
    var context = theCanvas.getContext("2d");
    //get the canvas dimensions
    var canvasHeight = theCanvas.height;
    var canvasWidth = theCanvas.width;
    //define a canvas color
    var canvasColor = "#FDFFFC";

    //click status
    var isClickMove = false;
    //image data
    var imageData = context.createImageData(canvasWidth, canvasHeight);
    //fill image data with white (255,255,255)
    for (var i = 0; i < imageData.data.length; i++) {
        imageData.data[i] = 255;
    }

    // -----------------------------------------------------------
    //Setup the circle object
    var circle = {

        //position of circle
        x: canvasWidth / 2,
        y: canvasHeight / 2,

        //size of the circle
        size: 50,

        //color of the circle
        color: "#FF8C61"

    };

    function eventMouseDown(e) {
        isClickMove = true;
    }

    function eventMouseUp(e) {
        isClickMove = false;
    }

    // -----------------------------------------------------------
    //function to draw a circle based on the values in the object circle
    function drawCircle() {
        //start path
        context.beginPath();

        //draw circle    
        context.arc(circle.x, circle.y, circle.size / 2, 0, Math.PI * 2);
        context.stroke();
        //set stroke color
        context.strokeStyle = circle.color;

        //set fill color
        context.fillStyle = circle.color;
        context.fill();

    }//drawCircle()
    
        //-----------------------------------------------------------
    //move the circle location with the mouse coords
    function eventMouseMove(e) {

        //make sure it is listening
        circle.x = e.offsetX;
        circle.y = e.offsetY;
        //var coor = "Coordinates: (" + x + "," + y + ")";
        //var status = document.getElementById('status');
        console.log("eventMouseMove():" + e.offsetX + ":" + e.offsetY);
        //re-draw the canvas
        drawCanvas();
    } //eventMouseMove


    //-----------------------------------------------------------
    //change the circle color by click
    document.getElementById("myCanvas").addEventListener("click", changeColor);

    function changeColor() {
        var red = parseInt(Math.random() * 255);
        var green = parseInt(Math.random() * 255);
        var blue = parseInt(Math.random() * 255);

        circle.color = "rgb(" + red + "," + green + "," + blue + ")";

        //draw the new circle
        drawCanvas();
    }
    

    function saveImage() {
        imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
    }

    function restoreImage() {
        context.putImageData(imageData, 0, 0)
    }
    

    //-----------------------------------------------------------
    // clear canvas
    function clearCanvas() {

        // set a fill style of white
        context.fillStyle = canvasColor;

        // fill the while canvas with the fill style
        context.fillRect(0, 0, canvasWidth, canvasHeight);

    } //  clearCanvas()


    //-----------------------------------------------------------
    //draw the canvas
    function drawCanvas() {

        //clear the canvas
        clearCanvas();

        restoreImage();

        //draw the circle
        drawCircle();

        if (isClickMove) {
            saveImage();
        }

    } //drawCanvas()

    //if at the left border
    if (circle.x < circle.size / 2) {
        circle.x = circle.size / 2;
    }

    //if at the right border
    if (circle.x > canvasWidth - circle.size / 2) {
        circle.x = canvasWidth - circle.size / 2
    }

    //-----------------------------------------------------------
    // Event Listeners and Handlers
    myCanvas.addEventListener("mousemove", eventMouseMove, true);
    myCanvas.addEventListener("mousedown", eventMouseDown);
    myCanvas.addEventListener("mouseup", eventMouseUp);

    //-----------------------------------------------------------
    // draw the canvas  
    drawCanvas();
    //-----------------------------------------------------------

} //canvasApp()
