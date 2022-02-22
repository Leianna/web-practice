/*
    canvasPoster.js
*/

// -----------------------------------------------------
//When the page has fully loaded, execute the eventWindowLoaded function
window.addEventListener("load", eventWindowLoaded, false);

// -----------------------------------------------------
//eventWindowLoaded()
//Called when the window has been loaded it then calls the canvasapp() 
function eventWindowLoaded() {
    canvasApp();
} // eventWindowLoaded()

// -----------------------------------------------------
//canvasSupport() 
//Check for Canvas Support using modernizr.js
function canvasSupport() {
    return Modernizr.canvas;
} // canvasSupport()

// -----------------------------------------------------
//canvasApp() 
//The function where ALL our canvas code will go
function canvasApp() {

    // -----------------------------------------------------
    //Check to see if the canvas has a context 
    if (!canvasSupport()) {
        return; //Canvas not supported so exit the function
    } //if

    // -----------------------------------------------------
    //Setup the canvas object
    var theCanvas = document.getElementById("myCanvas"); //get the canvas element
    var ctx = theCanvas.getContext("2d"); //get the context

    var height = theCanvas.height; //get the heigth of the canvas
    var width = theCanvas.width; //get the width of the canvas

    // -----------------------------------------------------
    // Setup Images
    // declare an array for image objects
    var images = [];

    // assign our image sources
    var imageSources = [
       "./images/1.jpg", //0
        "./images/1.png", //1
        "./images/2.png", //2
        "./images/3.png", //3
        "./images/4.png", //4
        "./images/5.png", //5
        "./images/6.png", //6
        "./images/7.png", //7


    ]; //imageSource    

    // -----------------------------------------------------    
    // loadImages()
    // load all the images
    function loadImages(images, imageSources, callback) {
        var loadedImages = 0;

        // for each imageSource
        for (var src = 0; src < imageSources.length; src++) {
            //create a new image object
            images[src] = new Image();

            //load the image 
            images[src].onload = function () {
                if (++loadedImages >= imageSources.length) {
                    callback(images);
                };
            }
            //set the image source
            images[src].src = imageSources[src];
        } //for
    } //loadimages()

    // -----------------------------------------------------
    //drawPoster()
    //draw the poster
    function drawPoster() {
        // -----------------------------------------------------
        // draw the background image to cover the entire canvas
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#666666";
        ctx.drawImage(images[0], 0, 0, width, height);

        // a character image in a specific location
        ctx.drawImage(images[4], 0, 0, width, 450); //水墨背景

        // draw the background image to cover the entire canvas
        ctx.drawImage(images[1], 0, 30, width, height);

        // -----------------------------------------------------
        // a character image in a specific location
        ctx.drawImage(images[2], 1, 1, 600, 360); //边框
        // -----------------------------------------------------     
        // a character image in a specific location
        ctx.drawImage(images[5], -20, 0, 400, 670); //一段记忆
        // a character image in a specific location
        ctx.drawImage(images[7], 440, 210, 250, 200); //竹子
        // a character image in a specific location
        ctx.drawImage(images[6], -190, 0, 250, 300); //竹子
        //————————————————————————————-

        ctx.font = "30px 宋体";
        ctx.fillText("JianNan,China", 70, 370);

        ctx.rotate(45 * Math.PI / 180);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(270, 210, 30, 30);







    } //drawPoster()


    // -----------------------------------------------------
    //load the images 
    loadImages(images, imageSources, function (images) {
        // draw the poster   
        drawPoster();
    });


} //canvasApp()
