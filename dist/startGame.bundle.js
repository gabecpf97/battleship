/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/computerMove.js":
/*!********************************!*\
  !*** ./src/js/computerMove.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (computerMove);

/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const gameboard = () => {
    const map = _fillMap();
    const shipList = [];

    function getMap() {
        return map;
    }

    function resetMap() {
        map = _fillMap();
    }

    function placeShip(ship) {
        if (_checkAvaliable(ship)) {
            shipList.push(ship);
            const shipPos = ship.getPosition();
            shipPos.forEach(position => {
                const x = _getCorr(position)[0];
                const y = _getCorr(position)[1];
                map[x][y] = ship;
            });
        } else {
            throw new Error('already exist a ship in this position');
        }
    }

    function receiveAttack(position) {
        const x = _getCorr(position)[0];
        const y = _getCorr(position)[1];
        if (_checkHaveShip(x, y)) {
            const target = map[x][y];
            target.hit('' + x + y);
        } else {
            map[x][y] = 'missed';
        }
    }

    function isAllSunk() {
        for (let i = 0; i < shipList.length; i++) {
            if (!shipList[i].isSunk()) {
                return false;
            }
        }
        return true;
    }

    function _fillMap() {
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

    function _checkAvaliable(ship) {
        const corrArr = [];
        ship.getPosition().forEach(position => {
            corrArr.push(_getCorr(position));
        })
        for (let i in corrArr) {
            if (map[corrArr[i][0]][corrArr[i][1]] != '')
                return false;
        }
        return true;
    }

    function _checkHaveShip(x, y) {
        if (map[x][y] == '' || map[x][y] == 'missed')
            return false;
        else
            return true;
    }

    function _getCorr(position) {
        return [position.charAt(0), position.charAt(1)];
    }

    return {getMap, resetMap, placeShip, receiveAttack, isAllSunk};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");
/* harmony import */ var _randomPlacement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./randomPlacement */ "./src/js/randomPlacement.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");




