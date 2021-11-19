/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1 {\r\n    text-align: center;\r\n}\r\n\r\n.boards {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    gap: 10px;\r\n}\r\n\r\n.board_name {\r\n    text-align: center;\r\n}\r\n\r\n.board {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    width: 500px;\r\n    height: 500px;\r\n}\r\n\r\n.grid {\r\n    background-color: rgb(164, 179, 226);\r\n    border: rgb(168, 155, 155) solid 1px;\r\n}\r\n\r\n.missed {\r\n    background-color: brown;\r\n}\r\n\r\n.ship {\r\n    background-color: rgb(27, 36, 85);\r\n    border: rgb(0, 0, 0) solid 1px;\r\n}\r\n\r\n.hit {\r\n    background-color: dimgray;\r\n    border: rgb(0, 0, 0) solid 1px;\r\n}\r\n\r\n.changeCursor {\r\n    cursor: pointer;\r\n}\r\n\r\n.result {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iCAAiC;IACjC,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;IACzB,8BAA8B;AAClC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB","sourcesContent":["h1 {\r\n    text-align: center;\r\n}\r\n\r\n.boards {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    gap: 10px;\r\n}\r\n\r\n.board_name {\r\n    text-align: center;\r\n}\r\n\r\n.board {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    width: 500px;\r\n    height: 500px;\r\n}\r\n\r\n.grid {\r\n    background-color: rgb(164, 179, 226);\r\n    border: rgb(168, 155, 155) solid 1px;\r\n}\r\n\r\n.missed {\r\n    background-color: brown;\r\n}\r\n\r\n.ship {\r\n    background-color: rgb(27, 36, 85);\r\n    border: rgb(0, 0, 0) solid 1px;\r\n}\r\n\r\n.hit {\r\n    background-color: dimgray;\r\n    border: rgb(0, 0, 0) solid 1px;\r\n}\r\n\r\n.changeCursor {\r\n    cursor: pointer;\r\n}\r\n\r\n.result {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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

/***/ "./src/js/displayBoard.js":
/*!********************************!*\
  !*** ./src/js/displayBoard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function displayBoard() {
    _appendBoardDiv('myBoard');
    _appendBoardDiv('enemyBoard');
}

function _appendBoardDiv(boardName) {
    const boards = document.querySelector('.boards');
    const boardDiv = _createEle('div', `${boardName}Div`, '');
    const value = boardName.replace('B', ' B');
    const label = _createEle('h2', 'board_name', value);
    boardDiv.appendChild(label);
    boardDiv.appendChild(_appendBoard(boardName));
    boards.appendChild(boardDiv);
}

function _appendBoard(boardName) {
    const myBoard = _createEle('div', `.${boardName}`, '');
    myBoard.classList.add('board');
    const id = boardName.charAt(0);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const grid = _createEle('div', `${id}_${i}${j}`, '');
            grid.classList.add('grid');
            myBoard.appendChild(grid);
        }
    }
    return myBoard;
}

function _createEle(type, name, value) {
    const element = document.createElement(type);
    element.classList.add(name);
    element.textContent = value;
    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayBoard);

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

/***/ "./src/js/resetGame.js":
/*!*****************************!*\
  !*** ./src/js/resetGame.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayBoard */ "./src/js/displayBoard.js");
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startGame */ "./src/js/startGame.js");



function clickedReset() {
    document.querySelector('.reset').addEventListener('click', () => {
        _resetHtml();
        (0,_displayBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
        (0,_startGame__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });
}

function _resetHtml() {
    const boards = document.querySelector('.boards');
    while (boards.firstChild != null)
        boards.removeChild(boards.firstChild);
    document.querySelector('.winnerLabel').textContent = '';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickedReset);

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

/***/ }),

/***/ "./src/js/startGame.js":
/*!*****************************!*\
  !*** ./src/js/startGame.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayBoard */ "./src/js/displayBoard.js");
/* harmony import */ var _resetGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetGame */ "./src/js/resetGame.js");
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startGame */ "./src/js/startGame.js");




