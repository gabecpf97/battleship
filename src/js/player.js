import gameboard from "./gameboard";
import ship from "./ship";

const player = () => {
    const board = gameboard();
    const default_ships = _defaultShips();

    function initMap() {
        default_ships.forEach(ship => {
            board.placeShip(ship);
        });
    }

    function getBoard() {
        return board;
    }

    return {initMap, getBoard};
}

const _defaultShips = () => {
    const shipArr = [];
    const sample_position = 
        [['11'], ['33'], ['60'], ['91'],
        ['22', '23'], ['57', '67'], ['34', '44'],
        ['95', '96', '97'], ['25', '35', '45'],
        ['76', '77', '78', '79']];
    sample_position.forEach(position => {
        shipArr.push(ship(position));
    })
    return shipArr;
}

export default player;