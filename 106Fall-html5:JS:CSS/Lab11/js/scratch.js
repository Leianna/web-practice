    //-----------------------------------------------------------
    //define a interval  
    var changeInterval = 1000;

    //-----------------------------------------------------------
    // add a circle the character 
    function newCircle() {

        //add new circle based on a change inverval
        if ( (frameCounter % changeInterval) == 0 ){
            
            //add a new circle
            addCircle();
            
        } //if

    } //newCircle()
