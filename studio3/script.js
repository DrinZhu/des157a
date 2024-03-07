document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Selectors
    const newGameButton = document.querySelector('.new-game-button');
    const rollButton = document.querySelector('#roll');
    const holdButton = document.querySelectorAll('.roll-button')[1]; // Assuming the second roll-button is for holding
    const playerScores = [document.querySelector('#player1 .score'), document.querySelector('#player2 .score')];
    const currentScores = [document.querySelector('#currentScore1 .scoreNumber'), document.querySelector('#currentScore2 .scoreNumber')];
    const diceImages = document.querySelectorAll('.dice-placeholder img');
    const players = ['Player 1', 'Player 2'];

    // Game Data
    let gameData = {
        dice: ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'],
        score: [0, 0],
        currentScore: [0, 0],
        currentPlayer: 0, // Player 1 starts
        gameEnd: 30
    };

    // New Game
    newGameButton.addEventListener('click', function() {
        gameData.score = [0, 0];
        gameData.currentScore = [0, 0];
        gameData.currentPlayer = Math.floor(Math.random() * 2); // Randomly choose who starts
        updateScores();
        console.log('Game started');
    });

    // Roll Dice
    rollButton.addEventListener('click', function() {
        let roll1 = Math.floor(Math.random() * 6) + 1;
        let roll2 = Math.floor(Math.random() * 6) + 1;
        diceImages[0].src = gameData.dice[roll1 - 1];
        diceImages[1].src = gameData.dice[roll2 - 1];

        // Check rolls
        if(roll1 === 1 && roll2 === 1){
            console.log("Snake eyes!");
            gameData.score[gameData.currentPlayer] = 0;
            switchPlayer();
        } else if(roll1 === 1 || roll2 === 1){
            console.log("Rolled a one, switching player");
            switchPlayer();
        } else {
            gameData.currentScore[gameData.currentPlayer] += roll1 + roll2;
            updateScores();
        }
    });

    // Hold
    holdButton.addEventListener('click', function() {
        gameData.score[gameData.currentPlayer] += gameData.currentScore[gameData.currentPlayer];
        gameData.currentScore[gameData.currentPlayer] = 0;
        checkWinCondition() || switchPlayer();
    });

    function updateScores(){
    playerScores[0].textContent = gameData.score[0];
    playerScores[1].textContent = gameData.score[1];
    currentScores[0].textContent = gameData.currentScore[0];
    currentScores[1].textContent = gameData.currentScore[1];
}

    function switchPlayer(){
        // Add current score to the total score and reset current score for the player who just finished their turn
        gameData.score[gameData.currentPlayer] += gameData.currentScore[gameData.currentPlayer];
        
        // Check for win condition before switching
        if (!checkWinCondition()) {
            // Switch player
            gameData.currentPlayer = gameData.currentPlayer === 0 ? 1 : 0;
            
            // Update the scores to show the total and reset current score for the next player's turn
            gameData.currentScore[gameData.currentPlayer === 0 ? 1 : 0] = 0;
            updateScores();
            
            console.log(`${players[gameData.currentPlayer]}'s turn`);
        }
    }

    function checkWinCondition() {
        // Loop through each player to check their total score
        for (let i = 0; i < gameData.score.length; i++) {
            let totalScore = gameData.score[i] + gameData.currentScore[i];
            if (totalScore >= gameData.gameEnd) {
                alert(`${players[i]} wins!`);
                return true; // Exit the function once a win condition is met
            }
        }
        return false; // If no win condition is met, return false
    }
});
