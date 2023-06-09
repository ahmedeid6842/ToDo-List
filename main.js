/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n::after,\n::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 65%;\n}\n\nbody {\n  font-size: 15px;\n  background-color: #f5f5f5;\n  color: #5c5959;\n}\n\n.hidden {\n  display: none;\n}\n\n.todo-list-menu {\n  width: 60rem;\n  margin: 10rem auto;\n  background-color: #fff;\n  box-shadow: 0.5rem 0.5rem 2rem #040720;\n  font-size: 2rem;\n  list-style: none;\n}\n\n.list-header,\n.task-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  flex-wrap: wrap;\n  color: #040720;\n}\n\n.task-text {\n  border: none;\n  padding: 0 0.5rem;\n  font-size: 1.8rem;\n  letter-spacing: 1px;\n  color: #040720;\n  outline: none;\n}\n\n.todo-list-menu li:not(:nth-last-of-type(2))::after {\n  content: \"\";\n  flex-basis: 100%;\n  border-bottom: 0.5px solid #d9d9d9;\n  padding: 1rem 0;\n}\n\n.menu-icon,\n.refresh-icon,\n.save-icon {\n  cursor: pointer;\n  width: 3rem;\n  height: 3rem;\n}\n\n.delete-icon {\n  cursor: pointer;\n  width: 3.5rem;\n}\n\n.taks-input {\n  width: 100%;\n  height: 5rem;\n  padding: 1rem 1.5rem;\n  font-size: 2rem;\n  border: none;\n  outline: none;\n  margin-bottom: 2rem;\n}\n\n.clear-btn {\n  text-align: center;\n  cursor: pointer;\n  padding: 2rem;\n  margin-top: 1.5rem;\n  background-color: #d9d9d9;\n}\n\n.done {\n  text-decoration: line-through;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayTask.js */ \"./src/modules/displayTask.js\");\n/* harmony import */ var _modules_createTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createTask.js */ \"./src/modules/createTask.js\");\n/* harmony import */ var _modules_deleteTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/deleteTask.js */ \"./src/modules/deleteTask.js\");\n/* harmony import */ var _modules_editTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/editTask.js */ \"./src/modules/editTask.js\");\n/* harmony import */ var _modules_completeTask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/completeTask.js */ \"./src/modules/completeTask.js\");\n/* harmony import */ var _modules_clearTask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/clearTask.js */ \"./src/modules/clearTask.js\");\n\n\n\n\n\n\n\n\nconst clearButton = document.querySelector('.clear-btn');\n\ndocument.addEventListener('keypress', _modules_createTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\ndocument.addEventListener('click', _modules_deleteTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\ndocument.addEventListener('click', _modules_editTask_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nclearButton.addEventListener('click', _modules_clearTask_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n\n(0,_modules_displayTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_completeTask_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  static tasks = [];\n\n  constructor(description, index) {\n    this.description = description;\n    this.index = index;\n    this.completed = false;\n  }\n\n  static storageManagement(task) {\n    localStorage.setItem('taskList', JSON.stringify(task));\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/clearTask.js":
/*!**********************************!*\
  !*** ./src/modules/clearTask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./src/modules/Task.js\");\n/* harmony import */ var _displayTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTask.js */ \"./src/modules/displayTask.js\");\n\n\n\nconst reDisplayTask = () => {\n  const taskItems = document.querySelectorAll('.task-item');\n  taskItems.forEach((task) => {\n    task.remove();\n  });\n\n  (0,_displayTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\nconst clearCompletedTask = () => {\n  const completedTasks = document.querySelectorAll('done');\n\n  completedTasks.forEach((task) => {\n    task.parentNode.parentNode.remove();\n  });\n\n  _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks = _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks.filter((task) => task.completed !== true)\n    .map((task, index) => ({ ...task, index: index + 1 }));\n\n  _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storageManagement(_Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks);\n  reDisplayTask();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompletedTask);\n\n//# sourceURL=webpack://todo-list/./src/modules/clearTask.js?");

/***/ }),

/***/ "./src/modules/completeTask.js":
/*!*************************************!*\
  !*** ./src/modules/completeTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./src/modules/Task.js\");\n\n\nconst boxChangeHanlder = (event) => {\n  const targetID = parseInt(event.target.parentNode.parentNode.className.split(' ')[1], 10) - 1;\n  if (event.target.checked) {\n    event.target.nextElementSibling.classList.add('done');\n    _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks[targetID].completed = true;\n    _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storageManagement(_Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks);\n  } else if (!event.target.checked) {\n    event.target.nextElementSibling.classList.remove('done');\n    _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks[targetID].completed = false;\n    _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storageManagement(_Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks);\n  }\n};\n\nconst completeTask = () => {\n  const checkBoxes = document.querySelectorAll('.checkbox');\n  checkBoxes.forEach((box) => {\n    box.addEventListener('change', (event) => {\n      boxChangeHanlder(event);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completeTask);\n\n//# sourceURL=webpack://todo-list/./src/modules/completeTask.js?");

/***/ }),

