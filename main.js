/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pizzeria.jpg */ "./src/images/pizzeria.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pizzas.jpg */ "./src/images/pizzas.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/restaurant table.jpg */ "./src/images/restaurant table.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
}

body {
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 8fr;
}

#content {
    font-family: "Montserrat", sans-serif;
    color: #424d3c;
    grid-row: 2;
    display: grid;
    grid-template-rows: 7fr auto;
}

header {
    grid-row: 1;
    font-size: 25px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #7a9448;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
    flex-wrap: wrap;
    gap: 15px;
    font-weight: 600;
    letter-spacing: 1em;
    padding: 1em 0em 1em 0em;
}

button {
    margin: 15px;
    background-color: #7a9448;
    color: white;
    font-weight: 600;
    border: none;
    min-width: 100px;
    padding: 10px 20px;
    border-radius: 5px;  
}

.active {
    background-color: #bed396;
}

footer {
    font-size: 18px;
    padding: 1rem;
    text-align: center;
}

/* home */
.page1-container{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    display: grid;
    background-position: center;
    background-size: cover;
}

.page1-text {
    background-color: rgba(255, 255, 255, 0.75);
    padding: 4rem;
    width: 23vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 9rem;
}
  
  .page1-heading {
    font-size: 25px;
    font-weight: 500;
}
  
  .page1-paragraph {
    font-size: 20px;
    line-height: 2rem;
}

/* menu */
.page2-container {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
}

.container-text {
    background-color: rgba(255, 255, 255, 0.8);
    width: 30vw;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
}

.page2-text {
    font-weight: 500;
    font-size: 18px;
    line-height: 2rem;
}

.menu-title {
    font-weight: 600;
    font-size: 20px;
}

.menu-ingredients {
    font-size: 17px;
    line-height: 2rem;
}

/* contact */
.page3-container {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: end;
}

.contact-text {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 3rem 4rem 3rem 4rem;
    width: 23vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin-right: 9rem;
}

.iframe {
    width: 100%;
    height: 300px;
    border: none;   
}

.contact-paragraph {
    font-size: 15px;
    line-height: 2rem;
    font-weight: 600;
}

.contact-button {
    margin: 0;
    background-color: white;
    color: rgb(72, 69, 69);
    font-weight: 600;
    border: #424d3c;
    border: thin solid grey;
    min-width: 50px;
    max-width: 200px;
    padding: 10px 20px;
    border-radius: 2px;   
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,qCAAqC;IACrC,cAAc;IACd,WAAW;IACX,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,eAAe;IACf,sHAAsH;IACtH,cAAc;IACd,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;IACf,SAAS;IACT,gBAAgB;IAChB,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,aAAa;IACb,kBAAkB;AACtB;;AAEA,SAAS;AACT;IACI,yDAA4C;IAC5C,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;AAC1B;;AAEA;IACI,2CAA2C;IAC3C,aAAa;IACb,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iBAAiB;AACrB;;EAEE;IACE,eAAe;IACf,gBAAgB;AACpB;;EAEE;IACE,eAAe;IACf,iBAAiB;AACrB;;AAEA,SAAS;AACT;IACI,yDAA0C;IAC1C,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,0CAA0C;IAC1C,WAAW;IACX,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA,YAAY;AACZ;IACI,yDAAqD;IACrD,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,0CAA0C;IAC1C,4BAA4B;IAC5B,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,uBAAuB;IACvB,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;IACf,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 8fr;\n}\n\n#content {\n    font-family: \"Montserrat\", sans-serif;\n    color: #424d3c;\n    grid-row: 2;\n    display: grid;\n    grid-template-rows: 7fr auto;\n}\n\nheader {\n    grid-row: 1;\n    font-size: 25px;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: #7a9448;\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: space-around;\n    white-space: nowrap;\n    flex-wrap: wrap;\n    gap: 15px;\n    font-weight: 600;\n    letter-spacing: 1em;\n    padding: 1em 0em 1em 0em;\n}\n\nbutton {\n    margin: 15px;\n    background-color: #7a9448;\n    color: white;\n    font-weight: 600;\n    border: none;\n    min-width: 100px;\n    padding: 10px 20px;\n    border-radius: 5px;  \n}\n\n.active {\n    background-color: #bed396;\n}\n\nfooter {\n    font-size: 18px;\n    padding: 1rem;\n    text-align: center;\n}\n\n/* home */\n.page1-container{\n    background-image: url(./images/pizzeria.jpg);\n    display: grid;\n    background-position: center;\n    background-size: cover;\n}\n\n.page1-text {\n    background-color: rgba(255, 255, 255, 0.75);\n    padding: 4rem;\n    width: 23vw;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    margin-left: 9rem;\n}\n  \n  .page1-heading {\n    font-size: 25px;\n    font-weight: 500;\n}\n  \n  .page1-paragraph {\n    font-size: 20px;\n    line-height: 2rem;\n}\n\n/* menu */\n.page2-container {\n    background-image: url(./images/pizzas.jpg);\n    background-position: center;\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n}\n\n.container-text {\n    background-color: rgba(255, 255, 255, 0.8);\n    width: 30vw;\n    padding: 3rem;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 2rem;\n}\n\n.page2-text {\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 2rem;\n}\n\n.menu-title {\n    font-weight: 600;\n    font-size: 20px;\n}\n\n.menu-ingredients {\n    font-size: 17px;\n    line-height: 2rem;\n}\n\n/* contact */\n.page3-container {\n    background-image: url(./images/restaurant\\ table.jpg);\n    background-position: center;\n    background-size: cover;\n    display: flex;\n    justify-content: end;\n}\n\n.contact-text {\n    background-color: rgba(255, 255, 255, 0.8);\n    padding: 3rem 4rem 3rem 4rem;\n    width: 23vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 1rem;\n    margin-right: 9rem;\n}\n\n.iframe {\n    width: 100%;\n    height: 300px;\n    border: none;   \n}\n\n.contact-paragraph {\n    font-size: 15px;\n    line-height: 2rem;\n    font-weight: 600;\n}\n\n.contact-button {\n    margin: 0;\n    background-color: white;\n    color: rgb(72, 69, 69);\n    font-weight: 600;\n    border: #424d3c;\n    border: thin solid grey;\n    min-width: 50px;\n    max-width: 200px;\n    padding: 10px 20px;\n    border-radius: 2px;   \n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContact: () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");


