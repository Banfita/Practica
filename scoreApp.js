console.log("working");
const but1 = document.querySelector("#plusP1");
const but2 = document.querySelector("#plusP2");
const reset = document.querySelector("#reset");
const selectScore = document.querySelector("#playTo");
// first I set the variables with the correspond DOM
let p1Score = 0;
let p2Score = 0;
let winningScore = 7;
let isGameOver = false;
//then set a variable where the score is going to be save
const scoreP1 = document.querySelector("#scoreP1");
const scoreP2 = document.querySelector("#scoreP2");
//then set the other individual variables for score Player 1 and player 2

but1.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score += 1; //here I call the click event with the f(x) and tell it to add  ++ to the score variable
        if (p1Score === winningScore) {
            isGameOver = true;
            scoreP1.classList.add("win");
            scoreP2.classList.add("lose");
        }
        scoreP1.textContent = p1Score; // then tell the scorekeeper to show it in the display
    }

    // scoreP1.style.color = black;
})

but2.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score += 1; //here I call the click event with the f(x) and tell it to add  ++ to the score variable
        if (p2Score === winningScore) {
            isGameOver = true;
            scoreP2.classList.add("win");
            scoreP1.classList.add("lose");
        }
        scoreP2.textContent = p2Score; // then tell the scorekeeper to show it in the display
    }
})

selectScore.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    restart()
})

reset.addEventListener("click", restart)

function restart() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    scoreP1.textContent = p1Score;
    scoreP2.textContent = p2Score;
    scoreP1.classList.remove("win", "lose");
    scoreP2.classList.remove("win", "lose");
}

// const maxScore = document.querySelector('#maxScore');
// const maxScore = document.querySelector("select")
// if (p1Score == maxScore) {
//     scoreP1.style.color = green;
// }

