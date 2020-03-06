/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/modules/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* Optellen van twee waarden*/\nfunction add(a, b) {\n    \"use strict\";\n    return a + b;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate.js */ \"./src/modules/calculate.js\");\n\r\n\r\n  function actie(el) {\r\n    const uitkomst = Object(_calculate_js__WEBPACK_IMPORTED_MODULE_0__[\"calculate\"])(document.getElementById('a').value, document.getElementById('b').value, el.value);\r\n    document.getElementById('result').innerHTML = uitkomst;\r\n  }\r\n\n\n//# sourceURL=webpack:///./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/calculate.js":
/*!**********************************!*\
  !*** ./src/modules/calculate.js ***!
  \**********************************/
/*! exports provided: calculate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculate\", function() { return calculate; });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _divide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divide.js */ \"./src/modules/divide.js\");\n/* harmony import */ var _multiply_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiply.js */ \"./src/modules/multiply.js\");\n/* harmony import */ var _substract_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./substract.js */ \"./src/modules/substract.js\");\n/* Delen van twee waarden*/\n\n\n\n\n\nfunction calculate(a, b, operator) {\n  \"use strict\";\n\tvar c = 0;\n  switch (operator) {\n\t\tcase \"+\":\n\t\t\tc = Object(_add_js__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(a, b);\n\t\t\tbreak;\n\t\tcase \"-\":\n\t\t\tc = Object(_substract_js__WEBPACK_IMPORTED_MODULE_3__[\"substract\"])(a, b);\n\t\t\tbreak;\n\t\tcase \"*\":\n\t\t\tc = Object(_multiply_js__WEBPACK_IMPORTED_MODULE_2__[\"multiply\"])(a, b);\n\t\t\tbreak;\n\t\tcase \"/\":\n\t\t\tc = Object(_divide_js__WEBPACK_IMPORTED_MODULE_1__[\"divide\"])(a, b);\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tc = 0;\n\t}\n\treturn c;\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/calculate.js?");

/***/ }),

/***/ "./src/modules/divide.js":
/*!*******************************!*\
  !*** ./src/modules/divide.js ***!
  \*******************************/
/*! exports provided: divide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return divide; });\n/* Delen van twee waarden*/\nfunction divide(a, b) {\n    \"use strict\";\n    return a / b;\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/divide.js?");

/***/ }),

/***/ "./src/modules/multiply.js":
/*!*********************************!*\
  !*** ./src/modules/multiply.js ***!
  \*********************************/
/*! exports provided: multiply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return multiply; });\n/* Vermenigvuldigen van twee waarden*/\nfunction multiply(a, b) {\n    \"use strict\";\n    return a * b;\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/multiply.js?");

/***/ }),

/***/ "./src/modules/substract.js":
/*!**********************************!*\
  !*** ./src/modules/substract.js ***!
  \**********************************/
/*! exports provided: substract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"substract\", function() { return substract; });\n/* Aftrekken van twee waarden*/\nfunction substract(a, b) {\n    \"use strict\";\n    return a - b;\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/substract.js?");

/***/ })

/******/ });