const player = () => {
    const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const default_ships = _defaultShips();

    function initMap() {
        // default_ships.forEach(ship => {
        //     board.placeShip(ship);
        // });
        (0,_randomPlacement__WEBPACK_IMPORTED_MODULE_1__["default"])().getRandomPosition().forEach(position => {
            board.placeShip((0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(position));
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
        shipArr.push((0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(position));
    })
    return shipArr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);

/***/ }),

/***/ "./src/js/randomPlacement.js":
/*!***********************************!*\
  !*** ./src/js/randomPlacement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomPlacement = () => {
    const locations = [];

    function getRandomPosition() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4-i; j++) {
                const vertOrHor = Math.floor(Math.random() * 2);
                const shipPos = _createShipPosition(j + 1, vertOrHor);
                locations.push(shipPos);
            }
        }
        return locations;
    }

    function _getRandomCorr() {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        return `${x}${y}`;
    }

    function _createShipPosition(size, vertOrHor) {
        const posArr = [];
        const position = _getRandomCorr();
        const x = Number.parseFloat(position.charAt(0));
        const y = Number.parseFloat(position.charAt(1));
        for (let i = 0; i < size; i++) {
            let newX = x;
            let newY = y;
            if (vertOrHor) {
                newY = y + i;
                if (newY > 9) 
                    newY = 9 -i;                
            } else {
                newX = x + i;
                if (newX > 9) 
                    newX = 9 -i;
            }
            posArr.push(`${newX}${newY}`);
        }
        return _checkPlacement(posArr, size, vertOrHor);
    }

    function _checkPlacement(posArr, size, vertOrHor) {
        for (let i = 0; i < posArr.length; i++) {
            const position = Number.parseFloat(posArr[i]);
            for (let j = 0; j < locations.length; j++) {
                for (let k = 0; k < locations[j].length; k++) {
                    const currP = Number.parseFloat(locations[j][k]);
                    if (position == currP ||
                        position == currP + 1 ||
                        position == currP - 1) {
                            return _createShipPosition(size, vertOrHor);
                    }
                }
            }
        }
        return posArr.sort();
    }

    function _checkExisted(size, vertOrHor) {
        const position = _getRandomCorr();
        for (let entry in locations) {
            for (let i = 0; i < locations[entry].length; i++) {
                const currValue = Number.parseFloat(locations[entry][i]);
                for (let j = 0; j < size; j ++) {
                    let randVal = Number.parseFloat(position);
                    if (vertOrHor) {
                        randVal += j;
                    } else {
                        randVal += (j * 10);
                    }
                    if (randVal == currValue ||
                    randVal == currValue + 1 ||
                    randVal == currValue - 1) {
                        return _checkExisted(size, vertOrHor);
                    }
                }
            }
        }
        return position;
    }
    return {getRandomPosition};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomPlacement);

/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function render(gameboard, name) {
    const map = gameboard.getMap();
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j ++) {
            if (map[i][j] != '') {
                const square = document.querySelector(`.${name}_${i}${j}`);
                if (name == 'e') {
                    _enemyRender(square, i, j, map[i][j]);
                } else {
                    _myRender(square, i, j, map[i][j]);
                }
            }
        }
    }
}

function _enemyRender(square, i, j, ship) {
    if (ship == 'missed')
        square.classList.add('missed');
    else {
        const status = ship.getStatus();
        const position = ship.getPosition();
        for (let k = 0; k < position.length; k++) {
            if (position[k] == `${i}${j}` && status[k])
                square.classList.add('hit');
        }
    }   
}

function _myRender(square, i, j, ship) {
    if (ship != 'missed') {
        square.classList.add('ship');
        const status = ship.getStatus();
        const position = ship.getPosition();
        for (let k = 0; k < position.length; k++) {
            _addShipClass(position, square);
            if (position[k] == `${i}${j}` && status[k])
                square.classList.add('hit');
        }
    } else {
        square.classList.add('missed');
    }
}

function _addShipClass(position, square) {
    switch (position.length) {
        case 1:
            square.classList.add('sml');
            break;

        case 2:
            square.classList.add('mid');
            break;

        case 3:
            square.classList.add('lrg');
            break;

        case 4:
            square.classList.add('max');
            break;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ship = (position) => {
    let myLength = position.length;
    let myPosition = position;
    let myStatus = _initStatus();

    function getPosition() {
        return myPosition;
    }

    function changePosition(newPosition) {
        myPosition = newPosition;
        myLength = position.length;
    }

    function _initStatus() {
        const statusArr = [];
        myPosition.forEach(location => {
            statusArr.push(false);
        });
        return statusArr;
    }

    function getStatus() {
        return myStatus;
    }

    function hit(location) {
        for (let i = 0; i < myLength; i++) {
            if (myPosition[i] === location)
                myStatus[i] = true;
        }
    }

    function isSunk() {
        for (let i = 0; i < myLength; i++) {
            if (!myStatus[i])
                return false;
        }
        return true;
    }

    return {getPosition, changePosition, getStatus, hit, isSunk};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/js/startGame.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _computerMove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computerMove */ "./src/js/computerMove.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/js/player.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/js/render.js");




