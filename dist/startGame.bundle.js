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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");



const player = () => {
    const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
        shipArr.push((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(position));
    })
    return shipArr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);

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
            if (position[k] == `${i}${j}` && status[k])
                square.classList.add('hit');
        }
    } else {
        square.classList.add('missed');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ04wQztBQUNaO0FBQ0E7QUFDOUI7QUFDQTtBQUNBLG9CQUFvQixtREFBTTtBQUMxQixvQkFBb0IsbURBQU07QUFDMUIsb0JBQW9CLHlEQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQU07QUFDVixJQUFJLG1EQUFNO0FBQ1Y7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLDRCQUE0QixRQUFRO0FBQ3BDLDREQUE0RCxFQUFFLEVBQUUsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEVBQUUsRUFBRSxFQUFFO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixFQUFFLEVBQUUsRUFBRTtBQUNyQyw2Q0FBNkMsRUFBRSxFQUFFLEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxFQUFFLEVBQUUsRUFBRTtBQUNsRCxRQUFRLG1EQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEMsNEJBQTRCLFFBQVE7QUFDcEMsNkNBQTZDLEVBQUUsRUFBRSxFQUFFO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2NvbXB1dGVyTW92ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc3RhcnRHYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbXB1dGVyTW92ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1vdmVkID0gbmV3IFNldCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VSYW5kb21Nb3ZlKCkge1xyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IF9nZW5lcmF0ZVJhbm9tZENvcnIoKTtcclxuICAgICAgICBpZiAobW92ZWQuaGFzKHBvc2l0aW9uKSlcclxuICAgICAgICAgICAgcG9zaXRpb24gPSBtYWtlUmFuZG9tTW92ZSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgbW92ZWQuYWRkKHBvc2l0aW9uKTtcclxuICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2dlbmVyYXRlUmFub21kQ29ycigpIHtcclxuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgcmV0dXJuIGAke3h9JHt5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHttYWtlUmFuZG9tTW92ZX07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXB1dGVyTW92ZTsiLCJjb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSBfZmlsbE1hcCgpO1xyXG4gICAgY29uc3Qgc2hpcExpc3QgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNYXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hcDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldE1hcCgpIHtcclxuICAgICAgICBtYXAgPSBfZmlsbE1hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwKSB7XHJcbiAgICAgICAgaWYgKF9jaGVja0F2YWxpYWJsZShzaGlwKSkge1xyXG4gICAgICAgICAgICBzaGlwTGlzdC5wdXNoKHNoaXApO1xyXG4gICAgICAgICAgICBjb25zdCBzaGlwUG9zID0gc2hpcC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBzaGlwUG9zLmZvckVhY2gocG9zaXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IF9nZXRDb3JyKHBvc2l0aW9uKVswXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBfZ2V0Q29ycihwb3NpdGlvbilbMV07XHJcbiAgICAgICAgICAgICAgICBtYXBbeF1beV0gPSBzaGlwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FscmVhZHkgZXhpc3QgYSBzaGlwIGluIHRoaXMgcG9zaXRpb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhwb3NpdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHggPSBfZ2V0Q29ycihwb3NpdGlvbilbMF07XHJcbiAgICAgICAgY29uc3QgeSA9IF9nZXRDb3JyKHBvc2l0aW9uKVsxXTtcclxuICAgICAgICBpZiAoX2NoZWNrSGF2ZVNoaXAoeCwgeSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbWFwW3hdW3ldO1xyXG4gICAgICAgICAgICB0YXJnZXQuaGl0KCcnICsgeCArIHkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hcFt4XVt5XSA9ICdtaXNzZWQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0FsbFN1bmsoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIXNoaXBMaXN0W2ldLmlzU3VuaygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2ZpbGxNYXAoKSB7XHJcbiAgICAgICAgY29uc3Qgd2hvbGVNYXAgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gW11cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICByb3cucHVzaChcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aG9sZU1hcC5wdXNoKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3aG9sZU1hcDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY2hlY2tBdmFsaWFibGUoc2hpcCkge1xyXG4gICAgICAgIGNvbnN0IGNvcnJBcnIgPSBbXTtcclxuICAgICAgICBzaGlwLmdldFBvc2l0aW9uKCkuZm9yRWFjaChwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvcnJBcnIucHVzaChfZ2V0Q29ycihwb3NpdGlvbikpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBjb3JyQXJyKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXBbY29yckFycltpXVswXV1bY29yckFycltpXVsxXV0gIT0gJycpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jaGVja0hhdmVTaGlwKHgsIHkpIHtcclxuICAgICAgICBpZiAobWFwW3hdW3ldID09ICcnIHx8IG1hcFt4XVt5XSA9PSAnbWlzc2VkJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2dldENvcnIocG9zaXRpb24pIHtcclxuICAgICAgICByZXR1cm4gW3Bvc2l0aW9uLmNoYXJBdCgwKSwgcG9zaXRpb24uY2hhckF0KDEpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2dldE1hcCwgcmVzZXRNYXAsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgaXNBbGxTdW5rfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkOyIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmNvbnN0IHBsYXllciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvYXJkID0gZ2FtZWJvYXJkKCk7XHJcbiAgICBjb25zdCBkZWZhdWx0X3NoaXBzID0gX2RlZmF1bHRTaGlwcygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICAgICAgZGVmYXVsdF9zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Qm9hcmQoKSB7XHJcbiAgICAgICAgYm9hcmQucmVzZXRNYXAoKTtcclxuICAgICAgICBpbml0TWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtpbml0TWFwLCBnZXRCb2FyZCwgcmVzZXRCb2FyZH07XHJcbn1cclxuXHJcbmNvbnN0IF9kZWZhdWx0U2hpcHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzaGlwQXJyID0gW107XHJcbiAgICBjb25zdCBzYW1wbGVfcG9zaXRpb24gPSBcclxuICAgICAgICBbWycxMSddLCBbJzMzJ10sIFsnNjAnXSwgWyc5MSddLFxyXG4gICAgICAgIFsnMjcnLCAnMjgnXSwgWyc0NycsICc1NyddLCBbJzY0JywgJzc0J10sXHJcbiAgICAgICAgWyc5NScsICc5NicsICc5NyddLCBbJzI1JywgJzM1JywgJzQ1J10sXHJcbiAgICAgICAgWyc3NicsICc3NycsICc3OCcsICc3OSddXTtcclxuICAgIHNhbXBsZV9wb3NpdGlvbi5mb3JFYWNoKHBvc2l0aW9uID0+IHtcclxuICAgICAgICBzaGlwQXJyLnB1c2goc2hpcChwb3NpdGlvbikpO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBzaGlwQXJyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXI7IiwiZnVuY3Rpb24gcmVuZGVyKGdhbWVib2FyZCwgbmFtZSkge1xyXG4gICAgY29uc3QgbWFwID0gZ2FtZWJvYXJkLmdldE1hcCgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArKykge1xyXG4gICAgICAgICAgICBpZiAobWFwW2ldW2pdICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfV8ke2l9JHtqfWApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT0gJ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2VuZW15UmVuZGVyKHNxdWFyZSwgaSwgaiwgbWFwW2ldW2pdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX215UmVuZGVyKHNxdWFyZSwgaSwgaiwgbWFwW2ldW2pdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gX2VuZW15UmVuZGVyKHNxdWFyZSwgaSwgaiwgc2hpcCkge1xyXG4gICAgaWYgKHNoaXAgPT0gJ21pc3NlZCcpXHJcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gc2hpcC5nZXRTdGF0dXMoKTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHNoaXAuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHBvc2l0aW9uLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbltrXSA9PSBgJHtpfSR7an1gICYmIHN0YXR1c1trXSlcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9teVJlbmRlcihzcXVhcmUsIGksIGosIHNoaXApIHtcclxuICAgIGlmIChzaGlwICE9ICdtaXNzZWQnKSB7XHJcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSBzaGlwLmdldFN0YXR1cygpO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2hpcC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcG9zaXRpb24ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uW2tdID09IGAke2l9JHtqfWAgJiYgc3RhdHVzW2tdKVxyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7IiwiY29uc3Qgc2hpcCA9IChwb3NpdGlvbikgPT4ge1xyXG4gICAgbGV0IG15TGVuZ3RoID0gcG9zaXRpb24ubGVuZ3RoO1xyXG4gICAgbGV0IG15UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIGxldCBteVN0YXR1cyA9IF9pbml0U3RhdHVzKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG15UG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlUG9zaXRpb24obmV3UG9zaXRpb24pIHtcclxuICAgICAgICBteVBvc2l0aW9uID0gbmV3UG9zaXRpb247XHJcbiAgICAgICAgbXlMZW5ndGggPSBwb3NpdGlvbi5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2luaXRTdGF0dXMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzQXJyID0gW107XHJcbiAgICAgICAgbXlQb3NpdGlvbi5mb3JFYWNoKGxvY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgc3RhdHVzQXJyLnB1c2goZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzdGF0dXNBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiBteVN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaXQobG9jYXRpb24pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG15UG9zaXRpb25baV0gPT09IGxvY2F0aW9uKVxyXG4gICAgICAgICAgICAgICAgbXlTdGF0dXNbaV0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghbXlTdGF0dXNbaV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0UG9zaXRpb24sIGNoYW5nZVBvc2l0aW9uLCBnZXRTdGF0dXMsIGhpdCwgaXNTdW5rfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjb21wdXRlck1vdmUgZnJvbSAnLi9jb21wdXRlck1vdmUnO1xyXG5pbXBvcnQgcGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlcic7XHJcblxyXG5jb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXIxID0gcGxheWVyKCk7XHJcbiAgICBjb25zdCBwbGF5ZXIyID0gcGxheWVyKCk7XHJcbiAgICBjb25zdCBhaV9tb3ZlID0gY29tcHV0ZXJNb3ZlKCk7XHJcbiAgICBjb25zdCBteU1vdmVzID0gbmV3IFNldCgpO1xyXG5cclxuICAgIHBsYXllcjEuaW5pdE1hcCgpO1xyXG4gICAgcGxheWVyMi5pbml0TWFwKCk7XHJcbiAgICBfZW5lbXlBZGRMaXN0ZW5lcihwbGF5ZXIxLCBwbGF5ZXIyLCBhaV9tb3ZlKTtcclxuXHJcbiAgICByZW5kZXIocGxheWVyMS5nZXRCb2FyZCgpLCAnbScpO1xyXG4gICAgcmVuZGVyKHBsYXllcjIuZ2V0Qm9hcmQoKSwgJ2UnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBfZW5lbXlBZGRMaXN0ZW5lcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZV8ke2l9JHtqfWApO1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZUN1cnNvcicpO1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY2hlY2tFYWNoTW92ZXMoaSwgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NoZWNrRWFjaE1vdmVzKGksIGopIHtcclxuICAgICAgICBsZXQgYWxsU3VuayA9ICFwbGF5ZXIxLmdldEJvYXJkKCkuaXNBbGxTdW5rKCkgJiYgIXBsYXllcjIuZ2V0Qm9hcmQoKS5pc0FsbFN1bmsoKTtcclxuICAgICAgICBsZXQgbW92ZWQgPSBteU1vdmVzLmhhcyhgJHtpfSR7an1gKTtcclxuICAgICAgICBpZiAoYWxsU3VuayAmJiAhbW92ZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFtb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgX21ha2VBTW92ZShpLCBqKTtcclxuICAgICAgICAgICAgICAgIG15TW92ZXMuYWRkKGAke2l9JHtqfWApO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVfJHtpfSR7an1gKS5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2VDdXJzb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gX21ha2VBTW92ZShpLCBqKSB7XHJcbiAgICAgICAgcGxheWVyMi5nZXRCb2FyZCgpLnJlY2VpdmVBdHRhY2soYCR7aX0ke2p9YCk7XHJcbiAgICAgICAgcmVuZGVyKHBsYXllcjIuZ2V0Qm9hcmQoKSwgJ2UnKTtcclxuICAgICAgICBfcGxheWVyMk1vdmVzKCk7XHJcbiAgICAgICAgX2dhbWVPdmVyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIF9wbGF5ZXIyTW92ZXMoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBhaV9tb3ZlLm1ha2VSYW5kb21Nb3ZlKCk7XHJcbiAgICAgICAgcGxheWVyMS5nZXRCb2FyZCgpLnJlY2VpdmVBdHRhY2socG9zaXRpb24pO1xyXG4gICAgICAgIHJlbmRlcihwbGF5ZXIxLmdldEJvYXJkKCksICdtJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIF9nYW1lT3ZlcigpIHtcclxuICAgICAgICBjb25zdCB3aW5uZXJMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJMYWJlbCcpO1xyXG4gICAgICAgIGlmIChwbGF5ZXIyLmdldEJvYXJkKCkuaXNBbGxTdW5rKCkpe1xyXG4gICAgICAgICAgICB3aW5uZXJMYWJlbC50ZXh0Q29udGVudCA9ICdZb3Ugd2luIENvbmdyYWR1YXRpb24hISEnO1xyXG4gICAgICAgICAgICBfcmVtb3ZlUG9pbnRlcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyMS5nZXRCb2FyZCgpLmlzQWxsU3VuaygpKSB7XHJcbiAgICAgICAgICAgIHdpbm5lckxhYmVsLnRleHRDb250ZW50ID0gJ0FJIHdpbnMsIHRyeSBhZ2Fpbj8nO1xyXG4gICAgICAgICAgICBfcmVtb3ZlUG9pbnRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gX3JlbW92ZVBvaW50ZXIoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVfJHtpfSR7an1gKS5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2VDdXJzb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RhcnRHYW1lOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==