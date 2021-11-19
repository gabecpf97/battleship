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

    function resetBoard() {
        board.resetMap();
        initMap();
    }

    return {initMap, getBoard, resetBoard};
}

const _defaultShips = () => {
    const shipArr = [];
    const sample_position = 
        [['11'], ['33'], ['60'], ['91'],
        ['27', '28'], ['47', '57'], ['64', '74'],
        ['95', '96', '97'], ['25', '35', '45'],
        ['76', '77', '78', '79']];
    sample_position.forEach(position => {
        shipArr.push(ship(position));
    })
    return shipArr;
}

export default player;