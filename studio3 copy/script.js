(function(){
    'use strict'
    console.log('reading JS');

    const newGame = document.getElementById('startGame');
    const roll = document.getElementById('roll');
    const hold = document.getElementById('hold');

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

})();
