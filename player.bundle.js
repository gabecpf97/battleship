/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUSw0REFBZTtBQUN2Qiw0QkFBNEIsaURBQUk7QUFDaEMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQUk7QUFDekIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcmFuZG9tUGxhY2VtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9wbGF5ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFwID0gX2ZpbGxNYXAoKTtcclxuICAgIGNvbnN0IHNoaXBMaXN0ID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TWFwKCkge1xyXG4gICAgICAgIHJldHVybiBtYXA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRNYXAoKSB7XHJcbiAgICAgICAgbWFwID0gX2ZpbGxNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCkge1xyXG4gICAgICAgIGlmIChfY2hlY2tBdmFsaWFibGUoc2hpcCkpIHtcclxuICAgICAgICAgICAgc2hpcExpc3QucHVzaChzaGlwKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hpcFBvcyA9IHNoaXAuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgc2hpcFBvcy5mb3JFYWNoKHBvc2l0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBfZ2V0Q29ycihwb3NpdGlvbilbMF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gX2dldENvcnIocG9zaXRpb24pWzFdO1xyXG4gICAgICAgICAgICAgICAgbWFwW3hdW3ldID0gc2hpcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbHJlYWR5IGV4aXN0IGEgc2hpcCBpbiB0aGlzIHBvc2l0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCB4ID0gX2dldENvcnIocG9zaXRpb24pWzBdO1xyXG4gICAgICAgIGNvbnN0IHkgPSBfZ2V0Q29ycihwb3NpdGlvbilbMV07XHJcbiAgICAgICAgaWYgKF9jaGVja0hhdmVTaGlwKHgsIHkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG1hcFt4XVt5XTtcclxuICAgICAgICAgICAgdGFyZ2V0LmhpdCgnJyArIHggKyB5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXBbeF1beV0gPSAnbWlzc2VkJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBbGxTdW5rKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCFzaGlwTGlzdFtpXS5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9maWxsTWFwKCkge1xyXG4gICAgICAgIGNvbnN0IHdob2xlTWFwID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IFtdXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgcm93LnB1c2goXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2hvbGVNYXAucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2hvbGVNYXA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NoZWNrQXZhbGlhYmxlKHNoaXApIHtcclxuICAgICAgICBjb25zdCBjb3JyQXJyID0gW107XHJcbiAgICAgICAgc2hpcC5nZXRQb3NpdGlvbigpLmZvckVhY2gocG9zaXRpb24gPT4ge1xyXG4gICAgICAgICAgICBjb3JyQXJyLnB1c2goX2dldENvcnIocG9zaXRpb24pKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gY29yckFycikge1xyXG4gICAgICAgICAgICBpZiAobWFwW2NvcnJBcnJbaV1bMF1dW2NvcnJBcnJbaV1bMV1dICE9ICcnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY2hlY2tIYXZlU2hpcCh4LCB5KSB7XHJcbiAgICAgICAgaWYgKG1hcFt4XVt5XSA9PSAnJyB8fCBtYXBbeF1beV0gPT0gJ21pc3NlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9nZXRDb3JyKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFtwb3NpdGlvbi5jaGFyQXQoMCksIHBvc2l0aW9uLmNoYXJBdCgxKV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXRNYXAsIHJlc2V0TWFwLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGlzQWxsU3Vua307XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDsiLCJjb25zdCByYW5kb21QbGFjZW1lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2NhdGlvbnMgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRSYW5kb21Qb3NpdGlvbigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQtaTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0T3JIb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBQb3MgPSBfY3JlYXRlU2hpcFBvc2l0aW9uKGogKyAxLCB2ZXJ0T3JIb3IpO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zLnB1c2goc2hpcFBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfZ2V0UmFuZG9tQ29ycigpIHtcclxuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgcmV0dXJuIGAke3h9JHt5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NyZWF0ZVNoaXBQb3NpdGlvbihzaXplLCB2ZXJ0T3JIb3IpIHtcclxuICAgICAgICBjb25zdCBwb3NBcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IF9nZXRSYW5kb21Db3JyKCk7XHJcbiAgICAgICAgY29uc3QgeCA9IE51bWJlci5wYXJzZUZsb2F0KHBvc2l0aW9uLmNoYXJBdCgwKSk7XHJcbiAgICAgICAgY29uc3QgeSA9IE51bWJlci5wYXJzZUZsb2F0KHBvc2l0aW9uLmNoYXJBdCgxKSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5ld1ggPSB4O1xyXG4gICAgICAgICAgICBsZXQgbmV3WSA9IHk7XHJcbiAgICAgICAgICAgIGlmICh2ZXJ0T3JIb3IpIHtcclxuICAgICAgICAgICAgICAgIG5ld1kgPSB5ICsgaTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdZID4gOSkgXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3WSA9IDkgLWk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3WCA9IHggKyBpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ggPiA5KSBcclxuICAgICAgICAgICAgICAgICAgICBuZXdYID0gOSAtaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3NBcnIucHVzaChgJHtuZXdYfSR7bmV3WX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9jaGVja1BsYWNlbWVudChwb3NBcnIsIHNpemUsIHZlcnRPckhvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NoZWNrUGxhY2VtZW50KHBvc0Fyciwgc2l6ZSwgdmVydE9ySG9yKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBOdW1iZXIucGFyc2VGbG9hdChwb3NBcnJbaV0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxvY2F0aW9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBsb2NhdGlvbnNbal0ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyUCA9IE51bWJlci5wYXJzZUZsb2F0KGxvY2F0aW9uc1tqXVtrXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09IGN1cnJQIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID09IGN1cnJQICsgMSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9PSBjdXJyUCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY3JlYXRlU2hpcFBvc2l0aW9uKHNpemUsIHZlcnRPckhvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3NBcnIuc29ydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jaGVja0V4aXN0ZWQoc2l6ZSwgdmVydE9ySG9yKSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBfZ2V0UmFuZG9tQ29ycigpO1xyXG4gICAgICAgIGZvciAobGV0IGVudHJ5IGluIGxvY2F0aW9ucykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2F0aW9uc1tlbnRyeV0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJWYWx1ZSA9IE51bWJlci5wYXJzZUZsb2F0KGxvY2F0aW9uc1tlbnRyeV1baV0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqICsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRWYWwgPSBOdW1iZXIucGFyc2VGbG9hdChwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZlcnRPckhvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kVmFsICs9IGo7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZFZhbCArPSAoaiAqIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmRWYWwgPT0gY3VyclZhbHVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZFZhbCA9PSBjdXJyVmFsdWUgKyAxIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZFZhbCA9PSBjdXJyVmFsdWUgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY2hlY2tFeGlzdGVkKHNpemUsIHZlcnRPckhvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcclxuICAgIH1cclxuICAgIHJldHVybiB7Z2V0UmFuZG9tUG9zaXRpb259O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByYW5kb21QbGFjZW1lbnQ7IiwiY29uc3Qgc2hpcCA9IChwb3NpdGlvbikgPT4ge1xyXG4gICAgbGV0IG15TGVuZ3RoID0gcG9zaXRpb24ubGVuZ3RoO1xyXG4gICAgbGV0IG15UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIGxldCBteVN0YXR1cyA9IF9pbml0U3RhdHVzKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG15UG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlUG9zaXRpb24obmV3UG9zaXRpb24pIHtcclxuICAgICAgICBteVBvc2l0aW9uID0gbmV3UG9zaXRpb247XHJcbiAgICAgICAgbXlMZW5ndGggPSBwb3NpdGlvbi5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2luaXRTdGF0dXMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzQXJyID0gW107XHJcbiAgICAgICAgbXlQb3NpdGlvbi5mb3JFYWNoKGxvY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgc3RhdHVzQXJyLnB1c2goZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzdGF0dXNBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiBteVN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaXQobG9jYXRpb24pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG15UG9zaXRpb25baV0gPT09IGxvY2F0aW9uKVxyXG4gICAgICAgICAgICAgICAgbXlTdGF0dXNbaV0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghbXlTdGF0dXNbaV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0UG9zaXRpb24sIGNoYW5nZVBvc2l0aW9uLCBnZXRTdGF0dXMsIGhpdCwgaXNTdW5rfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbmltcG9ydCByYW5kb21QbGFjZW1lbnQgZnJvbSBcIi4vcmFuZG9tUGxhY2VtZW50XCI7XHJcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmNvbnN0IHBsYXllciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvYXJkID0gZ2FtZWJvYXJkKCk7XHJcbiAgICBjb25zdCBkZWZhdWx0X3NoaXBzID0gX2RlZmF1bHRTaGlwcygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICAgICAgLy8gZGVmYXVsdF9zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xyXG4gICAgICAgIC8vICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgcmFuZG9tUGxhY2VtZW50KCkuZ2V0UmFuZG9tUG9zaXRpb24oKS5mb3JFYWNoKHBvc2l0aW9uID0+IHtcclxuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXAocG9zaXRpb24pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCb2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gYm9hcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRCb2FyZCgpIHtcclxuICAgICAgICBib2FyZC5yZXNldE1hcCgpO1xyXG4gICAgICAgIGluaXRNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2luaXRNYXAsIGdldEJvYXJkLCByZXNldEJvYXJkfTtcclxufVxyXG5cclxuY29uc3QgX2RlZmF1bHRTaGlwcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNoaXBBcnIgPSBbXTtcclxuICAgIGNvbnN0IHNhbXBsZV9wb3NpdGlvbiA9IFxyXG4gICAgICAgIFtbJzExJ10sIFsnMzMnXSwgWyc2MCddLCBbJzkxJ10sXHJcbiAgICAgICAgWycyNycsICcyOCddLCBbJzQ3JywgJzU3J10sIFsnNjQnLCAnNzQnXSxcclxuICAgICAgICBbJzk1JywgJzk2JywgJzk3J10sIFsnMjUnLCAnMzUnLCAnNDUnXSxcclxuICAgICAgICBbJzc2JywgJzc3JywgJzc4JywgJzc5J11dO1xyXG4gICAgc2FtcGxlX3Bvc2l0aW9uLmZvckVhY2gocG9zaXRpb24gPT4ge1xyXG4gICAgICAgIHNoaXBBcnIucHVzaChzaGlwKHBvc2l0aW9uKSk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHNoaXBBcnI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBsYXllcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=