var number  = Math.floor(Math.random() * 100);
var guesses = [];
console.log(number);

// $(".js-guess").on("submit", function(e){
//     e.preventDefault();
//     var guessNumber = $(".js-number").val();
//     $(".js-number").val("");

//     if(guesses.indexOf(guessNumber) != -1){
//         alert("Du har redan gissat på nummer " + guessNumber);
//     } else if (guessNumber > number){
//         alert("Gissa lägre");
//     } else if (guessNumber < number) {
//         alert("Gissa högre");
//     } else {
//         alert("Rätt gissning");
//     }

//     guesses.push(guessNumber);
//     $(".js-guesses").html(guesses.toString());
//     $(".js-guesses-counter").html(guesses.length);
// });


document.querySelector('.js-guess').onsubmit = function(event){
    event.preventDefault();

    var guessNumber = document.querySelector(".js-number").value;
    document.querySelector(".js-number").value = '';

    if(guesses.indexOf(guessNumber) != -1){
        alert("Du har redan gissat på nummer " + guessNumber);
    } else if (guessNumber > number){
        alert("Gissa lägre");
    } else if (guessNumber < number) {
        alert("Gissa högre");
    } else {
        alert("Rätt gissning");
        document.querySelector(".js-guesses-correct").innerHTML = guessNumber;
        document.querySelector("button").disabled = true;
    }

    guesses.push(guessNumber);
    document.querySelector(".js-guesses").innerHTML = guesses.join(", ");
    document.querySelector(".js-guesses-counter").innerHTML = guesses.length;

}