window.onload = function () {
    var word;                 // Selected word
    var correctWord;          // Guess
    var correctGuesses = [];  // Correct word
    var guesses = [];         // Stored guesses
    var lives;                // Lives
    var counter;              // Count correct guesses

    var context;              // Context for canvas

    // Get elements
    var showLives = document.querySelector(".js-lives");


    /* ----------- AVANCERADE GREJER ----------- */

      // Hangman
    canvas =  function(){
        myStickman = document.querySelector(".js-stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
    };
    head = function(){
        myStickman = document.querySelector(".js-stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
    }
    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    }
    frame1 = function() {
        draw (0, 150, 150, 150);
    };
    frame2 = function() {
        draw (10, 0, 10, 600);
    };
    frame3 = function() {
        draw (0, 5, 70, 5);
    };
    frame4 = function() {
        draw (60, 5, 60, 15);
    };
    torso = function() {
        draw (60, 36, 60, 70);
    };
    rightArm = function() {
        draw (60, 46, 100, 50);
    };
    leftArm = function() {
        draw (60, 46, 20, 50);
    };
    rightLeg = function() {
        draw (60, 70, 100, 100);
    };
    leftLeg = function() {
        draw (60, 70, 20, 100);
    };

    drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];


    result = function () {

    }

    // Show lives
    comments = function () {
    }

    // Animate man
    var animate = function () {
        var drawMe = lives;
        drawArray[drawMe]();
    }



    // Onsubmit Function
    document.querySelector('.js-guess').onsubmit = function(event){
    }

    // Play
    play = function () {
        word = prompt("Fyll i spelordet");
        if (word == null || word == "") {
            alert("Du måste fylla i ett ord.");
        } else {
            guesses = [ ];
            lives = 10;
            counter = 0;

            result();
            comments();
            canvas();
        }
    }

    play();

    // Reset
    document.querySelector('.js-reset').onclick = function() {
        if(correctWord !== undefined){
            correctWord.innerHTML = "";
        }

        if(context !== undefined){
            context.clearRect(0, 0, 400, 400);
        }

        play();
    }

}
