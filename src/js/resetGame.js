import displayBoard from "./displayBoard";
import startGame from "./startGame";

function clickedReset() {
    document.querySelector('.reset').addEventListener('click', () => {
        _resetHtml();
        displayBoard();
        startGame();
    });
}

function _resetHtml() {
    const boards = document.querySelector('.boards');
    while (boards.firstChild != null)
        boards.removeChild(boards.firstChild);
    document.querySelector('.winnerLabel').textContent = '';
}

export default clickedReset;