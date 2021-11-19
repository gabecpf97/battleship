import computerMove from './computerMove';
import player from './player';
import render from './render';

const startGame = () => {
    const player1 = player();
    const player2 = player();
    const ai_move = computerMove();

    player1.initMap();
    player2.initMap();
    _enemyAddListener(player1, player2, ai_move);

    render(player1.getBoard(), 'm');
    render(player2.getBoard(), 'e');
}

function _enemyAddListener(player1, player2, ai_move) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            document.querySelector(`.e_${i}${j}`)
                .addEventListener('click', () => {
                    if (!player1.getBoard().isAllSunk() && !player2.getBoard().isAllSunk()) {
                        _makeAMove(i, j, player1, player2, ai_move);
                    }
                });
        }
    }
}

function _makeAMove(i, j, player1, player2, ai_move) {
    player2.getBoard().receiveAttack(`${i}${j}`);
    render(player2.getBoard(), 'e');
    _player2Moves(player1, ai_move);
    _gameOver(player1, player2);
}

function _player2Moves(player1, ai_move) {
    const position = ai_move.makeRandomMove();
    player1.getBoard().receiveAttack(position);
    render(player1.getBoard(), 'm');
}

function _gameOver(player1, player2) {
    const winnerLabel = document.querySelector('.winnerLabel');
    if (player2.getBoard().isAllSunk()){
        winnerLabel.textContent = 'You win Congraduation!!!';
    } else if (player1.getBoard().isAllSunk()) {
        winnerLabel.textContent = 'AI wins, try again?';
    }
}

export default startGame;