/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWVib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IF9maWxsTWFwKCk7XHJcbiAgICBjb25zdCBzaGlwTGlzdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1hcCgpIHtcclxuICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0TWFwKCkge1xyXG4gICAgICAgIG1hcCA9IF9maWxsTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXApIHtcclxuICAgICAgICBpZiAoX2NoZWNrQXZhbGlhYmxlKHNoaXApKSB7XHJcbiAgICAgICAgICAgIHNoaXBMaXN0LnB1c2goc2hpcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBQb3MgPSBzaGlwLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHNoaXBQb3MuZm9yRWFjaChwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gX2dldENvcnIocG9zaXRpb24pWzBdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IF9nZXRDb3JyKHBvc2l0aW9uKVsxXTtcclxuICAgICAgICAgICAgICAgIG1hcFt4XVt5XSA9IHNoaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYWxyZWFkeSBleGlzdCBhIHNoaXAgaW4gdGhpcyBwb3NpdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IF9nZXRDb3JyKHBvc2l0aW9uKVswXTtcclxuICAgICAgICBjb25zdCB5ID0gX2dldENvcnIocG9zaXRpb24pWzFdO1xyXG4gICAgICAgIGlmIChfY2hlY2tIYXZlU2hpcCh4LCB5KSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtYXBbeF1beV07XHJcbiAgICAgICAgICAgIHRhcmdldC5oaXQoJycgKyB4ICsgeSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWFwW3hdW3ldID0gJ21pc3NlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzQWxsU3VuaygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghc2hpcExpc3RbaV0uaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfZmlsbE1hcCgpIHtcclxuICAgICAgICBjb25zdCB3aG9sZU1hcCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBbXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdob2xlTWFwLnB1c2gocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdob2xlTWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jaGVja0F2YWxpYWJsZShzaGlwKSB7XHJcbiAgICAgICAgY29uc3QgY29yckFyciA9IFtdO1xyXG4gICAgICAgIHNoaXAuZ2V0UG9zaXRpb24oKS5mb3JFYWNoKHBvc2l0aW9uID0+IHtcclxuICAgICAgICAgICAgY29yckFyci5wdXNoKF9nZXRDb3JyKHBvc2l0aW9uKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBmb3IgKGxldCBpIGluIGNvcnJBcnIpIHtcclxuICAgICAgICAgICAgaWYgKG1hcFtjb3JyQXJyW2ldWzBdXVtjb3JyQXJyW2ldWzFdXSAhPSAnJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NoZWNrSGF2ZVNoaXAoeCwgeSkge1xyXG4gICAgICAgIGlmIChtYXBbeF1beV0gPT0gJycgfHwgbWFwW3hdW3ldID09ICdtaXNzZWQnKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfZ2V0Q29ycihwb3NpdGlvbikge1xyXG4gICAgICAgIHJldHVybiBbcG9zaXRpb24uY2hhckF0KDApLCBwb3NpdGlvbi5jaGFyQXQoMSldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0TWFwLCByZXNldE1hcCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBpc0FsbFN1bmt9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9