const startGame = () => {
    const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const ai_move = (0,_computerMove__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const myMoves = new Set();

    player1.initMap();
    player2.initMap();
    _enemyAddListener(player1, player2, ai_move);

    (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])(player1.getBoard(), 'm');
    (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])(player2.getBoard(), 'e');

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
        (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])(player2.getBoard(), 'e');
        _player2Moves();
        _gameOver();
    }
    
    function _player2Moves() {
        const position = ai_move.makeRandomMove();
        player1.getBoard().receiveAttack(position);
        (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])(player1.getBoard(), 'm');
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startGame);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ1o7QUFDQTtBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLG1EQUFNO0FBQzFCLG9CQUFvQixtREFBTTtBQUMxQixvQkFBb0IseURBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBTTtBQUNWLElBQUksbURBQU07QUFDVjtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEMsNEJBQTRCLFFBQVE7QUFDcEMsNERBQTRELEVBQUUsRUFBRSxFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRSxFQUFFLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEVBQUUsRUFBRSxFQUFFO0FBQ3JDLDZDQUE2QyxFQUFFLEVBQUUsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLEVBQUUsRUFBRSxFQUFFO0FBQ2xELFFBQVEsbURBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyw0QkFBNEIsUUFBUTtBQUNwQyw2Q0FBNkMsRUFBRSxFQUFFLEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvY29tcHV0ZXJNb3ZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcmFuZG9tUGxhY2VtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zdGFydEdhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29tcHV0ZXJNb3ZlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW92ZWQgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZVJhbmRvbU1vdmUoKSB7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gX2dlbmVyYXRlUmFub21kQ29ycigpO1xyXG4gICAgICAgIGlmIChtb3ZlZC5oYXMocG9zaXRpb24pKVxyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IG1ha2VSYW5kb21Nb3ZlKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBtb3ZlZC5hZGQocG9zaXRpb24pO1xyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfZ2VuZXJhdGVSYW5vbWRDb3JyKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICByZXR1cm4gYCR7eH0ke3l9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge21ha2VSYW5kb21Nb3ZlfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcHV0ZXJNb3ZlOyIsImNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IF9maWxsTWFwKCk7XHJcbiAgICBjb25zdCBzaGlwTGlzdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1hcCgpIHtcclxuICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0TWFwKCkge1xyXG4gICAgICAgIG1hcCA9IF9maWxsTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXApIHtcclxuICAgICAgICBpZiAoX2NoZWNrQXZhbGlhYmxlKHNoaXApKSB7XHJcbiAgICAgICAgICAgIHNoaXBMaXN0LnB1c2goc2hpcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBQb3MgPSBzaGlwLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHNoaXBQb3MuZm9yRWFjaChwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gX2dldENvcnIocG9zaXRpb24pWzBdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IF9nZXRDb3JyKHBvc2l0aW9uKVsxXTtcclxuICAgICAgICAgICAgICAgIG1hcFt4XVt5XSA9IHNoaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYWxyZWFkeSBleGlzdCBhIHNoaXAgaW4gdGhpcyBwb3NpdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IF9nZXRDb3JyKHBvc2l0aW9uKVswXTtcclxuICAgICAgICBjb25zdCB5ID0gX2dldENvcnIocG9zaXRpb24pWzFdO1xyXG4gICAgICAgIGlmIChfY2hlY2tIYXZlU2hpcCh4LCB5KSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtYXBbeF1beV07XHJcbiAgICAgICAgICAgIHRhcmdldC5oaXQoJycgKyB4ICsgeSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWFwW3hdW3ldID0gJ21pc3NlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzQWxsU3VuaygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghc2hpcExpc3RbaV0uaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfZmlsbE1hcCgpIHtcclxuICAgICAgICBjb25zdCB3aG9sZU1hcCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBbXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdob2xlTWFwLnB1c2gocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdob2xlTWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jaGVja0F2YWxpYWJsZShzaGlwKSB7XHJcbiAgICAgICAgY29uc3QgY29yckFyciA9IFtdO1xyXG4gICAgICAgIHNoaXAuZ2V0UG9zaXRpb24oKS5mb3JFYWNoKHBvc2l0aW9uID0+IHtcclxuICAgICAgICAgICAgY29yckFyci5wdXNoKF9nZXRDb3JyKHBvc2l0aW9uKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBmb3IgKGxldCBpIGluIGNvcnJBcnIpIHtcclxuICAgICAgICAgICAgaWYgKG1hcFtjb3JyQXJyW2ldWzBdXVtjb3JyQXJyW2ldWzFdXSAhPSAnJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NoZWNrSGF2ZVNoaXAoeCwgeSkge1xyXG4gICAgICAgIGlmIChtYXBbeF1beV0gPT0gJycgfHwgbWFwW3hdW3ldID09ICdtaXNzZWQnKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfZ2V0Q29ycihwb3NpdGlvbikge1xyXG4gICAgICAgIHJldHVybiBbcG9zaXRpb24uY2hhckF0KDApLCBwb3NpdGlvbi5jaGFyQXQoMSldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0TWFwLCByZXNldE1hcCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBpc0FsbFN1bmt9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7IiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuaW1wb3J0IHJhbmRvbVBsYWNlbWVudCBmcm9tIFwiLi9yYW5kb21QbGFjZW1lbnRcIjtcclxuaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuY29uc3QgcGxheWVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQoKTtcclxuICAgIGNvbnN0IGRlZmF1bHRfc2hpcHMgPSBfZGVmYXVsdFNoaXBzKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgICAgICAvLyBkZWZhdWx0X3NoaXBzLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgICAgLy8gICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICByYW5kb21QbGFjZW1lbnQoKS5nZXRSYW5kb21Qb3NpdGlvbigpLmZvckVhY2gocG9zaXRpb24gPT4ge1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcChwb3NpdGlvbikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldEJvYXJkKCkge1xyXG4gICAgICAgIGJvYXJkLnJlc2V0TWFwKCk7XHJcbiAgICAgICAgaW5pdE1hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7aW5pdE1hcCwgZ2V0Qm9hcmQsIHJlc2V0Qm9hcmR9O1xyXG59XHJcblxyXG5jb25zdCBfZGVmYXVsdFNoaXBzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2hpcEFyciA9IFtdO1xyXG4gICAgY29uc3Qgc2FtcGxlX3Bvc2l0aW9uID0gXHJcbiAgICAgICAgW1snMTEnXSwgWyczMyddLCBbJzYwJ10sIFsnOTEnXSxcclxuICAgICAgICBbJzI3JywgJzI4J10sIFsnNDcnLCAnNTcnXSwgWyc2NCcsICc3NCddLFxyXG4gICAgICAgIFsnOTUnLCAnOTYnLCAnOTcnXSwgWycyNScsICczNScsICc0NSddLFxyXG4gICAgICAgIFsnNzYnLCAnNzcnLCAnNzgnLCAnNzknXV07XHJcbiAgICBzYW1wbGVfcG9zaXRpb24uZm9yRWFjaChwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgc2hpcEFyci5wdXNoKHNoaXAocG9zaXRpb24pKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gc2hpcEFycjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImNvbnN0IHJhbmRvbVBsYWNlbWVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvY2F0aW9ucyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbVBvc2l0aW9uKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNC1pOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRPckhvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcFBvcyA9IF9jcmVhdGVTaGlwUG9zaXRpb24oaiArIDEsIHZlcnRPckhvcik7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnMucHVzaChzaGlwUG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbG9jYXRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9nZXRSYW5kb21Db3JyKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICByZXR1cm4gYCR7eH0ke3l9YDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY3JlYXRlU2hpcFBvc2l0aW9uKHNpemUsIHZlcnRPckhvcikge1xyXG4gICAgICAgIGNvbnN0IHBvc0FyciA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gX2dldFJhbmRvbUNvcnIoKTtcclxuICAgICAgICBjb25zdCB4ID0gTnVtYmVyLnBhcnNlRmxvYXQocG9zaXRpb24uY2hhckF0KDApKTtcclxuICAgICAgICBjb25zdCB5ID0gTnVtYmVyLnBhcnNlRmxvYXQocG9zaXRpb24uY2hhckF0KDEpKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbmV3WCA9IHg7XHJcbiAgICAgICAgICAgIGxldCBuZXdZID0geTtcclxuICAgICAgICAgICAgaWYgKHZlcnRPckhvcikge1xyXG4gICAgICAgICAgICAgICAgbmV3WSA9IHkgKyBpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1kgPiA5KSBcclxuICAgICAgICAgICAgICAgICAgICBuZXdZID0gOSAtaTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdYID0geCArIGk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3WCA+IDkpIFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ggPSA5IC1pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvc0Fyci5wdXNoKGAke25ld1h9JHtuZXdZfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX2NoZWNrUGxhY2VtZW50KHBvc0Fyciwgc2l6ZSwgdmVydE9ySG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY2hlY2tQbGFjZW1lbnQocG9zQXJyLCBzaXplLCB2ZXJ0T3JIb3IpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KHBvc0FycltpXSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbG9jYXRpb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGxvY2F0aW9uc1tqXS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJQID0gTnVtYmVyLnBhcnNlRmxvYXQobG9jYXRpb25zW2pdW2tdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPT0gY3VyclAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPT0gY3VyclAgKyAxIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID09IGN1cnJQIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jcmVhdGVTaGlwUG9zaXRpb24oc2l6ZSwgdmVydE9ySG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvc0Fyci5zb3J0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NoZWNrRXhpc3RlZChzaXplLCB2ZXJ0T3JIb3IpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IF9nZXRSYW5kb21Db3JyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgZW50cnkgaW4gbG9jYXRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYXRpb25zW2VudHJ5XS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyclZhbHVlID0gTnVtYmVyLnBhcnNlRmxvYXQobG9jYXRpb25zW2VudHJ5XVtpXSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGogKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFZhbCA9IE51bWJlci5wYXJzZUZsb2F0KHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmVydE9ySG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRWYWwgKz0gajtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kVmFsICs9IChqICogMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmFuZFZhbCA9PSBjdXJyVmFsdWUgfHxcclxuICAgICAgICAgICAgICAgICAgICByYW5kVmFsID09IGN1cnJWYWx1ZSArIDEgfHxcclxuICAgICAgICAgICAgICAgICAgICByYW5kVmFsID09IGN1cnJWYWx1ZSAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jaGVja0V4aXN0ZWQoc2l6ZSwgdmVydE9ySG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtnZXRSYW5kb21Qb3NpdGlvbn07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbVBsYWNlbWVudDsiLCJmdW5jdGlvbiByZW5kZXIoZ2FtZWJvYXJkLCBuYW1lKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnYW1lYm9hcmQuZ2V0TWFwKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICsrKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXBbaV1bal0gIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9XyR7aX0ke2p9YCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PSAnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBfZW5lbXlSZW5kZXIoc3F1YXJlLCBpLCBqLCBtYXBbaV1bal0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfbXlSZW5kZXIoc3F1YXJlLCBpLCBqLCBtYXBbaV1bal0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfZW5lbXlSZW5kZXIoc3F1YXJlLCBpLCBqLCBzaGlwKSB7XHJcbiAgICBpZiAoc2hpcCA9PSAnbWlzc2VkJylcclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSBzaGlwLmdldFN0YXR1cygpO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2hpcC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcG9zaXRpb24ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uW2tdID09IGAke2l9JHtqfWAgJiYgc3RhdHVzW2tdKVxyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxufVxyXG5cclxuZnVuY3Rpb24gX215UmVuZGVyKHNxdWFyZSwgaSwgaiwgc2hpcCkge1xyXG4gICAgaWYgKHNoaXAgIT0gJ21pc3NlZCcpIHtcclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHNoaXAuZ2V0U3RhdHVzKCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBzaGlwLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBwb3NpdGlvbi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICBfYWRkU2hpcENsYXNzKHBvc2l0aW9uLCBzcXVhcmUpO1xyXG4gICAgICAgICAgICBpZiAocG9zaXRpb25ba10gPT0gYCR7aX0ke2p9YCAmJiBzdGF0dXNba10pXHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hZGRTaGlwQ2xhc3MocG9zaXRpb24sIHNxdWFyZSkge1xyXG4gICAgc3dpdGNoIChwb3NpdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzbWwnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pZCcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbHJnJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtYXgnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjsiLCJjb25zdCBzaGlwID0gKHBvc2l0aW9uKSA9PiB7XHJcbiAgICBsZXQgbXlMZW5ndGggPSBwb3NpdGlvbi5sZW5ndGg7XHJcbiAgICBsZXQgbXlQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgbGV0IG15U3RhdHVzID0gX2luaXRTdGF0dXMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gbXlQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VQb3NpdGlvbihuZXdQb3NpdGlvbikge1xyXG4gICAgICAgIG15UG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcclxuICAgICAgICBteUxlbmd0aCA9IHBvc2l0aW9uLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfaW5pdFN0YXR1cygpIHtcclxuICAgICAgICBjb25zdCBzdGF0dXNBcnIgPSBbXTtcclxuICAgICAgICBteVBvc2l0aW9uLmZvckVhY2gobG9jYXRpb24gPT4ge1xyXG4gICAgICAgICAgICBzdGF0dXNBcnIucHVzaChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1c0FycjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG15U3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpdChsb2NhdGlvbikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobXlQb3NpdGlvbltpXSA9PT0gbG9jYXRpb24pXHJcbiAgICAgICAgICAgICAgICBteVN0YXR1c1tpXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCFteVN0YXR1c1tpXSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXRQb3NpdGlvbiwgY2hhbmdlUG9zaXRpb24sIGdldFN0YXR1cywgaGl0LCBpc1N1bmt9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaGlwOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNvbXB1dGVyTW92ZSBmcm9tICcuL2NvbXB1dGVyTW92ZSc7XHJcbmltcG9ydCBwbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyJztcclxuXHJcbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoKTtcclxuICAgIGNvbnN0IHBsYXllcjIgPSBwbGF5ZXIoKTtcclxuICAgIGNvbnN0IGFpX21vdmUgPSBjb21wdXRlck1vdmUoKTtcclxuICAgIGNvbnN0IG15TW92ZXMgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgcGxheWVyMS5pbml0TWFwKCk7XHJcbiAgICBwbGF5ZXIyLmluaXRNYXAoKTtcclxuICAgIF9lbmVteUFkZExpc3RlbmVyKHBsYXllcjEsIHBsYXllcjIsIGFpX21vdmUpO1xyXG5cclxuICAgIHJlbmRlcihwbGF5ZXIxLmdldEJvYXJkKCksICdtJyk7XHJcbiAgICByZW5kZXIocGxheWVyMi5nZXRCb2FyZCgpLCAnZScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIF9lbmVteUFkZExpc3RlbmVyKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lXyR7aX0ke2p9YCk7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnY2hhbmdlQ3Vyc29yJyk7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jaGVja0VhY2hNb3ZlcyhpLCBqKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY2hlY2tFYWNoTW92ZXMoaSwgaikge1xyXG4gICAgICAgIGxldCBhbGxTdW5rID0gIXBsYXllcjEuZ2V0Qm9hcmQoKS5pc0FsbFN1bmsoKSAmJiAhcGxheWVyMi5nZXRCb2FyZCgpLmlzQWxsU3VuaygpO1xyXG4gICAgICAgIGxldCBtb3ZlZCA9IG15TW92ZXMuaGFzKGAke2l9JHtqfWApO1xyXG4gICAgICAgIGlmIChhbGxTdW5rICYmICFtb3ZlZCkge1xyXG4gICAgICAgICAgICBpZiAoIW1vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICBfbWFrZUFNb3ZlKGksIGopO1xyXG4gICAgICAgICAgICAgICAgbXlNb3Zlcy5hZGQoYCR7aX0ke2p9YCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZV8ke2l9JHtqfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZUN1cnNvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBfbWFrZUFNb3ZlKGksIGopIHtcclxuICAgICAgICBwbGF5ZXIyLmdldEJvYXJkKCkucmVjZWl2ZUF0dGFjayhgJHtpfSR7an1gKTtcclxuICAgICAgICByZW5kZXIocGxheWVyMi5nZXRCb2FyZCgpLCAnZScpO1xyXG4gICAgICAgIF9wbGF5ZXIyTW92ZXMoKTtcclxuICAgICAgICBfZ2FtZU92ZXIoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gX3BsYXllcjJNb3ZlcygpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGFpX21vdmUubWFrZVJhbmRvbU1vdmUoKTtcclxuICAgICAgICBwbGF5ZXIxLmdldEJvYXJkKCkucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XHJcbiAgICAgICAgcmVuZGVyKHBsYXllcjEuZ2V0Qm9hcmQoKSwgJ20nKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gX2dhbWVPdmVyKCkge1xyXG4gICAgICAgIGNvbnN0IHdpbm5lckxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lckxhYmVsJyk7XHJcbiAgICAgICAgaWYgKHBsYXllcjIuZ2V0Qm9hcmQoKS5pc0FsbFN1bmsoKSl7XHJcbiAgICAgICAgICAgIHdpbm5lckxhYmVsLnRleHRDb250ZW50ID0gJ1lvdSB3aW4gQ29uZ3JhZHVhdGlvbiEhISc7XHJcbiAgICAgICAgICAgIF9yZW1vdmVQb2ludGVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIxLmdldEJvYXJkKCkuaXNBbGxTdW5rKCkpIHtcclxuICAgICAgICAgICAgd2lubmVyTGFiZWwudGV4dENvbnRlbnQgPSAnQUkgd2lucywgdHJ5IGFnYWluPyc7XHJcbiAgICAgICAgICAgIF9yZW1vdmVQb2ludGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBfcmVtb3ZlUG9pbnRlcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZV8ke2l9JHtqfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZUN1cnNvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdGFydEdhbWU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9