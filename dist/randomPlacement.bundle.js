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
/*!***********************************!*\
  !*** ./src/js/randomPlacement.js ***!
  \***********************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tUGxhY2VtZW50LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsNEJBQTRCLFNBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixFQUFFLEVBQUUsRUFBRTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixLQUFLLEVBQUUsS0FBSztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQsZ0NBQWdDLHlCQUF5QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0EsZ0NBQWdDLFVBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsaUVBQWUsZUFBZSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcmFuZG9tUGxhY2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgcmFuZG9tUGxhY2VtZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbG9jYXRpb25zID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tUG9zaXRpb24oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0LWk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVydE9ySG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwUG9zID0gX2NyZWF0ZVNoaXBQb3NpdGlvbihqICsgMSwgdmVydE9ySG9yKTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9ucy5wdXNoKHNoaXBQb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsb2NhdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2dldFJhbmRvbUNvcnIoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIHJldHVybiBgJHt4fSR7eX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jcmVhdGVTaGlwUG9zaXRpb24oc2l6ZSwgdmVydE9ySG9yKSB7XHJcbiAgICAgICAgY29uc3QgcG9zQXJyID0gW107XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBfZ2V0UmFuZG9tQ29ycigpO1xyXG4gICAgICAgIGNvbnN0IHggPSBOdW1iZXIucGFyc2VGbG9hdChwb3NpdGlvbi5jaGFyQXQoMCkpO1xyXG4gICAgICAgIGNvbnN0IHkgPSBOdW1iZXIucGFyc2VGbG9hdChwb3NpdGlvbi5jaGFyQXQoMSkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdYID0geDtcclxuICAgICAgICAgICAgbGV0IG5ld1kgPSB5O1xyXG4gICAgICAgICAgICBpZiAodmVydE9ySG9yKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdZID0geSArIGk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3WSA+IDkpIFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1kgPSA5IC1pOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1ggPSB4ICsgaTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdYID4gOSkgXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3WCA9IDkgLWk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9zQXJyLnB1c2goYCR7bmV3WH0ke25ld1l9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfY2hlY2tQbGFjZW1lbnQocG9zQXJyLCBzaXplLCB2ZXJ0T3JIb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jaGVja1BsYWNlbWVudChwb3NBcnIsIHNpemUsIHZlcnRPckhvcikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQocG9zQXJyW2ldKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsb2NhdGlvbnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbG9jYXRpb25zW2pdLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyclAgPSBOdW1iZXIucGFyc2VGbG9hdChsb2NhdGlvbnNbal1ba10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSBjdXJyUCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9PSBjdXJyUCArIDEgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPT0gY3VyclAgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NyZWF0ZVNoaXBQb3NpdGlvbihzaXplLCB2ZXJ0T3JIb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zQXJyLnNvcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY2hlY2tFeGlzdGVkKHNpemUsIHZlcnRPckhvcikge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gX2dldFJhbmRvbUNvcnIoKTtcclxuICAgICAgICBmb3IgKGxldCBlbnRyeSBpbiBsb2NhdGlvbnMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhdGlvbnNbZW50cnldLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyVmFsdWUgPSBOdW1iZXIucGFyc2VGbG9hdChsb2NhdGlvbnNbZW50cnldW2ldKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaiArKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kVmFsID0gTnVtYmVyLnBhcnNlRmxvYXQocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0T3JIb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZFZhbCArPSBqO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRWYWwgKz0gKGogKiAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYW5kVmFsID09IGN1cnJWYWx1ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRWYWwgPT0gY3VyclZhbHVlICsgMSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRWYWwgPT0gY3VyclZhbHVlIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NoZWNrRXhpc3RlZChzaXplLCB2ZXJ0T3JIb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2dldFJhbmRvbVBvc2l0aW9ufTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tUGxhY2VtZW50OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==