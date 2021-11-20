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
/*!*****************************!*\
  !*** ./src/js/resetGame.js ***!
  \*****************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ04wQztBQUNOO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBWTtBQUNwQixRQUFRLHNEQUFTO0FBQ2pCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvY29tcHV0ZXJNb3ZlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZGlzcGxheUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcmFuZG9tUGxhY2VtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3N0YXJ0R2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3Jlc2V0R2FtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkX25hbWUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMyLCAyMzgpO1xcclxcbiAgICBib3JkZXI6IHJnYigxNjgsIDE1NSwgMTU1KSBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi5taXNzZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDc0LCA3NCk7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAzNiwgODUpO1xcclxcbiAgICBib3JkZXI6IHJnYigwLCAwLCAwKSBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi5oaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAwLCAwKSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXI6IHJnYigzNiwgMjksIDI5KSBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGFuZ2VDdXJzb3Ige1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxuICAgIGJvcmRlcjogZ29sZCBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi5taWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyOiBncmVlbiBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi5scmcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcclxcbiAgICBib3JkZXI6IGxpZ2h0Y29yYWwgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWF4IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFnZW50YTtcXHJcXG4gICAgYm9yZGVyOiBtYWdlbnRhIHNvbGlkIDFweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZF9uYW1lIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMiwgMjM4KTtcXHJcXG4gICAgYm9yZGVyOiByZ2IoMTY4LCAxNTUsIDE1NSkgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzc2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCA3NCwgNzQpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMzYsIDg1KTtcXHJcXG4gICAgYm9yZGVyOiByZ2IoMCwgMCwgMCkgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMCwgMCkgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyOiByZ2IoMzYsIDI5LCAyOSkgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhbmdlQ3Vyc29yIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcclxcbiAgICBib3JkZXI6IGdvbGQgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGJvcmRlcjogZ3JlZW4gc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubHJnIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXHJcXG4gICAgYm9yZGVyOiBsaWdodGNvcmFsIHNvbGlkIDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1heCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hZ2VudGE7XFxyXFxuICAgIGJvcmRlcjogbWFnZW50YSBzb2xpZCAxcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29tcHV0ZXJNb3ZlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW92ZWQgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZVJhbmRvbU1vdmUoKSB7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gX2dlbmVyYXRlUmFub21kQ29ycigpO1xyXG4gICAgICAgIGlmIChtb3ZlZC5oYXMocG9zaXRpb24pKVxyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IG1ha2VSYW5kb21Nb3ZlKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBtb3ZlZC5hZGQocG9zaXRpb24pO1xyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfZ2VuZXJhdGVSYW5vbWRDb3JyKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICByZXR1cm4gYCR7eH0ke3l9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge21ha2VSYW5kb21Nb3ZlfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcHV0ZXJNb3ZlOyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZCgpIHtcclxuICAgIF9hcHBlbmRCb2FyZERpdignbXlCb2FyZCcpO1xyXG4gICAgX2FwcGVuZEJvYXJkRGl2KCdlbmVteUJvYXJkJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hcHBlbmRCb2FyZERpdihib2FyZE5hbWUpIHtcclxuICAgIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMnKTtcclxuICAgIGNvbnN0IGJvYXJkRGl2ID0gX2NyZWF0ZUVsZSgnZGl2JywgYCR7Ym9hcmROYW1lfURpdmAsICcnKTtcclxuICAgIGNvbnN0IHZhbHVlID0gYm9hcmROYW1lLnJlcGxhY2UoJ0InLCAnIEInKTtcclxuICAgIGNvbnN0IGxhYmVsID0gX2NyZWF0ZUVsZSgnaDInLCAnYm9hcmRfbmFtZScsIHZhbHVlKTtcclxuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKF9hcHBlbmRCb2FyZChib2FyZE5hbWUpKTtcclxuICAgIGJvYXJkcy5hcHBlbmRDaGlsZChib2FyZERpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hcHBlbmRCb2FyZChib2FyZE5hbWUpIHtcclxuICAgIGNvbnN0IG15Qm9hcmQgPSBfY3JlYXRlRWxlKCdkaXYnLCBgLiR7Ym9hcmROYW1lfWAsICcnKTtcclxuICAgIG15Qm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcclxuICAgIGNvbnN0IGlkID0gYm9hcmROYW1lLmNoYXJBdCgwKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkID0gX2NyZWF0ZUVsZSgnZGl2JywgYCR7aWR9XyR7aX0ke2p9YCwgJycpO1xyXG4gICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcclxuICAgICAgICAgICAgbXlCb2FyZC5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbXlCb2FyZDtcclxufVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUVsZSh0eXBlLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSk7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUJvYXJkOyIsImNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IF9maWxsTWFwKCk7XHJcbiAgICBjb25zdCBzaGlwTGlzdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1hcCgpIHtcclxuICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0TWFwKCkge1xyXG4gICAgICAgIG1hcCA9IF9maWxsTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXApIHtcclxuICAgICAgICBpZiAoX2NoZWNrQXZhbGlhYmxlKHNoaXApKSB7XHJcbiAgICAgICAgICAgIHNoaXBMaXN0LnB1c2goc2hpcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBQb3MgPSBzaGlwLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHNoaXBQb3MuZm9yRWFjaChwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gX2dldENvcnIocG9zaXRpb24pWzBdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IF9nZXRDb3JyKHBvc2l0aW9uKVsxXTtcclxuICAgICAgICAgICAgICAgIG1hcFt4XVt5XSA9IHNoaXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYWxyZWFkeSBleGlzdCBhIHNoaXAgaW4gdGhpcyBwb3NpdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IF9nZXRDb3JyKHBvc2l0aW9uKVswXTtcclxuICAgICAgICBjb25zdCB5ID0gX2dldENvcnIocG9zaXRpb24pWzFdO1xyXG4gICAgICAgIGlmIChfY2hlY2tIYXZlU2hpcCh4LCB5KSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtYXBbeF1beV07XHJcbiAgICAgICAgICAgIHRhcmdldC5oaXQoJycgKyB4ICsgeSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWFwW3hdW3ldID0gJ21pc3NlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzQWxsU3VuaygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghc2hpcExpc3RbaV0uaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfZmlsbE1hcCgpIHtcclxuICAgICAgICBjb25zdCB3aG9sZU1hcCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBbXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdob2xlTWFwLnB1c2gocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdob2xlTWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jaGVja0F2YWxpYWJsZShzaGlwKSB7XHJcbiAgICAgICAgY29uc3QgY29yckFyciA9IFtdO1xyXG4gICAgICAgIHNoaXAuZ2V0UG9zaXRpb24oKS5mb3JFYWNoKHBvc2l0aW9uID0+IHtcclxuICAgICAgICAgICAgY29yckFyci5wdXNoKF9nZXRDb3JyKHBvc2l0aW9uKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBmb3IgKGxldCBpIGluIGNvcnJBcnIpIHtcclxuICAgICAgICAgICAgaWYgKG1hcFtjb3JyQXJyW2ldWzBdXVtjb3JyQXJyW2ldWzFdXSAhPSAnJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NoZWNrSGF2ZVNoaXAoeCwgeSkge1xyXG4gICAgICAgIGlmIChtYXBbeF1beV0gPT0gJycgfHwgbWFwW3hdW3ldID09ICdtaXNzZWQnKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfZ2V0Q29ycihwb3NpdGlvbikge1xyXG4gICAgICAgIHJldHVybiBbcG9zaXRpb24uY2hhckF0KDApLCBwb3NpdGlvbi5jaGFyQXQoMSldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Z2V0TWFwLCByZXNldE1hcCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBpc0FsbFN1bmt9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7IiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuaW1wb3J0IHJhbmRvbVBsYWNlbWVudCBmcm9tIFwiLi9yYW5kb21QbGFjZW1lbnRcIjtcclxuaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuY29uc3QgcGxheWVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQoKTtcclxuICAgIGNvbnN0IGRlZmF1bHRfc2hpcHMgPSBfZGVmYXVsdFNoaXBzKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgICAgICAvLyBkZWZhdWx0X3NoaXBzLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgICAgLy8gICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICByYW5kb21QbGFjZW1lbnQoKS5nZXRSYW5kb21Qb3NpdGlvbigpLmZvckVhY2gocG9zaXRpb24gPT4ge1xyXG4gICAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcChwb3NpdGlvbikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldEJvYXJkKCkge1xyXG4gICAgICAgIGJvYXJkLnJlc2V0TWFwKCk7XHJcbiAgICAgICAgaW5pdE1hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7aW5pdE1hcCwgZ2V0Qm9hcmQsIHJlc2V0Qm9hcmR9O1xyXG59XHJcblxyXG5jb25zdCBfZGVmYXVsdFNoaXBzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2hpcEFyciA9IFtdO1xyXG4gICAgY29uc3Qgc2FtcGxlX3Bvc2l0aW9uID0gXHJcbiAgICAgICAgW1snMTEnXSwgWyczMyddLCBbJzYwJ10sIFsnOTEnXSxcclxuICAgICAgICBbJzI3JywgJzI4J10sIFsnNDcnLCAnNTcnXSwgWyc2NCcsICc3NCddLFxyXG4gICAgICAgIFsnOTUnLCAnOTYnLCAnOTcnXSwgWycyNScsICczNScsICc0NSddLFxyXG4gICAgICAgIFsnNzYnLCAnNzcnLCAnNzgnLCAnNzknXV07XHJcbiAgICBzYW1wbGVfcG9zaXRpb24uZm9yRWFjaChwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgc2hpcEFyci5wdXNoKHNoaXAocG9zaXRpb24pKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gc2hpcEFycjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImNvbnN0IHJhbmRvbVBsYWNlbWVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvY2F0aW9ucyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbVBvc2l0aW9uKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNC1pOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRPckhvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcFBvcyA9IF9jcmVhdGVTaGlwUG9zaXRpb24oaiArIDEsIHZlcnRPckhvcik7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnMucHVzaChzaGlwUG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbG9jYXRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9nZXRSYW5kb21Db3JyKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICByZXR1cm4gYCR7eH0ke3l9YDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY3JlYXRlU2hpcFBvc2l0aW9uKHNpemUsIHZlcnRPckhvcikge1xyXG4gICAgICAgIGNvbnN0IHBvc0FyciA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gX2dldFJhbmRvbUNvcnIoKTtcclxuICAgICAgICBjb25zdCB4ID0gTnVtYmVyLnBhcnNlRmxvYXQocG9zaXRpb24uY2hhckF0KDApKTtcclxuICAgICAgICBjb25zdCB5ID0gTnVtYmVyLnBhcnNlRmxvYXQocG9zaXRpb24uY2hhckF0KDEpKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbmV3WCA9IHg7XHJcbiAgICAgICAgICAgIGxldCBuZXdZID0geTtcclxuICAgICAgICAgICAgaWYgKHZlcnRPckhvcikge1xyXG4gICAgICAgICAgICAgICAgbmV3WSA9IHkgKyBpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1kgPiA5KSBcclxuICAgICAgICAgICAgICAgICAgICBuZXdZID0gOSAtaTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdYID0geCArIGk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3WCA+IDkpIFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ggPSA5IC1pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvc0Fyci5wdXNoKGAke25ld1h9JHtuZXdZfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX2NoZWNrUGxhY2VtZW50KHBvc0Fyciwgc2l6ZSwgdmVydE9ySG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfY2hlY2tQbGFjZW1lbnQocG9zQXJyLCBzaXplLCB2ZXJ0T3JIb3IpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KHBvc0FycltpXSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbG9jYXRpb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGxvY2F0aW9uc1tqXS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJQID0gTnVtYmVyLnBhcnNlRmxvYXQobG9jYXRpb25zW2pdW2tdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPT0gY3VyclAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPT0gY3VyclAgKyAxIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID09IGN1cnJQIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jcmVhdGVTaGlwUG9zaXRpb24oc2l6ZSwgdmVydE9ySG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvc0Fyci5zb3J0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NoZWNrRXhpc3RlZChzaXplLCB2ZXJ0T3JIb3IpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IF9nZXRSYW5kb21Db3JyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgZW50cnkgaW4gbG9jYXRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYXRpb25zW2VudHJ5XS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyclZhbHVlID0gTnVtYmVyLnBhcnNlRmxvYXQobG9jYXRpb25zW2VudHJ5XVtpXSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGogKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFZhbCA9IE51bWJlci5wYXJzZUZsb2F0KHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmVydE9ySG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRWYWwgKz0gajtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kVmFsICs9IChqICogMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmFuZFZhbCA9PSBjdXJyVmFsdWUgfHxcclxuICAgICAgICAgICAgICAgICAgICByYW5kVmFsID09IGN1cnJWYWx1ZSArIDEgfHxcclxuICAgICAgICAgICAgICAgICAgICByYW5kVmFsID09IGN1cnJWYWx1ZSAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jaGVja0V4aXN0ZWQoc2l6ZSwgdmVydE9ySG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtnZXRSYW5kb21Qb3NpdGlvbn07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbVBsYWNlbWVudDsiLCJmdW5jdGlvbiByZW5kZXIoZ2FtZWJvYXJkLCBuYW1lKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnYW1lYm9hcmQuZ2V0TWFwKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICsrKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXBbaV1bal0gIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9XyR7aX0ke2p9YCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PSAnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBfZW5lbXlSZW5kZXIoc3F1YXJlLCBpLCBqLCBtYXBbaV1bal0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfbXlSZW5kZXIoc3F1YXJlLCBpLCBqLCBtYXBbaV1bal0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfZW5lbXlSZW5kZXIoc3F1YXJlLCBpLCBqLCBzaGlwKSB7XHJcbiAgICBpZiAoc2hpcCA9PSAnbWlzc2VkJylcclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSBzaGlwLmdldFN0YXR1cygpO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2hpcC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcG9zaXRpb24ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uW2tdID09IGAke2l9JHtqfWAgJiYgc3RhdHVzW2tdKVxyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxufVxyXG5cclxuZnVuY3Rpb24gX215UmVuZGVyKHNxdWFyZSwgaSwgaiwgc2hpcCkge1xyXG4gICAgaWYgKHNoaXAgIT0gJ21pc3NlZCcpIHtcclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHNoaXAuZ2V0U3RhdHVzKCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBzaGlwLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBwb3NpdGlvbi5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICBfYWRkU2hpcENsYXNzKHBvc2l0aW9uLCBzcXVhcmUpO1xyXG4gICAgICAgICAgICBpZiAocG9zaXRpb25ba10gPT0gYCR7aX0ke2p9YCAmJiBzdGF0dXNba10pXHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9hZGRTaGlwQ2xhc3MocG9zaXRpb24sIHNxdWFyZSkge1xyXG4gICAgc3dpdGNoIChwb3NpdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzbWwnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pZCcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnbHJnJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtYXgnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjsiLCJjb25zdCBzaGlwID0gKHBvc2l0aW9uKSA9PiB7XHJcbiAgICBsZXQgbXlMZW5ndGggPSBwb3NpdGlvbi5sZW5ndGg7XHJcbiAgICBsZXQgbXlQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgbGV0IG15U3RhdHVzID0gX2luaXRTdGF0dXMoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gbXlQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VQb3NpdGlvbihuZXdQb3NpdGlvbikge1xyXG4gICAgICAgIG15UG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcclxuICAgICAgICBteUxlbmd0aCA9IHBvc2l0aW9uLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfaW5pdFN0YXR1cygpIHtcclxuICAgICAgICBjb25zdCBzdGF0dXNBcnIgPSBbXTtcclxuICAgICAgICBteVBvc2l0aW9uLmZvckVhY2gobG9jYXRpb24gPT4ge1xyXG4gICAgICAgICAgICBzdGF0dXNBcnIucHVzaChmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1c0FycjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG15U3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpdChsb2NhdGlvbikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobXlQb3NpdGlvbltpXSA9PT0gbG9jYXRpb24pXHJcbiAgICAgICAgICAgICAgICBteVN0YXR1c1tpXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCFteVN0YXR1c1tpXSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXRQb3NpdGlvbiwgY2hhbmdlUG9zaXRpb24sIGdldFN0YXR1cywgaGl0LCBpc1N1bmt9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaGlwOyIsImltcG9ydCBjb21wdXRlck1vdmUgZnJvbSAnLi9jb21wdXRlck1vdmUnO1xyXG5pbXBvcnQgcGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlcic7XHJcblxyXG5jb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXIxID0gcGxheWVyKCk7XHJcbiAgICBjb25zdCBwbGF5ZXIyID0gcGxheWVyKCk7XHJcbiAgICBjb25zdCBhaV9tb3ZlID0gY29tcHV0ZXJNb3ZlKCk7XHJcbiAgICBjb25zdCBteU1vdmVzID0gbmV3IFNldCgpO1xyXG5cclxuICAgIHBsYXllcjEuaW5pdE1hcCgpO1xyXG4gICAgcGxheWVyMi5pbml0TWFwKCk7XHJcbiAgICBfZW5lbXlBZGRMaXN0ZW5lcihwbGF5ZXIxLCBwbGF5ZXIyLCBhaV9tb3ZlKTtcclxuXHJcbiAgICByZW5kZXIocGxheWVyMS5nZXRCb2FyZCgpLCAnbScpO1xyXG4gICAgcmVuZGVyKHBsYXllcjIuZ2V0Qm9hcmQoKSwgJ2UnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBfZW5lbXlBZGRMaXN0ZW5lcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZV8ke2l9JHtqfWApO1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZUN1cnNvcicpO1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfY2hlY2tFYWNoTW92ZXMoaSwgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2NoZWNrRWFjaE1vdmVzKGksIGopIHtcclxuICAgICAgICBsZXQgYWxsU3VuayA9ICFwbGF5ZXIxLmdldEJvYXJkKCkuaXNBbGxTdW5rKCkgJiYgIXBsYXllcjIuZ2V0Qm9hcmQoKS5pc0FsbFN1bmsoKTtcclxuICAgICAgICBsZXQgbW92ZWQgPSBteU1vdmVzLmhhcyhgJHtpfSR7an1gKTtcclxuICAgICAgICBpZiAoYWxsU3VuayAmJiAhbW92ZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFtb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgX21ha2VBTW92ZShpLCBqKTtcclxuICAgICAgICAgICAgICAgIG15TW92ZXMuYWRkKGAke2l9JHtqfWApO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVfJHtpfSR7an1gKS5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2VDdXJzb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gX21ha2VBTW92ZShpLCBqKSB7XHJcbiAgICAgICAgcGxheWVyMi5nZXRCb2FyZCgpLnJlY2VpdmVBdHRhY2soYCR7aX0ke2p9YCk7XHJcbiAgICAgICAgcmVuZGVyKHBsYXllcjIuZ2V0Qm9hcmQoKSwgJ2UnKTtcclxuICAgICAgICBfcGxheWVyMk1vdmVzKCk7XHJcbiAgICAgICAgX2dhbWVPdmVyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIF9wbGF5ZXIyTW92ZXMoKSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBhaV9tb3ZlLm1ha2VSYW5kb21Nb3ZlKCk7XHJcbiAgICAgICAgcGxheWVyMS5nZXRCb2FyZCgpLnJlY2VpdmVBdHRhY2socG9zaXRpb24pO1xyXG4gICAgICAgIHJlbmRlcihwbGF5ZXIxLmdldEJvYXJkKCksICdtJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIF9nYW1lT3ZlcigpIHtcclxuICAgICAgICBjb25zdCB3aW5uZXJMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJMYWJlbCcpO1xyXG4gICAgICAgIGlmIChwbGF5ZXIyLmdldEJvYXJkKCkuaXNBbGxTdW5rKCkpe1xyXG4gICAgICAgICAgICB3aW5uZXJMYWJlbC50ZXh0Q29udGVudCA9ICdZb3Ugd2luIENvbmdyYWR1YXRpb24hISEnO1xyXG4gICAgICAgICAgICBfcmVtb3ZlUG9pbnRlcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyMS5nZXRCb2FyZCgpLmlzQWxsU3VuaygpKSB7XHJcbiAgICAgICAgICAgIHdpbm5lckxhYmVsLnRleHRDb250ZW50ID0gJ0FJIHdpbnMsIHRyeSBhZ2Fpbj8nO1xyXG4gICAgICAgICAgICBfcmVtb3ZlUG9pbnRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gX3JlbW92ZVBvaW50ZXIoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVfJHtpfSR7an1gKS5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2VDdXJzb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RhcnRHYW1lOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGlzcGxheUJvYXJkIGZyb20gXCIuL2Rpc3BsYXlCb2FyZFwiO1xyXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gXCIuL3N0YXJ0R2FtZVwiO1xyXG5cclxuZnVuY3Rpb24gY2xpY2tlZFJlc2V0KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgX3Jlc2V0SHRtbCgpO1xyXG4gICAgICAgIGRpc3BsYXlCb2FyZCgpO1xyXG4gICAgICAgIHN0YXJ0R2FtZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9yZXNldEh0bWwoKSB7XHJcbiAgICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzJyk7XHJcbiAgICB3aGlsZSAoYm9hcmRzLmZpcnN0Q2hpbGQgIT0gbnVsbClcclxuICAgICAgICBib2FyZHMucmVtb3ZlQ2hpbGQoYm9hcmRzLmZpcnN0Q2hpbGQpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lckxhYmVsJykudGV4dENvbnRlbnQgPSAnJztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpY2tlZFJlc2V0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==