import computerMove from './computerMove';
import player from './player';
import render from './render';

const startGame = () => {
    const player1 = player();
    const player2 = player();
    const ai_move = computerMove();
    const myMoves = new Set();

    player1.initMap();
    player2.initMap();
    _enemyAddListener(player1, player2, ai_move);

    render(player1.getBoard(), 'm');
    render(player2.getBoard(), 'e');

    function _enemyAddListener() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const square = document.querySelector(`.e_${i}${j}`);
                square.classList.add('changeCursor');
                square.addEventListener('click', () => {
                        _checkEachMoves(i, j);
                    });
            }
        }
    }

    function _checkEachMoves(i, j) {
        let allSunk = !player1.getBoard().isAllSunk() && !player2.getBoard().isAllSunk();
        let moved = myMoves.has(`${i}${j}`);
        if (allSunk && !moved) {
            if (!moved) {
                _makeAMove(i, j);
                myMoves.add(`${i}${j}`);
                document.querySelector(`.e_${i}${j}`).classList.remove('changeCursor');
            }
        }
    }
    
    function _makeAMove(i, j) {
        player2.getBoard().receiveAttack(`${i}${j}`);
        render(player2.getBoard(), 'e');
        _player2Moves();
        _gameOver();
    }
    
    function _player2Moves() {
        const position = ai_move.makeRandomMove();
        player1.getBoard().receiveAttack(position);
        render(player1.getBoard(), 'm');
    }
    
    function _gameOver() {
        const winnerLabel = document.querySelector('.winnerLabel');
        if (player2.getBoard().isAllSunk()){
            winnerLabel.textContent = 'You win Congraduation!!!';
            _removePointer();
        } else if (player1.getBoard().isAllSunk()) {
            winnerLabel.textContent = 'AI wins, try again?';
            _removePointer();
        }
    }
    
    function _removePointer() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                document.querySelector(`.e_${i}${j}`).classList.remove('changeCursor');
            }
        }
    }
}

export default startGame;