(() => {
    (0,_displayBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_resetGame__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_startGame__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw4Q0FBOEMsMkJBQTJCLEtBQUssaUJBQWlCLHNCQUFzQixzQ0FBc0Msa0JBQWtCLEtBQUsscUJBQXFCLDJCQUEyQixLQUFLLGdCQUFnQixzQkFBc0IsK0NBQStDLHFCQUFxQixzQkFBc0IsS0FBSyxlQUFlLDZDQUE2Qyw2Q0FBNkMsS0FBSyxpQkFBaUIsZ0NBQWdDLEtBQUssZUFBZSwwQ0FBMEMsdUNBQXVDLEtBQUssY0FBYyxrQ0FBa0MsdUNBQXVDLEtBQUssdUJBQXVCLHdCQUF3QixLQUFLLGlCQUFpQixzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIseUJBQXlCLEtBQUssT0FBTyxnRkFBZ0YsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSw4QkFBOEIsMkJBQTJCLEtBQUssaUJBQWlCLHNCQUFzQixzQ0FBc0Msa0JBQWtCLEtBQUsscUJBQXFCLDJCQUEyQixLQUFLLGdCQUFnQixzQkFBc0IsK0NBQStDLHFCQUFxQixzQkFBc0IsS0FBSyxlQUFlLDZDQUE2Qyw2Q0FBNkMsS0FBSyxpQkFBaUIsZ0NBQWdDLEtBQUssZUFBZSwwQ0FBMEMsdUNBQXVDLEtBQUssY0FBYyxrQ0FBa0MsdUNBQXVDLEtBQUssdUJBQXVCLHdCQUF3QixLQUFLLGlCQUFpQixzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIseUJBQXlCLEtBQUssbUJBQW1CO0FBQ2p4RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixFQUFFLEVBQUUsRUFBRTtBQUN4QjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkw7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxVQUFVO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsd0JBQXdCLFFBQVE7QUFDaEMsOENBQThDLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUN0QzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRlk7QUFDVjtBQUMxQjtBQUNBO0FBQ0Esa0JBQWtCLHNEQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBSTtBQUN6QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUN0Q3JCO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1Qix3QkFBd0IsUUFBUTtBQUNoQztBQUNBLDBEQUEwRCxLQUFLLEdBQUcsRUFBRSxFQUFFLEVBQUU7QUFDeEU7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0Msa0NBQWtDLEVBQUUsRUFBRSxFQUFFO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QyxrQ0FBa0MsRUFBRSxFQUFFLEVBQUU7QUFDeEM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ3FCO0FBQ047QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFZO0FBQ3BCLFFBQVEsc0RBQVM7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0FDbEIzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q3VCO0FBQ1o7QUFDQTtBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLG1EQUFNO0FBQzFCLG9CQUFvQixtREFBTTtBQUMxQixvQkFBb0IseURBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBTTtBQUNWLElBQUksbURBQU07QUFDVjtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEMsNEJBQTRCLFFBQVE7QUFDcEMsNERBQTRELEVBQUUsRUFBRSxFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsRUFBRSxFQUFFLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEVBQUUsRUFBRSxFQUFFO0FBQ3JDLDZDQUE2QyxFQUFFLEVBQUUsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLEVBQUUsRUFBRSxFQUFFO0FBQ2xELFFBQVEsbURBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyw0QkFBNEIsUUFBUTtBQUNwQyw2Q0FBNkMsRUFBRSxFQUFFLEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVM7Ozs7OztVQzFFeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ0g7QUFDSDtBQUNwQztBQUNBO0FBQ0EsSUFBSSx5REFBWTtBQUNoQixJQUFJLHNEQUFZO0FBQ2hCLElBQUksc0RBQVM7QUFDYixDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvY29tcHV0ZXJNb3ZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZGlzcGxheUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcmVzZXRHYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3N0YXJ0R2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmRfbmFtZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY0LCAxNzksIDIyNik7XFxyXFxuICAgIGJvcmRlcjogcmdiKDE2OCwgMTU1LCAxNTUpIHNvbGlkIDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3NlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMzYsIDg1KTtcXHJcXG4gICAgYm9yZGVyOiByZ2IoMCwgMCwgMCkgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JheTtcXHJcXG4gICAgYm9yZGVyOiByZ2IoMCwgMCwgMCkgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhbmdlQ3Vyc29yIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZF9uYW1lIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjQsIDE3OSwgMjI2KTtcXHJcXG4gICAgYm9yZGVyOiByZ2IoMTY4LCAxNTUsIDE1NSkgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzc2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAzNiwgODUpO1xcclxcbiAgICBib3JkZXI6IHJnYigwLCAwLCAwKSBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi5oaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmF5O1xcclxcbiAgICBib3JkZXI6IHJnYigwLCAwLCAwKSBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGFuZ2VDdXJzb3Ige1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb21wdXRlck1vdmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtb3ZlZCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlUmFuZG9tTW92ZSgpIHtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSBfZ2VuZXJhdGVSYW5vbWRDb3JyKCk7XHJcbiAgICAgICAgaWYgKG1vdmVkLmhhcyhwb3NpdGlvbikpXHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gbWFrZVJhbmRvbU1vdmUoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIG1vdmVkLmFkZChwb3NpdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9nZW5lcmF0ZVJhbm9tZENvcnIoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIHJldHVybiBgJHt4fSR7eX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7bWFrZVJhbmRvbU1vdmV9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wdXRlck1vdmU7IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKCkge1xyXG4gICAgX2FwcGVuZEJvYXJkRGl2KCdteUJvYXJkJyk7XHJcbiAgICBfYXBwZW5kQm9hcmREaXYoJ2VuZW15Qm9hcmQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2FwcGVuZEJvYXJkRGl2KGJvYXJkTmFtZSkge1xyXG4gICAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcycpO1xyXG4gICAgY29uc3QgYm9hcmREaXYgPSBfY3JlYXRlRWxlKCdkaXYnLCBgJHtib2FyZE5hbWV9RGl2YCwgJycpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBib2FyZE5hbWUucmVwbGFjZSgnQicsICcgQicpO1xyXG4gICAgY29uc3QgbGFiZWwgPSBfY3JlYXRlRWxlKCdoMicsICdib2FyZF9uYW1lJywgdmFsdWUpO1xyXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoX2FwcGVuZEJvYXJkKGJvYXJkTmFtZSkpO1xyXG4gICAgYm9hcmRzLmFwcGVuZENoaWxkKGJvYXJkRGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2FwcGVuZEJvYXJkKGJvYXJkTmFtZSkge1xyXG4gICAgY29uc3QgbXlCb2FyZCA9IF9jcmVhdGVFbGUoJ2RpdicsIGAuJHtib2FyZE5hbWV9YCwgJycpO1xyXG4gICAgbXlCb2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xyXG4gICAgY29uc3QgaWQgPSBib2FyZE5hbWUuY2hhckF0KDApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBfY3JlYXRlRWxlKCdkaXYnLCBgJHtpZH1fJHtpfSR7an1gLCAnJyk7XHJcbiAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xyXG4gICAgICAgICAgICBteUJvYXJkLmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBteUJvYXJkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlRWxlKHR5cGUsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTtcclxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Qm9hcmQ7IiwiY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFwID0gX2ZpbGxNYXAoKTtcclxuICAgIGNvbnN0IHNoaXBMaXN0ID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TWFwKCkge1xyXG4gICAgICAgIHJldHVybiBtYXA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRNYXAoKSB7XHJcbiAgICAgICAgbWFwID0gX2ZpbGxNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCkge1xyXG4gICAgICAgIGlmIChfY2hlY2tBdmFsaWFibGUoc2hpcCkpIHtcclxuICAgICAgICAgICAgc2hpcExpc3QucHVzaChzaGlwKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hpcFBvcyA9IHNoaXAuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgc2hpcFBvcy5mb3JFYWNoKHBvc2l0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBfZ2V0Q29ycihwb3NpdGlvbilbMF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gX2dldENvcnIocG9zaXRpb24pWzFdO1xyXG4gICAgICAgICAgICAgICAgbWFwW3hdW3ldID0gc2hpcDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbHJlYWR5IGV4aXN0IGEgc2hpcCBpbiB0aGlzIHBvc2l0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCB4ID0gX2dldENvcnIocG9zaXRpb24pWzBdO1xyXG4gICAgICAgIGNvbnN0IHkgPSBfZ2V0Q29ycihwb3NpdGlvbilbMV07XHJcbiAgICAgICAgaWYgKF9jaGVja0hhdmVTaGlwKHgsIHkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG1hcFt4XVt5XTtcclxuICAgICAgICAgICAgdGFyZ2V0LmhpdCgnJyArIHggKyB5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXBbeF1beV0gPSAnbWlzc2VkJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBbGxTdW5rKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCFzaGlwTGlzdFtpXS5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9maWxsTWFwKCkge1xyXG4gICAgICAgIGNvbnN0IHdob2xlTWFwID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IFtdXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgcm93LnB1c2goXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2hvbGVNYXAucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2hvbGVNYXA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NoZWNrQXZhbGlhYmxlKHNoaXApIHtcclxuICAgICAgICBjb25zdCBjb3JyQXJyID0gW107XHJcbiAgICAgICAgc2hpcC5nZXRQb3NpdGlvbigpLmZvckVhY2gocG9zaXRpb24gPT4ge1xyXG4gICAgICAgICAgICBjb3JyQXJyLnB1c2goX2dldENvcnIocG9zaXRpb24pKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gY29yckFycikge1xyXG4gICAgICAgICAgICBpZiAobWFwW2NvcnJBcnJbaV1bMF1dW2NvcnJBcnJbaV1bMV1dICE9ICcnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY2hlY2tIYXZlU2hpcCh4LCB5KSB7XHJcbiAgICAgICAgaWYgKG1hcFt4XVt5XSA9PSAnJyB8fCBtYXBbeF1beV0gPT0gJ21pc3NlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9nZXRDb3JyKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFtwb3NpdGlvbi5jaGFyQXQoMCksIHBvc2l0aW9uLmNoYXJBdCgxKV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXRNYXAsIHJlc2V0TWFwLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGlzQWxsU3Vua307XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDsiLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5jb25zdCBwbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib2FyZCA9IGdhbWVib2FyZCgpO1xyXG4gICAgY29uc3QgZGVmYXVsdF9zaGlwcyA9IF9kZWZhdWx0U2hpcHMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgICAgIGRlZmF1bHRfc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldEJvYXJkKCkge1xyXG4gICAgICAgIGJvYXJkLnJlc2V0TWFwKCk7XHJcbiAgICAgICAgaW5pdE1hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7aW5pdE1hcCwgZ2V0Qm9hcmQsIHJlc2V0Qm9hcmR9O1xyXG59XHJcblxyXG5jb25zdCBfZGVmYXVsdFNoaXBzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2hpcEFyciA9IFtdO1xyXG4gICAgY29uc3Qgc2FtcGxlX3Bvc2l0aW9uID0gXHJcbiAgICAgICAgW1snMTEnXSwgWyczMyddLCBbJzYwJ10sIFsnOTEnXSxcclxuICAgICAgICBbJzI3JywgJzI4J10sIFsnNDcnLCAnNTcnXSwgWyc2NCcsICc3NCddLFxyXG4gICAgICAgIFsnOTUnLCAnOTYnLCAnOTcnXSwgWycyNScsICczNScsICc0NSddLFxyXG4gICAgICAgIFsnNzYnLCAnNzcnLCAnNzgnLCAnNzknXV07XHJcbiAgICBzYW1wbGVfcG9zaXRpb24uZm9yRWFjaChwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgc2hpcEFyci5wdXNoKHNoaXAocG9zaXRpb24pKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gc2hpcEFycjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImZ1bmN0aW9uIHJlbmRlcihnYW1lYm9hcmQsIG5hbWUpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdhbWVib2FyZC5nZXRNYXAoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKyspIHtcclxuICAgICAgICAgICAgaWYgKG1hcFtpXVtqXSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX1fJHtpfSR7an1gKTtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09ICdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIF9lbmVteVJlbmRlcihzcXVhcmUsIGksIGosIG1hcFtpXVtqXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF9teVJlbmRlcihzcXVhcmUsIGksIGosIG1hcFtpXVtqXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9lbmVteVJlbmRlcihzcXVhcmUsIGksIGosIHNoaXApIHtcclxuICAgIGlmIChzaGlwID09ICdtaXNzZWQnKVxyXG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHNoaXAuZ2V0U3RhdHVzKCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBzaGlwLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBwb3NpdGlvbi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICBpZiAocG9zaXRpb25ba10gPT0gYCR7aX0ke2p9YCAmJiBzdGF0dXNba10pXHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBfbXlSZW5kZXIoc3F1YXJlLCBpLCBqLCBzaGlwKSB7XHJcbiAgICBpZiAoc2hpcCAhPSAnbWlzc2VkJykge1xyXG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gc2hpcC5nZXRTdGF0dXMoKTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHNoaXAuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHBvc2l0aW9uLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbltrXSA9PSBgJHtpfSR7an1gICYmIHN0YXR1c1trXSlcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyOyIsImltcG9ydCBkaXNwbGF5Qm9hcmQgZnJvbSBcIi4vZGlzcGxheUJvYXJkXCI7XHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4vc3RhcnRHYW1lXCI7XHJcblxyXG5mdW5jdGlvbiBjbGlja2VkUmVzZXQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBfcmVzZXRIdG1sKCk7XHJcbiAgICAgICAgZGlzcGxheUJvYXJkKCk7XHJcbiAgICAgICAgc3RhcnRHYW1lKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Jlc2V0SHRtbCgpIHtcclxuICAgIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMnKTtcclxuICAgIHdoaWxlIChib2FyZHMuZmlyc3RDaGlsZCAhPSBudWxsKVxyXG4gICAgICAgIGJvYXJkcy5yZW1vdmVDaGlsZChib2FyZHMuZmlyc3RDaGlsZCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyTGFiZWwnKS50ZXh0Q29udGVudCA9ICcnO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGlja2VkUmVzZXQ7IiwiY29uc3Qgc2hpcCA9IChwb3NpdGlvbikgPT4ge1xyXG4gICAgbGV0IG15TGVuZ3RoID0gcG9zaXRpb24ubGVuZ3RoO1xyXG4gICAgbGV0IG15UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIGxldCBteVN0YXR1cyA9IF9pbml0U3RhdHVzKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG15UG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlUG9zaXRpb24obmV3UG9zaXRpb24pIHtcclxuICAgICAgICBteVBvc2l0aW9uID0gbmV3UG9zaXRpb247XHJcbiAgICAgICAgbXlMZW5ndGggPSBwb3NpdGlvbi5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2luaXRTdGF0dXMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzQXJyID0gW107XHJcbiAgICAgICAgbXlQb3NpdGlvbi5mb3JFYWNoKGxvY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgc3RhdHVzQXJyLnB1c2goZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzdGF0dXNBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiBteVN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaXQobG9jYXRpb24pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG15UG9zaXRpb25baV0gPT09IGxvY2F0aW9uKVxyXG4gICAgICAgICAgICAgICAgbXlTdGF0dXNbaV0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghbXlTdGF0dXNbaV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0UG9zaXRpb24sIGNoYW5nZVBvc2l0aW9uLCBnZXRTdGF0dXMsIGhpdCwgaXNTdW5rfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcDsiLCJpbXBvcnQgY29tcHV0ZXJNb3ZlIGZyb20gJy4vY29tcHV0ZXJNb3ZlJztcclxuaW1wb3J0IHBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xyXG5cclxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyMSA9IHBsYXllcigpO1xyXG4gICAgY29uc3QgcGxheWVyMiA9IHBsYXllcigpO1xyXG4gICAgY29uc3QgYWlfbW92ZSA9IGNvbXB1dGVyTW92ZSgpO1xyXG4gICAgY29uc3QgbXlNb3ZlcyA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICBwbGF5ZXIxLmluaXRNYXAoKTtcclxuICAgIHBsYXllcjIuaW5pdE1hcCgpO1xyXG4gICAgX2VuZW15QWRkTGlzdGVuZXIocGxheWVyMSwgcGxheWVyMiwgYWlfbW92ZSk7XHJcblxyXG4gICAgcmVuZGVyKHBsYXllcjEuZ2V0Qm9hcmQoKSwgJ20nKTtcclxuICAgIHJlbmRlcihwbGF5ZXIyLmdldEJvYXJkKCksICdlJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gX2VuZW15QWRkTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVfJHtpfSR7an1gKTtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdjaGFuZ2VDdXJzb3InKTtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2NoZWNrRWFjaE1vdmVzKGksIGopO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jaGVja0VhY2hNb3ZlcyhpLCBqKSB7XHJcbiAgICAgICAgbGV0IGFsbFN1bmsgPSAhcGxheWVyMS5nZXRCb2FyZCgpLmlzQWxsU3VuaygpICYmICFwbGF5ZXIyLmdldEJvYXJkKCkuaXNBbGxTdW5rKCk7XHJcbiAgICAgICAgbGV0IG1vdmVkID0gbXlNb3Zlcy5oYXMoYCR7aX0ke2p9YCk7XHJcbiAgICAgICAgaWYgKGFsbFN1bmsgJiYgIW1vdmVkKSB7XHJcbiAgICAgICAgICAgIGlmICghbW92ZWQpIHtcclxuICAgICAgICAgICAgICAgIF9tYWtlQU1vdmUoaSwgaik7XHJcbiAgICAgICAgICAgICAgICBteU1vdmVzLmFkZChgJHtpfSR7an1gKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lXyR7aX0ke2p9YCkuY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlQ3Vyc29yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIF9tYWtlQU1vdmUoaSwgaikge1xyXG4gICAgICAgIHBsYXllcjIuZ2V0Qm9hcmQoKS5yZWNlaXZlQXR0YWNrKGAke2l9JHtqfWApO1xyXG4gICAgICAgIHJlbmRlcihwbGF5ZXIyLmdldEJvYXJkKCksICdlJyk7XHJcbiAgICAgICAgX3BsYXllcjJNb3ZlcygpO1xyXG4gICAgICAgIF9nYW1lT3ZlcigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBfcGxheWVyMk1vdmVzKCkge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gYWlfbW92ZS5tYWtlUmFuZG9tTW92ZSgpO1xyXG4gICAgICAgIHBsYXllcjEuZ2V0Qm9hcmQoKS5yZWNlaXZlQXR0YWNrKHBvc2l0aW9uKTtcclxuICAgICAgICByZW5kZXIocGxheWVyMS5nZXRCb2FyZCgpLCAnbScpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBfZ2FtZU92ZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyTGFiZWwnKTtcclxuICAgICAgICBpZiAocGxheWVyMi5nZXRCb2FyZCgpLmlzQWxsU3VuaygpKXtcclxuICAgICAgICAgICAgd2lubmVyTGFiZWwudGV4dENvbnRlbnQgPSAnWW91IHdpbiBDb25ncmFkdWF0aW9uISEhJztcclxuICAgICAgICAgICAgX3JlbW92ZVBvaW50ZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBsYXllcjEuZ2V0Qm9hcmQoKS5pc0FsbFN1bmsoKSkge1xyXG4gICAgICAgICAgICB3aW5uZXJMYWJlbC50ZXh0Q29udGVudCA9ICdBSSB3aW5zLCB0cnkgYWdhaW4/JztcclxuICAgICAgICAgICAgX3JlbW92ZVBvaW50ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIF9yZW1vdmVQb2ludGVyKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lXyR7aX0ke2p9YCkuY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlQ3Vyc29yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0R2FtZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRpc3BsYXlCb2FyZCBmcm9tIFwiLi9kaXNwbGF5Qm9hcmRcIjtcclxuaW1wb3J0IGNsaWNrZWRSZXNldCBmcm9tIFwiLi9yZXNldEdhbWVcIjtcclxuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi9zdGFydEdhbWVcIjtcclxuXHJcbigoKSA9PiB7XHJcbiAgICBkaXNwbGF5Qm9hcmQoKTtcclxuICAgIGNsaWNrZWRSZXNldCgpO1xyXG4gICAgc3RhcnRHYW1lKCk7XHJcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9