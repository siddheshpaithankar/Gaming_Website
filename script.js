let user_choice = '';
let comp_choice = '';
let userScore = 0;
let compScore = 0;

// Select all choice elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#uscore");
const compScoreDisplay = document.querySelector("#cscore");
const userDisplay = document.querySelector("#user1");
const compDisplay = document.querySelector("#comp1");

// Draw game
const drawGame = () => {
    console.log("Draw Match");
    msg.innerText = "Draw Match";
    msg.style.backgroundColor = 'gray';
    
    // Display both choices in case of a draw
    displayChoice(user_choice, userDisplay);
    displayChoice(comp_choice, compDisplay);
};

// Show winner
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScoreDisplay.innerText = userScore;
        msg.innerText = `User Wins! Your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor = 'green';
    } else {
        compScore++;
        compScoreDisplay.innerText = compScore;
        msg.innerText = `User Loses! Your ${user_choice} is beaten by ${comp_choice}`;
        msg.style.backgroundColor = 'red';
    }
    
    // Set background color to gray for the choices
    userDisplay.style.backgroundColor = 'gray'; 
    compDisplay.style.backgroundColor = 'gray'; 
    
    // Display both choices regardless of the outcome
    displayChoice(user_choice, userDisplay);
    displayChoice(comp_choice, compDisplay);
};

// Random computer generated choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rndIdx = Math.floor(Math.random() * options.length);
    return options[rndIdx];
};

// Display choice image in user1 and comp1
const displayChoice = (choice, displayElement) => {
    const img = document.createElement('img');
    img.src = `${choice}.png`; // Ensure these images exist in the correct path
    img.alt = choice.charAt(0).toUpperCase() + choice.slice(1);
    img.classList.add('w-24', 'h-24', 'rounded-full', 'mt-2'); // Add rounded-full for circular shape

    displayElement.innerHTML = ''; // Clear previous image
    displayElement.appendChild(img); // Append the new image
};

// Play game
const playGame = (user_choice) => {
    console.log("User choice:", user_choice);

    // Computer choice
    comp_choice = genCompChoice();
    console.log("Computer choice:", comp_choice);

    // Check for a draw or win/loss
    if (user_choice === comp_choice) {
        drawGame();
    } else {
        let userWin = false;
        if ((user_choice === "rock" && comp_choice === "scissors") ||
            (user_choice === "paper" && comp_choice === "rock") ||
            (user_choice === "scissors" && comp_choice === "paper")) {
            userWin = true;
        }
        showWinner(userWin);
    }
};

// Add event listeners to choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        user_choice = choice.getAttribute("id");
        playGame(user_choice);
    });
});
