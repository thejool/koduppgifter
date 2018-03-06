window.onload = function () {
    var word;              // Selected word
    var guess;             // Guess
    var correct;           // Correct word
    var guesses = [ ];     // Stored guesses
    var lives;             // Lives
    var counter;           // Count correct guesses
    var context;           // Context for canvas

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


    // Create guesses ul
    result = function () {
        wordHolder = document.querySelector('.js-word-holder');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');

            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    // Show lives
    comments = function () {
        showLives.innerHTML = "Du har " + lives + " liv";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }

        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showLives.innerHTML = "You Win!";
            }
        }
    }

    // Animate man
    var animate = function () {
        var drawMe = lives;
        drawArray[drawMe]();
    }



    // Onsubmit Function
    document.querySelector('.js-guess').onsubmit = function(event){
        event.preventDefault();
        var guess = (document.querySelector(".js-guess-letter"));

        for (var i = 0; i < word.length; i++) {
            if (word[i] === guess.value) {
                guesses[i].innerHTML = guess.value;
                counter += 1;
            }
        }

        var j = (word.indexOf(guess.value));
        if (j === -1) {
            lives -= 1;
            comments();
            animate();
        } else {
            comments();
        }

        guess.value = "";
    }

    // Play
    play = function () {
        word = prompt("Fyll i spelordet");
        if (word == null || word == "") {
            alert("Du måste fylla i ett ord.");
        } else {
            word = word.replace(/\s/g, "-");
            console.log(word);

            guesses = [ ];
            lives = 10;
            counter = 0;
            space = 0;

            result();
            comments();
            canvas();
        }
    }

    play();

    // Reset
    document.querySelector('.js-reset').onclick = function() {
        if(correct !== undefined){
            correct.parentNode.removeChild(correct);
        }

        if(context !== undefined){
            context.clearRect(0, 0, 400, 400);
        }

        play();
    }

}
