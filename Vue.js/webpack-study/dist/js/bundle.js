/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/hello.js":
/*!**************************!*\
  !*** ./modules/hello.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("// 暴露一个方法\r\nexports.sayHi = function () {\r\n    document.write(\"<h1>Java全栈笔记学习</h1>\")\r\n}\r\nexports.sayHi2 = function () {\r\n    document.write(\"<h1>Java全栈笔记学习2</h1>\")\r\n}\r\nexports.sayHi3 = function () {\r\n    document.write(\"<h1>Java全栈笔记学习3</h1>\")\r\n}\n\n//# sourceURL=webpack:///./modules/hello.js?");

/***/ }),

/***/ "./modules/main.js":
/*!*************************!*\
  !*** ./modules/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// require 导入一个模块，就可以调用这个模块中的方法了\r\nconst hello = __webpack_require__(/*! ./hello */ \"./modules/hello.js\");\r\nhello.sayHi();\r\nhello.sayHi2();\r\nhello.sayHi3();\n\n//# sourceURL=webpack:///./modules/main.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./modules/main.js");
/******/ 	
/******/ })()
;