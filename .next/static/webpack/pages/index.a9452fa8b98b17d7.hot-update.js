"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/OnboardingPage.tsx":
/*!***************************************!*\
  !*** ./components/OnboardingPage.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OnboardingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _croct_plug_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @croct/plug-react */ \"./node_modules/@croct/plug-react/index.js\");\n\n\nfunction OnboardingPage() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_croct_plug_react__WEBPACK_IMPORTED_MODULE_1__.Slot, {\n        id: \"home-banner\",\n        initial: null,\n        children: function(props) {\n            return props === null ? \"✨ Personalizing...\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: props.title\n                    }, void 0, false, {\n                        fileName: \"/home/jan/Documentos/Croct/cse-challenge/components/OnboardingPage.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 29\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: props.subtitle\n                    }, void 0, false, {\n                        fileName: \"/home/jan/Documentos/Croct/cse-challenge/components/OnboardingPage.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 29\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: props.cta.link,\n                        children: props.cta.label\n                    }, void 0, false, {\n                        fileName: \"/home/jan/Documentos/Croct/cse-challenge/components/OnboardingPage.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 29\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jan/Documentos/Croct/cse-challenge/components/OnboardingPage.tsx\",\n                lineNumber: 20,\n                columnNumber: 25\n            }, _this);\n        }\n    }, void 0, false, {\n        fileName: \"/home/jan/Documentos/Croct/cse-challenge/components/OnboardingPage.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n};\n_c = OnboardingPage;\nvar _c;\n$RefreshReg$(_c, \"OnboardingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09uYm9hcmRpbmdQYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDdUM7QUFXeEIsU0FBU0MsY0FBYyxHQUFpQjs7SUFDbkQscUJBQ0ksOERBQUNELG1EQUFJO1FBQUNFLEVBQUUsRUFBQyxhQUFhO1FBQUNDLE9BQU8sRUFBRSxJQUFJO2tCQUMvQixTQUFDQyxLQUE2QjttQkFDM0JBLEtBQUssS0FBSyxJQUFJLEdBQ1Isb0JBQW9CLGlCQUVsQiw4REFBQ0MsS0FBRzs7a0NBQ0EsOERBQUNDLFFBQU07a0NBQUVGLEtBQUssQ0FBQ0csS0FBSzs7Ozs7NkJBQVU7a0NBQzlCLDhEQUFDQyxHQUFDO2tDQUFFSixLQUFLLENBQUNLLFFBQVE7Ozs7OzZCQUFLO2tDQUN2Qiw4REFBQ0MsR0FBQzt3QkFBQ0MsSUFBSSxFQUFFUCxLQUFLLENBQUNRLEdBQUcsQ0FBQ0MsSUFBSTtrQ0FBR1QsS0FBSyxDQUFDUSxHQUFHLENBQUNFLEtBQUs7Ozs7OzZCQUFLOzs7Ozs7cUJBQzVDO1NBRWpCOzs7OztZQUNFLENBQ1Y7Q0FDSjtBQWhCdUJiLEtBQUFBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PbmJvYXJkaW5nUGFnZS50c3g/ZjRlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWN0RWxlbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTbG90fSBmcm9tICdAY3JvY3QvcGx1Zy1yZWFjdCc7XG5cbnR5cGUgSG9tZUJhbm5lckNvbnRlbnQgPSB7XG4gIHRpdGxlOiBzdHJpbmcsXG4gIHN1YnRpdGxlOiBzdHJpbmcsXG4gIGN0YToge1xuICAgICAgbGFiZWw6IHN0cmluZyxcbiAgICAgIGxpbms6IHN0cmluZyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9uYm9hcmRpbmdQYWdlKCk6IFJlYWN0RWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNsb3QgaWQ9XCJob21lLWJhbm5lclwiIGluaXRpYWw9e251bGx9PlxuICAgICAgICAgICAgeyhwcm9wczogSG9tZUJhbm5lckNvbnRlbnR8bnVsbCkgPT4gKFxuICAgICAgICAgICAgICAgIHByb3BzID09PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gJ+KcqCBQZXJzb25hbGl6aW5nLi4uJ1xuICAgICAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57cHJvcHMudGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Byb3BzLnN1YnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9wcy5jdGEubGlua30+e3Byb3BzLmN0YS5sYWJlbH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9TbG90PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJTbG90IiwiT25ib2FyZGluZ1BhZ2UiLCJpZCIsImluaXRpYWwiLCJwcm9wcyIsImRpdiIsInN0cm9uZyIsInRpdGxlIiwicCIsInN1YnRpdGxlIiwiYSIsImhyZWYiLCJjdGEiLCJsaW5rIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/OnboardingPage.tsx\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_OnboardingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/OnboardingPage */ \"./components/OnboardingPage.tsx\");\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_OnboardingPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/jan/Documentos/Croct/cse-challenge/pages/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMEM7QUFFZ0I7QUFFM0MsU0FBU0UsSUFBSSxHQUFpQjtJQUN6QyxxQkFDRiw4REFBQ0Qsa0VBQWM7Ozs7WUFBRSxDQUNiO0NBQ0w7QUFKdUJDLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZUJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVCYW5uZXInO1xuaW1wb3J0IE9uYm9hcmRpbmdQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvT25ib2FyZGluZ1BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCk6IFJlYWN0RWxlbWVudCB7XG4gICAgcmV0dXJuIChcblx0XHQ8T25ib2FyZGluZ1BhZ2UvPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJPbmJvYXJkaW5nUGFnZSIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});