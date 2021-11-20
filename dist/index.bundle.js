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
___CSS_LOADER_EXPORT___.push([module.id, "h1 {\r\n    text-align: center;\r\n}\r\n\r\n.boards {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    gap: 10px;\r\n}\r\n\r\n.board_name {\r\n    text-align: center;\r\n}\r\n\r\n.board {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    width: 500px;\r\n    height: 500px;\r\n}\r\n\r\n.grid {\r\n    background-color: rgb(230, 232, 238);\r\n    border: rgb(168, 155, 155) solid 1px;\r\n}\r\n\r\n.missed {\r\n    background-color: rgb(77, 74, 74);\r\n}\r\n\r\n.ship {\r\n    background-color: rgb(27, 36, 85);\r\n    border: rgb(0, 0, 0) solid 1px;\r\n}\r\n\r\n.hit {\r\n    background-color: rgb(247, 0, 0) !important;\r\n    border: rgb(36, 29, 29) solid 1px;\r\n}\r\n\r\n.changeCursor {\r\n    cursor: pointer;\r\n}\r\n\r\n.result {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n}\r\n\r\n.sml {\r\n    background-color: gold;\r\n    border: gold solid 1px;\r\n}\r\n\r\n.mid {\r\n    background-color: green;\r\n    border: green solid 1px;\r\n}\r\n\r\n.lrg {\r\n    background-color: lightcoral;\r\n    border: lightcoral solid 1px;\r\n}\r\n\r\n.max {\r\n    background-color: magenta;\r\n    border: magenta solid 1px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,oCAAoC;AACxC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;IACjC,8BAA8B;AAClC;;AAEA;IACI,2CAA2C;IAC3C,iCAAiC;AACrC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,4BAA4B;IAC5B,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;AAC7B","sourcesContent":["h1 {\r\n    text-align: center;\r\n}\r\n\r\n.boards {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    gap: 10px;\r\n}\r\n\r\n.board_name {\r\n    text-align: center;\r\n}\r\n\r\n.board {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    width: 500px;\r\n    height: 500px;\r\n}\r\n\r\n.grid {\r\n    background-color: rgb(230, 232, 238);\r\n    border: rgb(168, 155, 155) solid 1px;\r\n}\r\n\r\n.missed {\r\n    background-color: rgb(77, 74, 74);\r\n}\r\n\r\n.ship {\r\n    background-color: rgb(27, 36, 85);\r\n    border: rgb(0, 0, 0) solid 1px;\r\n}\r\n\r\n.hit {\r\n    background-color: rgb(247, 0, 0) !important;\r\n    border: rgb(36, 29, 29) solid 1px;\r\n}\r\n\r\n.changeCursor {\r\n    cursor: pointer;\r\n}\r\n\r\n.result {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n}\r\n\r\n.sml {\r\n    background-color: gold;\r\n    border: gold solid 1px;\r\n}\r\n\r\n.mid {\r\n    background-color: green;\r\n    border: green solid 1px;\r\n}\r\n\r\n.lrg {\r\n    background-color: lightcoral;\r\n    border: lightcoral solid 1px;\r\n}\r\n\r\n.max {\r\n    background-color: magenta;\r\n    border: magenta solid 1px;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04wQztBQUNIO0FBQ0g7QUFDcEM7QUFDQTtBQUNBLElBQUkseURBQVk7QUFDaEIsSUFBSSxzREFBWTtBQUNoQixJQUFJLHNEQUFTO0FBQ2IsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2NvbXB1dGVyTW92ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2Rpc3BsYXlCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3JhbmRvbVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3Jlc2V0R2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkX25hbWUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMyLCAyMzgpO1xcclxcbiAgICBib3JkZXI6IHJnYigxNjgsIDE1NSwgMTU1KSBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi5taXNzZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDc0LCA3NCk7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAzNiwgODUpO1xcclxcbiAgICBib3JkZXI6IHJnYigwLCAwLCAwKSBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi5oaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAwLCAwKSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXI6IHJnYigzNiwgMjksIDI5KSBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGFuZ2VDdXJzb3Ige1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxuICAgIGJvcmRlcjogZ29sZCBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi5taWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyOiBncmVlbiBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi5scmcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcclxcbiAgICBib3JkZXI6IGxpZ2h0Y29yYWwgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWF4IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFnZW50YTtcXHJcXG4gICAgYm9yZGVyOiBtYWdlbnRhIHNvbGlkIDFweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZF9uYW1lIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMiwgMjM4KTtcXHJcXG4gICAgYm9yZGVyOiByZ2IoMTY4LCAxNTUsIDE1NSkgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzc2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCA3NCwgNzQpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMzYsIDg1KTtcXHJcXG4gICAgYm9yZGVyOiByZ2IoMCwgMCwgMCkgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMCwgMCkgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyOiByZ2IoMzYsIDI5LCAyOSkgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhbmdlQ3Vyc29yIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcclxcbiAgICBib3JkZXI6IGdvbGQgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGJvcmRlcjogZ3JlZW4gc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubHJnIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXHJcXG4gICAgYm9yZGVyOiBsaWdodGNvcmFsIHNvbGlkIDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1heCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hZ2VudGE7XFxyXFxuICAgIGJvcmRlcjogbWFnZW50YSBzb2xpZCAxcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29tcHV0ZXJNb3ZlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW92ZWQgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZVJhbmRvbU1vdmUoKSB7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gX2dlbmVyYXRlUmFub21kQ29ycigpO1xyXG4gICAgICAgIGlmIChtb3ZlZC5oYXMocG9zaXRpb24pKVxyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IG1ha2VSYW5kb21Nb3ZlKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBtb3ZlZC5hZGQocG9zaXRpb24pO1xyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfZ2VuZXJhdGVSYW5vbWRDb3JyKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICByZXR1cm4gYCR7eH0ke3l9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge21ha2VSYW5kb21Nb3ZlfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcHV0ZXJNb3ZlOyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZCgpIHtcclxuICAgIF9hcHBlbmRCb2FyZERpdignbXlCb2FyZCcpO1xyXG4gICAgX2FwcGVuZEJvYXJkRGl2KCdlbmVteUJvYXJkJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hcHBlbmRCb2FyZERpdihib2FyZE5hbWUpIHtcclxuICAgIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMnKTtcclxuICAgIGNvbnN0IGJvYXJkRGl2ID0gX2NyZWF0ZUVsZSgnZGl2JywgYCR7Ym9hcmROYW1lfURpdmAsICcnKTtcclxuICAgIGNvbnN0IHZhbHVlID0gYm9hcmROYW1lLnJlcGxhY2UoJ0InLCAnIEInKTtcclxuICAgIGNvbnN0IGxhYmVsID0gX2NyZWF0ZUVsZSgnaDInLCAnYm9hcmRfbmFtZScsIHZhbHVlKTtcclxuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKF9hcHBlbmRCb2FyZChib2FyZE5hbWUpKTtcclxuICAgIGJvYXJkcy5hcHBlbmRDaGlsZChib2FyZERpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hcHBlbmRCb2FyZChib2FyZE5hbWUpIHtcclxuICAgIGNvbnN0IG15Qm9hcmQgPSBfY3JlYXRlRWxlKCdkaXYnLCBgLiR7Ym9hcmROYW1lfWAsICcnKTtcclxuICAgIG15Qm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcclxuICAgIGNvbnN0IGlkID0gYm9hcmROYW1lLmNoYXJBdCgwKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkID0gX2NyZWF0ZUVsZSgnZGl2JywgYCR7aWR9XyR7aX0ke2p9YCwgJycpO1xyXG4gICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcclxuICAgICAgICAgICAgbXlCb2FyZC5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbXlCb2FyZDtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUVsZSh0eXBlLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSk7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUJvYXJkOyIsImNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IF9maWxsTWFwKCk7XHJcbiAgICBjb25zdCBzaGlwTGlzdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1hcCgpIHtcclxuICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0TWFwKCkge1xyXG4gICAgICAgIG1hcCA9IF9maWxsTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXApIHtcclxuICAgICAgICBpZiAoX2NoZWNrQXZhbGlhYmxlKHNoaXApKSB7XHJcbiAgICAgICAgICAgIHNoaXBMaXN0LnB1c2goc2hpcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBQb3MgPSBzaGlwLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHNoaXBQb3MuZm9yRWFjaChwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gX2dldENvcnIocG9zaXRpb24pWzBdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IF9nZXRDb3JyKHBvc2l0aW9uKVsxXTtcclxuICAgICAgICAgICAgICAgIG1hcFt4XVt5XSA9IHNoaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYWxyZWFkeSBleGlzdCBhIHNoaXAgaW4gdGhpcyBwb3NpdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IF9nZXRDb3JyKHBvc2l0aW9uKVswXTtcclxuICAgICAgICBjb25zdCB5ID0gX2dldENvcnIocG9zaXRpb24pWzFdO1xyXG4gICAgICAgIGlmIChfY2hlY2tIYXZlU2hpcCh4LCB5KSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtYXBbeF1beV07XHJcbiAgICAgICAgICAgIHRhcmdldC5oaXQoJycgKyB4ICsgeSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWFwW3hdW3ldID0gJ21pc3NlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzQWxsU3VuaygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghc2hpcExpc3RbaV0uaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfZmlsbE1hcCgpIHtcclxuICAgICAgICBjb25zdCB3aG9sZU1hcCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBbXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdob2xlTWFwLnB1c2gocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdob2xlTWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jaGVja0F2YWxpYWJsZShzaGlwKSB7XHJcbiAgICAgICAgY29uc3QgY29yckFyciA9IFtdO1xyXG4gICAgICAgIHNoaXAuZ2V0UG9zaXRpb24oKS5mb3JFYWNoKHBvc2l0aW9uID0+IHtcclxuICAgICAgICAgICAgY29yckFyci5wdXNoKF9nZXRDb3JyKHBvc2l0aW9uKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBmb3IgKGxldCBpIGluIGNvcnJBcnIpIHtcclxuICAgICAgICAgICAgaWYgKG1hcFtjb3JyQXJyW2ldWzBdXVtjb3JyQXJyW2ldWzFdXSAhPSAnJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NoZWNrSGF2ZVNoaXAoeCwgeSkge1xyXG4gICAgICAgIGlmIChtYXBbeF1beV0gPT0gJycgfHwgbWFwW3hdW3ldID09ICdtaXNzZWQnKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfZ2V0Q29ycihwb3NpdGlvbikge1xyXG4gICAgICAgIHJldHVybiBbcG9zaXRpb24uY2hhckF0KDApLCBwb3NpdGlvbi5jaGFyQXQoMSldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0TWFwLCByZXNldE1hcCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBpc0FsbFN1bmt9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7IiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuaW1wb3J0IHJhbmRvbVBsYWNlbWVudCBmcm9tIFwiLi9yYW5kb21QbGFjZW1lbnRcIjtcclxuaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuY29uc3QgcGxheWVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQoKTtcclxuICAgIGNvbnN0IGRlZmF1bHRfc2hpcHMgPSBfZGVmYXVsdFNoaXBzKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgICAgICAvLyBkZWZhdWx0X3NoaXBzLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgICAgLy8gICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICByYW5kb21QbGFjZW1lbnQoKS5nZXRSYW5kb21Qb3NpdGlvbigpLmZvckVhY2gocG9zaXRpb24gPT4ge1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcChwb3NpdGlvbikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldEJvYXJkKCkge1xyXG4gICAgICAgIGJvYXJkLnJlc2V0TWFwKCk7XHJcbiAgICAgICAgaW5pdE1hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7aW5pdE1hcCwgZ2V0Qm9hcmQsIHJlc2V0Qm9hcmR9O1xyXG59XHJcblxyXG5jb25zdCBfZGVmYXVsdFNoaXBzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2hpcEFyciA9IFtdO1xyXG4gICAgY29uc3Qgc2FtcGxlX3Bvc2l0aW9uID0gXHJcbiAgICAgICAgW1snMTEnXSwgWyczMyddLCBbJzYwJ10sIFsnOTEnXSxcclxuICAgICAgICBbJzI3JywgJzI4J10sIFsnNDcnLCAnNTcnXSwgWyc2NCcsICc3NCddLFxyXG4gICAgICAgIFsnOTUnLCAnOTYnLCAnOTcnXSwgWycyNScsICczNScsICc0NSddLFxyXG4gICAgICAgIFsnNzYnLCAnNzcnLCAnNzgnLCAnNzknXV07XHJcbiAgICBzYW1wbGVfcG9zaXRpb24uZm9yRWFjaChwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgc2hpcEFyci5wdXNoKHNoaXAocG9zaXRpb24pKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gc2hpcEFycjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImNvbnN0IHJhbmRvbVBsYWNlbWVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvY2F0aW9ucyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbVBvc2l0aW9uKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNC1pOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRPckhvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcFBvcyA9IF9jcmVhdGVTaGlwUG9zaXRpb24oaiArIDEsIHZlcnRPckhvcik7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnMucHVzaChzaGlwUG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbG9jYXRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9nZXRSYW5kb21Db3JyKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICByZXR1cm4gYCR7eH0ke3l9YDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY3JlYXRlU2hpcFBvc2l0aW9uKHNpemUsIHZlcnRPckhvcikge1xyXG4gICAgICAgIGNvbnN0IHBvc0FyciA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gX2dldFJhbmRvbUNvcnIoKTtcclxuICAgICAgICBjb25zdCB4ID0gTnVtYmVyLnBhcnNlRmxvYXQocG9zaXRpb24uY2hhckF0KDApKTtcclxuICAgICAgICBjb25zdCB5ID0gTnVtYmVyLnBhcnNlRmxvYXQocG9zaXRpb24uY2hhckF0KDEpKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbmV3WCA9IHg7XHJcbiAgICAgICAgICAgIGxldCBuZXdZID0geTtcclxuICAgICAgICAgICAgaWYgKHZlcnRPckhvcikge1xyXG4gICAgICAgICAgICAgICAgbmV3WSA9IHkgKyBpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1kgPiA5KSBcclxuICAgICAgICAgICAgICAgICAgICBuZXdZID0gOSAtaTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdYID0geCArIGk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3WCA+IDkpIFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ggPSA5IC1pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvc0Fyci5wdXNoKGAke25ld1h9JHtuZXdZfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX2NoZWNrUGxhY2VtZW50KHBvc0Fyciwgc2l6ZSwgdmVydE9ySG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY2hlY2tQbGFjZW1lbnQocG9zQXJyLCBzaXplLCB2ZXJ0T3JIb3IpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KHBvc0FycltpXSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbG9jYXRpb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGxvY2F0aW9uc1tqXS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJQID0gTnVtYmVyLnBhcnNlRmxvYXQobG9jYXRpb25zW2pdW2tdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPT0gY3VyclAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPT0gY3VyclAgKyAxIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID09IGN1cnJQIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jcmVhdGVTaGlwUG9zaXRpb24oc2l6ZSwgdmVydE9ySG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvc0Fyci5zb3J0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NoZWNrRXhpc3RlZChzaXplLCB2ZXJ0T3JIb3IpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IF9nZXRSYW5kb21Db3JyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgZW50cnkgaW4gbG9jYXRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYXRpb25zW2VudHJ5XS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyclZhbHVlID0gTnVtYmVyLnBhcnNlRmxvYXQobG9jYXRpb25zW2VudHJ5XVtpXSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGogKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFZhbCA9IE51bWJlci5wYXJzZUZsb2F0KHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmVydE9ySG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRWYWwgKz0gajtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kVmFsICs9IChqICogMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmFuZFZhbCA9PSBjdXJyVmFsdWUgfHxcclxuICAgICAgICAgICAgICAgICAgICByYW5kVmFsID09IGN1cnJWYWx1ZSArIDEgfHxcclxuICAgICAgICAgICAgICAgICAgICByYW5kVmFsID09IGN1cnJWYWx1ZSAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jaGVja0V4aXN0ZWQoc2l6ZSwgdmVydE9ySG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtnZXRSYW5kb21Qb3NpdGlvbn07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbVBsYWNlbWVudDsiLCJmdW5jdGlvbiByZW5kZXIoZ2FtZWJvYXJkLCBuYW1lKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnYW1lYm9hcmQuZ2V0TWFwKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICsrKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXBbaV1bal0gIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9XyR7aX0ke2p9YCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PSAnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBfZW5lbXlSZW5kZXIoc3F1YXJlLCBpLCBqLCBtYXBbaV1bal0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfbXlSZW5kZXIoc3F1YXJlLCBpLCBqLCBtYXBbaV1bal0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfZW5lbXlSZW5kZXIoc3F1YXJlLCBpLCBqLCBzaGlwKSB7XHJcbiAgICBpZiAoc2hpcCA9PSAnbWlzc2VkJylcclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSBzaGlwLmdldFN0YXR1cygpO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2hpcC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcG9zaXRpb24ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uW2tdID09IGAke2l9JHtqfWAgJiYgc3RhdHVzW2tdKVxyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxufVxyXG5cclxuZnVuY3Rpb24gX215UmVuZGVyKHNxdWFyZSwgaSwgaiwgc2hpcCkge1xyXG4gICAgaWYgKHNoaXAgIT0gJ21pc3NlZCcpIHtcclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHNoaXAuZ2V0U3RhdHVzKCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBzaGlwLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBwb3NpdGlvbi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICBfYWRkU2hpcENsYXNzKHBvc2l0aW9uLCBzcXVhcmUpO1xyXG4gICAgICAgICAgICBpZiAocG9zaXRpb25ba10gPT0gYCR7aX0ke2p9YCAmJiBzdGF0dXNba10pXHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hZGRTaGlwQ2xhc3MocG9zaXRpb24sIHNxdWFyZSkge1xyXG4gICAgc3dpdGNoIChwb3NpdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzbWwnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pZCcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbHJnJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtYXgnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjsiLCJpbXBvcnQgZGlzcGxheUJvYXJkIGZyb20gXCIuL2Rpc3BsYXlCb2FyZFwiO1xyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuL3N0YXJ0R2FtZVwiO1xyXG5cclxuZnVuY3Rpb24gY2xpY2tlZFJlc2V0KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgX3Jlc2V0SHRtbCgpO1xyXG4gICAgICAgIGRpc3BsYXlCb2FyZCgpO1xyXG4gICAgICAgIHN0YXJ0R2FtZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9yZXNldEh0bWwoKSB7XHJcbiAgICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzJyk7XHJcbiAgICB3aGlsZSAoYm9hcmRzLmZpcnN0Q2hpbGQgIT0gbnVsbClcclxuICAgICAgICBib2FyZHMucmVtb3ZlQ2hpbGQoYm9hcmRzLmZpcnN0Q2hpbGQpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lckxhYmVsJykudGV4dENvbnRlbnQgPSAnJztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpY2tlZFJlc2V0OyIsImNvbnN0IHNoaXAgPSAocG9zaXRpb24pID0+IHtcclxuICAgIGxldCBteUxlbmd0aCA9IHBvc2l0aW9uLmxlbmd0aDtcclxuICAgIGxldCBteVBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICBsZXQgbXlTdGF0dXMgPSBfaW5pdFN0YXR1cygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBteVBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZVBvc2l0aW9uKG5ld1Bvc2l0aW9uKSB7XHJcbiAgICAgICAgbXlQb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xyXG4gICAgICAgIG15TGVuZ3RoID0gcG9zaXRpb24ubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9pbml0U3RhdHVzKCkge1xyXG4gICAgICAgIGNvbnN0IHN0YXR1c0FyciA9IFtdO1xyXG4gICAgICAgIG15UG9zaXRpb24uZm9yRWFjaChsb2NhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHN0YXR1c0Fyci5wdXNoKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc3RhdHVzQXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gbXlTdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGl0KGxvY2F0aW9uKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChteVBvc2l0aW9uW2ldID09PSBsb2NhdGlvbilcclxuICAgICAgICAgICAgICAgIG15U3RhdHVzW2ldID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIW15U3RhdHVzW2ldKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2dldFBvc2l0aW9uLCBjaGFuZ2VQb3NpdGlvbiwgZ2V0U3RhdHVzLCBoaXQsIGlzU3Vua307XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNoaXA7IiwiaW1wb3J0IGNvbXB1dGVyTW92ZSBmcm9tICcuL2NvbXB1dGVyTW92ZSc7XHJcbmltcG9ydCBwbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyJztcclxuXHJcbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoKTtcclxuICAgIGNvbnN0IHBsYXllcjIgPSBwbGF5ZXIoKTtcclxuICAgIGNvbnN0IGFpX21vdmUgPSBjb21wdXRlck1vdmUoKTtcclxuICAgIGNvbnN0IG15TW92ZXMgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgcGxheWVyMS5pbml0TWFwKCk7XHJcbiAgICBwbGF5ZXIyLmluaXRNYXAoKTtcclxuICAgIF9lbmVteUFkZExpc3RlbmVyKHBsYXllcjEsIHBsYXllcjIsIGFpX21vdmUpO1xyXG5cclxuICAgIHJlbmRlcihwbGF5ZXIxLmdldEJvYXJkKCksICdtJyk7XHJcbiAgICByZW5kZXIocGxheWVyMi5nZXRCb2FyZCgpLCAnZScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIF9lbmVteUFkZExpc3RlbmVyKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lXyR7aX0ke2p9YCk7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnY2hhbmdlQ3Vyc29yJyk7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jaGVja0VhY2hNb3ZlcyhpLCBqKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY2hlY2tFYWNoTW92ZXMoaSwgaikge1xyXG4gICAgICAgIGxldCBhbGxTdW5rID0gIXBsYXllcjEuZ2V0Qm9hcmQoKS5pc0FsbFN1bmsoKSAmJiAhcGxheWVyMi5nZXRCb2FyZCgpLmlzQWxsU3VuaygpO1xyXG4gICAgICAgIGxldCBtb3ZlZCA9IG15TW92ZXMuaGFzKGAke2l9JHtqfWApO1xyXG4gICAgICAgIGlmIChhbGxTdW5rICYmICFtb3ZlZCkge1xyXG4gICAgICAgICAgICBpZiAoIW1vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICBfbWFrZUFNb3ZlKGksIGopO1xyXG4gICAgICAgICAgICAgICAgbXlNb3Zlcy5hZGQoYCR7aX0ke2p9YCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZV8ke2l9JHtqfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZUN1cnNvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBfbWFrZUFNb3ZlKGksIGopIHtcclxuICAgICAgICBwbGF5ZXIyLmdldEJvYXJkKCkucmVjZWl2ZUF0dGFjayhgJHtpfSR7an1gKTtcclxuICAgICAgICByZW5kZXIocGxheWVyMi5nZXRCb2FyZCgpLCAnZScpO1xyXG4gICAgICAgIF9wbGF5ZXIyTW92ZXMoKTtcclxuICAgICAgICBfZ2FtZU92ZXIoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gX3BsYXllcjJNb3ZlcygpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGFpX21vdmUubWFrZVJhbmRvbU1vdmUoKTtcclxuICAgICAgICBwbGF5ZXIxLmdldEJvYXJkKCkucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XHJcbiAgICAgICAgcmVuZGVyKHBsYXllcjEuZ2V0Qm9hcmQoKSwgJ20nKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gX2dhbWVPdmVyKCkge1xyXG4gICAgICAgIGNvbnN0IHdpbm5lckxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lckxhYmVsJyk7XHJcbiAgICAgICAgaWYgKHBsYXllcjIuZ2V0Qm9hcmQoKS5pc0FsbFN1bmsoKSl7XHJcbiAgICAgICAgICAgIHdpbm5lckxhYmVsLnRleHRDb250ZW50ID0gJ1lvdSB3aW4gQ29uZ3JhZHVhdGlvbiEhISc7XHJcbiAgICAgICAgICAgIF9yZW1vdmVQb2ludGVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIxLmdldEJvYXJkKCkuaXNBbGxTdW5rKCkpIHtcclxuICAgICAgICAgICAgd2lubmVyTGFiZWwudGV4dENvbnRlbnQgPSAnQUkgd2lucywgdHJ5IGFnYWluPyc7XHJcbiAgICAgICAgICAgIF9yZW1vdmVQb2ludGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBfcmVtb3ZlUG9pbnRlcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZV8ke2l9JHtqfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZUN1cnNvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdGFydEdhbWU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkaXNwbGF5Qm9hcmQgZnJvbSBcIi4vZGlzcGxheUJvYXJkXCI7XHJcbmltcG9ydCBjbGlja2VkUmVzZXQgZnJvbSBcIi4vcmVzZXRHYW1lXCI7XHJcbmltcG9ydCBzdGFydEdhbWUgZnJvbSBcIi4vc3RhcnRHYW1lXCI7XHJcblxyXG4oKCkgPT4ge1xyXG4gICAgZGlzcGxheUJvYXJkKCk7XHJcbiAgICBjbGlja2VkUmVzZXQoKTtcclxuICAgIHN0YXJ0R2FtZSgpO1xyXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==