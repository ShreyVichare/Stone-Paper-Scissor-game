let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndx = Math.floor(Math.random() * 3);
    return options[randomIndx];
}

const draw = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw, Play again";
    msg.style.backgroundColor = "rgb(16, 8, 74)";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin == true) {
        userScore++;
        user_score.innerText = userScore;
        console.log("User is the winner");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else {
        compScore++;
        comp_score.innerText = compScore;
        console.log("Computer is the winner");
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if (userChoice === compChoice) {
        //Draw
        draw();
    } else {
        let userWin = true;
        if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;

        }
        if (userChoice === "scissor") {
            userWin = compChoice === "rock" ? false : true;

        }
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }


}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked ", userChoice);
        playGame(userChoice);
    });
});