import gameboard from "../src/js/gameboard";
import ship from "../src/js/ship";

test('receive attack, missed shot', () => {
    const newBoard = gameboard();
    newBoard.placeShip(ship(['00', '01'], 'mid_ship'));
    newBoard.receiveAttack('11');
    expect(newBoard.getMap()[1][1]).toStrictEqual('missed');
});

test('receive attack, hit shot', () => {
    const newBoard = gameboard();
    newBoard.placeShip(ship(['00', '01'], 'mid_ship'));
    newBoard.receiveAttack('01');
    expect(newBoard.getMap()[0][1].getStatus()).toStrictEqual([false, true]);
});

test('receive attack, hit shot, other position', () => {
    const newBoard = gameboard();
    newBoard.placeShip(ship(['00', '01'], 'mid_ship'));
    newBoard.receiveAttack('01');
    expect(newBoard.getMap()[0][0].getStatus()).toStrictEqual([false, true]);
});

test('all sinked', () => {
    const newBoard = gameboard();
    newBoard.placeShip(ship(['00', '01'], 'mid_ship'));
    newBoard.receiveAttack('01');
    newBoard.receiveAttack('00');
    expect(newBoard.isAllSunk()).toBe(true);
});

test('all sinked, false', () => {
    const newBoard = gameboard();
    newBoard.placeShip(ship(['00', '01'], 'mid_ship'));
    newBoard.receiveAttack('01');
    expect(newBoard.isAllSunk()).toBe(false);
});

test('all sinked, 2 ship, false', () => {
    const newBoard = gameboard();
    newBoard.placeShip(ship(['00', '01'], 'mid_ship'));
    newBoard.placeShip(ship(['21', '22', '23'], 'mid_ship'));
    newBoard.receiveAttack('01');
    newBoard.receiveAttack('00');
    expect(newBoard.isAllSunk()).toBe(false);
});

test('all sinked, 2 ship, true', () => {
    const newBoard = gameboard();
    newBoard.placeShip(ship(['00', '01'], 'mid_ship'));
    newBoard.placeShip(ship(['21', '22', '23'], 'mid_ship'));
    newBoard.receiveAttack('01');
    newBoard.receiveAttack('00');
    newBoard.receiveAttack('21');
    newBoard.receiveAttack('22');
    newBoard.receiveAttack('23');
    expect(newBoard.isAllSunk()).toBe(true);
});

test('overlapping placement', () => {
    const newBoard = gameboard();
    newBoard.placeShip(ship(['00', '01'], 'mid_ship'));
    try {
        newBoard.placeShip(ship(['01', '02'], 'mid_ship'));
    } catch (e) {
        expect(e.message).toBe('already exist a ship in this position');
    }
});

function _getEmptyMap() {
    const wholeMap = [];
    for (let i = 0; i < 10; i++) {
        const row = []
        for (let j = 0; j < 10; j++) {
            row.push("");
        }
        wholeMap.push(row);
    }
    return wholeMap;
}