function loadContact() {
    const page3Container = document.createElement("div");
    page3Container.className = "page3-container";

    const contactText = document.createElement("div");
    contactText.className = "contact-text";

    const paragraph1 = document.createElement("p");
    paragraph1.className = "contact-paragraph";
    paragraph1.innerHTML = "Herenstraat 33, 2313 AE Leiden<br>012-3456789 - guiseppe@restaurant.com";

    const contactButton1 = document.createElement("button");
    contactButton1.className = "contact-button";
    contactButton1.textContent = "Book a table";

    const paragraph2 = document.createElement("p");
    paragraph2.className = "contact-paragraph";
    paragraph2.innerHTML = "Open Tuesday to Sunday from<br>5:00 PM to 10:00 PM."

    // Add Google Maps iframe
  const iframe = document.createElement("iframe");
  iframe.className = "iframe";
  iframe.src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.0154488644694!2d4.4866484121160255!3d52.15222876327625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c68b34451e51%3A0xb778833386f8ad6e!2sPizzeria%20Giuseppe!5e0!3m2!1sen!2snl!4v1737478595297!5m2!1sen!2snl";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";

  document.querySelector("#content").appendChild(page3Container);
  
  page3Container.appendChild(contactText);
  contactText.append(iframe, paragraph1, paragraph2, contactButton1);
 
  (0,_footer_js__WEBPACK_IMPORTED_MODULE_0__.addFooter)();
}



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFooter: () => (/* binding */ addFooter)
/* harmony export */ });

