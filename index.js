'use strict';

let count = 0;

let randomNumber = Math.floor(Math.random() * 101);

function switcher() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    if (document.body.className == "light-theme") {
        this.textContent = "Dark Theme";
    }

    else {
        this.textContent = "Light Theme"
    }
}

function guessCheck() {
    count++;
    var guess = document.getElementById("userGuess").value;
    if (guess > 100 || guess < 0 && guess != randomNumber) {
        alert("Not a valid input!");
        count--;
    }
    else if (guess == randomNumber) {
        alert("Your guess was correct!");
        document.getElementById("lastGuess").innerHTML = guess;
        document.getElementById("Congrats").innerHTML = "Congratulations!"
    }
    else {
        if (guess < randomNumber) {
            alert("Higher!");
            document.getElementById("lastGuess").innerHTML = guess;
        }
        else {
            alert("Lower!");
            document.getElementById("lastGuess").innerHTML = guess;
        }
        document.getElementById("guessCounter").innerHTML = "Guesses left:"
        document.getElementById("count").innerHTML = 10 - count;
    }
    if (count >= 10) {
        alert("You are out of guesses!");
        document.getElementById("Sorry").innerHTML = "Sorry, you lose!";
        document.getElementById("count").innerHTML = 10 - count;
    }
}

const themeSwitcher = document.querySelector('.button');

themeSwitcher.addEventListener('click', switcher);