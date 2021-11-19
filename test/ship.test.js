import ship from "../src/js/ship";

test('change position of ship', () => {
    const newShip = ship(['a1', 'a2']);
    newShip.changePosition(['c1', 'c2', 'c3']);
    expect(newShip.getPosition())
        .toStrictEqual(['c1', 'c2', 'c3']);
});

test ('check status', () => {
    expect(ship(['a1', 'b1', 'c1']).getStatus())
        .toStrictEqual([false, false, false]);
});

test('test hit', () => {
    const newShip = ship(['a1', 'b1', 'c1']);
    newShip.hit('a1');
    newShip.hit('b1');
    newShip.hit('c1');
    expect(newShip.getStatus()).toStrictEqual([true, true, true]);
});

test('test isSunk when sunk', () => {
    const newShip = ship(['a1', 'b1', 'c1']);
    newShip.hit('a1');
    newShip.hit('b1');
    newShip.hit('c1');
    expect(newShip.isSunk()).toBe(true);
});

test('test isSunk when not sunk', () => {
    const newShip = ship(['a1', 'b1', 'c1']);
    newShip.hit('a1');
    newShip.hit('b1');
    expect(newShip.isSunk()).toBe(false);
});