function addFooter() {
    const contentDiv = document.querySelector("#content");
    const footer = document.createElement("footer");
    footer.textContent = "© Emre Ipekci 2025";

    contentDiv.appendChild(footer);
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");



function loadHome() {

    const page1Container = document.createElement("div");
    page1Container.className = "page1-container";

    const page1Text = document.createElement("div");
    page1Text.className = "page1-text";

    const page1Heading = document.createElement("h1");
    page1Heading.className = "page1-heading"
    page1Heading.textContent = "Welcome to Pizzeria Giuseppe";

    const page1Paragraph = document.createElement("p");
    page1Paragraph.className = "page1-paragraph"
    page1Paragraph.innerHTML = "The tastiest pizzas in Leiden. We craft every pizza with love, using only the freshest ingredients and traditional recipes passed down through generations. Relax in our cozy atmosphere or order your favorites to enjoy at home.<br> Buon appetito!";

    // Append all elements to the div
    
    document.querySelector("#content").appendChild(page1Container);
    page1Container.appendChild(page1Text);
    page1Text.appendChild(page1Heading);
    page1Text.appendChild(page1Paragraph);

    (0,_footer_js__WEBPACK_IMPORTED_MODULE_0__.addFooter)();
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");


function loadMenu() {

  const page2Container = document.createElement("div");
  page2Container.className = "page2-container";

  const containerText = document.createElement("div");
  containerText.className = "container-text";
  
  const page2Text = document.createElement("div");
  page2Text.className = "page2-text";
  page2Text.textContent = "Whether you're a fan of classic combinations or bold new tastes, there's something for everyone to enjoy ♥";

  const startersContainer = document.createElement("div");
  startersContainer.className = "menu-container";
  const startersTitle = document.createElement("p");
  startersTitle.className = "menu-title";
  startersTitle.textContent = "Starters";
  const startersIngredients = document.createElement("p");
  startersIngredients.className = "menu-ingredients";
  startersIngredients.textContent = "Bruschetta • Caprese • Carpaccio • Focaccia • Marinated olives • Mixed salad";

  const pastaContainer = document.createElement("div");
  pastaContainer.className = "menu-container";
  const pastaTitle = document.createElement("p");
  pastaTitle.className = "menu-title";
  pastaTitle.textContent = "Pasta";
  const pastaIngredients = document.createElement("p");
  pastaIngredients.className = "menu-ingredients";
  pastaIngredients.textContent = "Lasagne • Pasta Carbonara • Pesto Spaghetti • Penne alla arabiata • Tagliatelle with vegetables • Ravioli with ricotta and spinach";

  const pizzaContainer = document.createElement("div");
  pizzaContainer.className = "menu-container";
  const pizzaTitle = document.createElement("p");
  pizzaTitle.className = "menu-title";
  pizzaTitle.textContent = "Pizzas";
  const pizzaIngredients = document.createElement("p");
  pizzaIngredients.className = "menu-ingredients";
  pizzaIngredients.textContent = "Margherita • Pepperoni • Capricciosa • Napoletana • Calzone • Salami • Salmon • Vegeterian";

  const dessertsContainer = document.createElement("div");
  dessertsContainer.className = "menu-container";
  const dessertsTitle = document.createElement("p");
  dessertsTitle.className = "menu-title";
  dessertsTitle.textContent = "Desserts";
  const dessertsIngredients = document.createElement("p");
  dessertsIngredients.className = "menu-ingredients";
  dessertsIngredients.textContent = "Classic tiramisu • Sorbet • Ice cream scoops";

  
  document.querySelector("#content").appendChild(page2Container);
  page2Container.appendChild(containerText);
  containerText.append(page2Text, startersContainer, pastaContainer, pizzaContainer, dessertsContainer);

  startersContainer.append(startersTitle, startersIngredients);
  pastaContainer.append(pastaTitle, pastaIngredients);
  pizzaContainer.append(pizzaTitle, pizzaIngredients);
  dessertsContainer.append(dessertsTitle, dessertsIngredients);

  (0,_footer_js__WEBPACK_IMPORTED_MODULE_0__.addFooter)();
}



/***/ }),

/***/ "./src/images/pizzas.jpg":
/*!*******************************!*\
  !*** ./src/images/pizzas.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "767299cce93fc3f84576.jpg";

/***/ }),

/***/ "./src/images/pizzeria.jpg":
/*!*********************************!*\
  !*** ./src/images/pizzeria.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b410a5a492e28351bfe3.jpg";

/***/ }),

/***/ "./src/images/restaurant table.jpg":
/*!*****************************************!*\
  !*** ./src/images/restaurant table.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69bc2b3f4777f4d5a9bc.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





const header = document.querySelector("header");
const restaurantName = document.createElement("div");
restaurantName.textContent = "PIZZERIA GIUSEPPE";

header.appendChild(restaurantName);

// Content container
const content = document.getElementById("content");

function clearContent() {
    content.innerHTML = "";
}

(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();

// Add event listeners
window.addEventListener("load", () => {

// Select buttons
    const buttonHome = document.querySelector(".btn-1");  
    const buttonMenu = document.querySelector(".btn-2");
    const buttonContact = document.querySelector(".btn-3");

    const buttons = [buttonHome, buttonMenu, buttonContact];

    buttonHome.classList.add("active"); // Set "Home" as the active button initially

// Add event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));

            // Add 'active' class to the clicked button
            button.classList.add("active");

            // Call the corresponding content-loading function
            clearContent();
            if (button === buttonHome) (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();
            if (button === buttonMenu) (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();
            if (button === buttonContact) (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact)();
        });
    });
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map