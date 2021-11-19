const computerMove = () => {
    const moved = new Set();

    function makeRandomMove() {
        let position = _generateRanomdCorr();
        if (moved.has(position))
            position = makeRandomMove();
        else
            moved.add(position);
        return position;
    }

    function _generateRanomdCorr() {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        return `${x}${y}`;
    }

    return {makeRandomMove};
}

export default computerMove;