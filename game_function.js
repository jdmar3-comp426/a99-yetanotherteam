window.onload = function() {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var getHint ;          // Word getHint
    var word ;              // Selected word
    var guess ;             // Geuss
    var geusses = [ ];      // Stored geusses
    var lives ;             // Lives
    var counter ;           // Count correct geusses
    var space;              // Number of spaces in word '-'

    //Get elements
    var showLives = document.getElementById("Lives");
    /*var showCategory = document.getElementById("");
    var getHint
    var showClue*/


    //Show lives
    comments = function()
    {
        if(lives < 1)
        {
            showLives.innerHTML = "Game Over";
            //Add further functionality TO END GAME HERE
        }
        for(var i = 0; i < geusses.length; i++)
        {
            if(counter + space === geusses.length)
            {
                showLives.innerHTML = "Winner!";
            }
        }
    }

    //Draw StickMan
    var animate = function()
    {
        drawArray[lives]();
    }    


}