/***/ "./src/modules/createTask.js":
/*!***********************************!*\
  !*** ./src/modules/createTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_menu_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/menu-icon.svg */ \"./src/img/menu-icon.svg\");\n/* harmony import */ var _img_icons8_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/icons8-trash.svg */ \"./src/img/icons8-trash.svg\");\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task.js */ \"./src/modules/Task.js\");\n/* harmony import */ var _completeTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completeTask.js */ \"./src/modules/completeTask.js\");\n\n\n\n\n\nconst inputField = document.querySelector('.taks-input');\nconst taskList = document.querySelector('.task-input-item');\n\nconst createTask = (event) => {\n  if (JSON.parse(localStorage.getItem('taskList'))) {\n    _Task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tasks = JSON.parse(localStorage.getItem('taskList'));\n  }\n\n  if (event.key === 'Enter') {\n    if (inputField.value === '') return;\n\n    const newItem = new _Task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](inputField.value, _Task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tasks.length + 1);\n    _Task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tasks.push(newItem);\n    _Task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].storageManagement(_Task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tasks);\n\n    const html = `\n        <li class=\"task-item ${newItem.index}\">\n          <div class=\"task\">\n          <input type=\"checkbox\" name=\"task\" class=\"checkbox\"> <input type=\"text\" class=\"task-text\" readonly value=\"${newItem.description}\"/>\n          </div>\n          <div>\n            <img src=\"${_img_menu_icon_svg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"option-icon\" class=\"menu-icon\">\n            <img src=\"${_img_icons8_trash_svg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"delete-icon\" class=\"delete-icon\">\n          </div>\n        </li>\n        `;\n    taskList.insertAdjacentHTML('afterend', html);\n    (0,_completeTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    inputField.value = '';\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);\n\n//# sourceURL=webpack://todo-list/./src/modules/createTask.js?");

/***/ }),

/***/ "./src/modules/deleteTask.js":
/*!***********************************!*\
  !*** ./src/modules/deleteTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./src/modules/Task.js\");\n\n\nconst deleteTask = (event) => {\n  if (event.target.classList.contains('delete-icon')) {\n    const taskIndex = event.target.parentNode.parentNode.className.split(' ')[1];\n    const task = event.target.parentNode.parentNode;\n\n    _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks = _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks.filter((task) => task.index !== parseInt(taskIndex, 10))\n      .map((task, index) => ({ ...task, index: index + 1 }));\n\n    _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storageManagement(_Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks);\n    task.remove();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);\n\n//# sourceURL=webpack://todo-list/./src/modules/deleteTask.js?");

/***/ }),

/***/ "./src/modules/displayTask.js":
/*!************************************!*\
  !*** ./src/modules/displayTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_menu_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/menu-icon.svg */ \"./src/img/menu-icon.svg\");\n/* harmony import */ var _img_icons8_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/icons8-trash.svg */ \"./src/img/icons8-trash.svg\");\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task.js */ \"./src/modules/Task.js\");\n/* harmony import */ var _completeTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completeTask.js */ \"./src/modules/completeTask.js\");\n\n\n\n\n\nconst inputs = document.querySelector('.task-input-item');\n\nconst tasksDisplay = () => {\n  if (JSON.parse(localStorage.getItem('taskList'))) {\n    _Task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tasks = JSON.parse(localStorage.getItem('taskList'));\n  }\n\n  _Task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tasks.forEach((task) => {\n    const html = `\n      <li class=\"task-item ${task.index}\">\n        <div class=\"task\">\n          <input type=\"checkbox\" name=\"task\" class=\"checkbox\"> <input type=\"text\" class=\"task-text\" readonly value=\"${task.description}\"/>\n        </div>\n        <div>\n          <img src=\"${_img_menu_icon_svg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"option-icon\" class=\"menu-icon\">\n          <img src=\"${_img_icons8_trash_svg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"delete-icon\" class=\"delete-icon\">\n        </div>\n      </li>\n      `;\n    inputs.insertAdjacentHTML('afterend', html);\n  });\n  (0,_completeTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasksDisplay);\n\n//# sourceURL=webpack://todo-list/./src/modules/displayTask.js?");

/***/ }),

/***/ "./src/modules/editTask.js":
/*!*********************************!*\
  !*** ./src/modules/editTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./src/modules/Task.js\");\n/* harmony import */ var _img_save_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/save-icon.svg */ \"./src/img/save-icon.svg\");\n\n\n\nconst editTask = (event) => {\n  if (event.target.classList.contains('menu-icon')) {\n    const taskIndex = event.target.parentNode.parentNode.className.split(' ')[1];\n    const menuIcon = event.target;\n    const taskInput = event.target.parentNode.parentNode.firstChild.nextSibling.childNodes[3];\n\n    taskInput.removeAttribute('readonly');\n    taskInput.focus();\n\n    const spanIcon = document.createElement('span');\n    const img = document.createElement('img');\n\n    img.setAttribute('src', _img_save_icon_svg__WEBPACK_IMPORTED_MODULE_1__);\n    img.setAttribute('alt', 'Save Icon');\n    img.classList.add('save-icon');\n\n    spanIcon.appendChild(img);\n    menuIcon.parentNode.insertAdjacentElement('afterbegin', spanIcon);\n    menuIcon.classList.add('hidden');\n\n    spanIcon.addEventListener('click', () => {\n      const task = _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks.find((t) => t.index === parseInt(taskIndex, 10));\n\n      if (task) {\n        task.description = taskInput.value;\n      }\n\n      _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storageManagement(_Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks);\n      taskInput.setAttribute('readonly', 'readonly');\n      menuIcon.classList.remove('hidden');\n      spanIcon.classList.add('hidden');\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\n\n//# sourceURL=webpack://todo-list/./src/modules/editTask.js?");

/***/ }),

/***/ "./src/img/icons8-trash.svg":
/*!**********************************!*\
  !*** ./src/img/icons8-trash.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"533f687c0efc420b1e43.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/icons8-trash.svg?");

/***/ }),

/***/ "./src/img/menu-icon.svg":
/*!*******************************!*\
  !*** ./src/img/menu-icon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"19c84313d62edb23795c.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/menu-icon.svg?");

/***/ }),

/***/ "./src/img/save-icon.svg":
/*!*******************************!*\
  !*** ./src/img/save-icon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5cc280062b69e945d347.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/save-icon.svg?");

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;