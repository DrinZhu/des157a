(function(){
    'use strict'
    console.log('reading JS');

    document.getElementById('start').addEventListener('click', function() {
        document.getElementById('overlay').classList.remove('hidden');
        document.getElementById("homePage").className = "show";

    });

    const start = document.getElementById('start')
    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const currentScore1 = document.querySelector('#currentScore1');
    const currentScore2 = document.querySelector('#currentScore2');

    const gameData = {
        dice: ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    const clickSound = new Audio('sounds/click-151673.mp3');
    const diceSound = new Audio('sounds/rolling-dice-2-102706.mp3');
    const startSound = new Audio('sounds/game-music-loop-7-145285.mp3');

    //console.log(gameData.players[gameData.index]);

    //This gets the current player: 
/*gameData.players[gameData.index]

//This gets the first die and the second die: 
gameData.dice[gameData.roll1-1]
gameData.dice[gameData.roll2-1]

//This gets the score of the current player: 
gameData.score[gameData.index]

//This gets the index, or turn
gameData.index

//This gets the individual dice values and the added dice value
gameData.roll1
gameData.roll2
gameData.rollSum

//This gets the winning threshold
gameData.rollSum*/

    startGame.addEventListener('click', function(){
        gameData.index = Math.round(Math.random());
        //console.log(gameData.index);

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit" class="click">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        //console.log("set up the turn");
        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.querySelector('#roll').addEventListener('click', function(){
            diceSound.play();
            //console.log('Roll the Dice');
            throwDice();
        })

    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`
        game.innerHTML += `<img src='${gameData.dice[gameData.roll1-1]}' class='dice-gap'><img src='${gameData.dice[gameData.roll2-1]}'>`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if(gameData.rollSum === 2){
            //console.log('snake eyes!');
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>'
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 2000);
            showCurrentScore()

        } else if ( gameData.roll1 === 1 || gameData.roll2 === 1 ) {
            //console.log("one of two dice was a 1");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>One of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        } else {
            //console.log("the game proceeds...")
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll Again</button>  <button id="pass">Pass</button>'
            document.getElementById('rollagain').addEventListener('click', function(){
                diceSound.play();
                setUpTurn();
            });
            document.getElementById('pass').addEventListener('click', function(){
                clickSound.play();
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
        
        }
        checkWinningCondition()   
    } //end throw the dice function

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = 'Start a new game?';

        } else {
            //show current score...
            score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;
            showCurrentScore()
        }
    }

    function showCurrentScore() {
        currentScore1.innerHTML = `${gameData.score[0]}`;
        currentScore2.innerHTML = `${gameData.score[1]}`;
    }

    //sound effect
    startGame.addEventListener('mousedown', function () {
        clickSound.play();
    });
    start.addEventListener('mousedown', function () {
        startSound.play();
    });

})();