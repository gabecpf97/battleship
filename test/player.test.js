import player from "../src/js/player";

test('init a player', () => {
    const newP = player();
    newP.initMap();
    expect(newP.getBoard().getMap()[1][1].getPosition()).toStrictEqual(['11']);
});

test('init a player', () => {
    const newP = player();
    newP.initMap();
    expect(newP.getBoard().getMap()[7][7].getPosition())
        .toStrictEqual(['76', '77', '78', '79']);
});
