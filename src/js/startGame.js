import player from './player';
import render from './render';

const startGame = () => {
    const player1 = player();
    const player2 = player();

    player1.initMap();
    player2.initMap();
    _enemyAddListener(player2);

    render(player1.getBoard(), 'm');
    render(player2.getBoard(), 'e');
}

function _enemyAddListener(player2) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            document.querySelector(`.e_${i}${j}`)
                .addEventListener('click', (e) => {
                    player2.getBoard().receiveAttack(`${i}${j}`);
                    render(player2.getBoard(), 'e');
                    console.log(player2.getBoard().getMap()[i][j].getStatus());
                    console.log(player2.getBoard().getMap()[i][j].getPosition());
                });
        }
    }
}

export default startGame;