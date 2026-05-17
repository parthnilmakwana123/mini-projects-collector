let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "green";
}

const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `User Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userchoice) => {
    const compChoice = genCompChoice();

    if (userchoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
