/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/project */ \"./components/project.js\");\n/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navigation */ \"./components/navigation.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/emilie/Web/portfolio/pages/projects.js\";\n\n\n\nfunction Projects() {\n  var projects = [{\n    title: \"Villa les Pieds Rouges\",\n    image: \"/images/villa-les-pieds-rouges-homepage.png\",\n    imageDescription: \"Villa les Pieds Rouges homepage\",\n    decription: \"Responsive bilingual website presenting luxurious holiday home in south of France with image gallerie and contact form.\",\n    tools: [[\"Framework\", \"Next.js\"], [\"Deployment\", \"Vercel\"], [\"Contact form\", \"Sendgrid\"], [\"Styling\", \"Tailwind\"], [\"Internationalisation\", \"react-i18n\"]],\n    website: \"https://villa-les-pieds-rouges.vercel.app/en\"\n  }, {\n    title: \"Instagram clone\",\n    image: \"/images/instagram-login.png\",\n    imageDescription: \"Instagram clone\",\n    decription: \"Instagram clone using firebase and firestore for login, signin and images storage\",\n    tools: [[\"Framework\", \"Next.js\"], [\"Deployment\", \"Vercel\"], [\"Styling\", \"Tailwind\"]],\n    website: \"https://instagram-6lfl5gles-emiliehumbert.vercel.app/login\"\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex justify-center mx-2\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"mt-6 w-full sm:w-4/5\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_2__.default, {\n        projects: projects\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, this);\n}\n_c = Projects;\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanM/NDQ3MSJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsInByb2plY3RzIiwidGl0bGUiLCJpbWFnZSIsImltYWdlRGVzY3JpcHRpb24iLCJkZWNyaXB0aW9uIiwidG9vbHMiLCJ3ZWJzaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUNqQyxNQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxTQUFLLEVBQUUsd0JBRFQ7QUFFRUMsU0FBSyxFQUFFLDZDQUZUO0FBR0VDLG9CQUFnQixFQUFFLGlDQUhwQjtBQUlFQyxjQUFVLEVBQ1IseUhBTEo7QUFNRUMsU0FBSyxFQUFFLENBQ0wsQ0FBQyxXQUFELEVBQWMsU0FBZCxDQURLLEVBRUwsQ0FBQyxZQUFELEVBQWUsUUFBZixDQUZLLEVBR0wsQ0FBQyxjQUFELEVBQWlCLFVBQWpCLENBSEssRUFJTCxDQUFDLFNBQUQsRUFBWSxVQUFaLENBSkssRUFLTCxDQUFDLHNCQUFELEVBQXlCLFlBQXpCLENBTEssQ0FOVDtBQWFFQyxXQUFPLEVBQUU7QUFiWCxHQURlLEVBZ0JmO0FBQ0VMLFNBQUssRUFBRSxpQkFEVDtBQUVFQyxTQUFLLEVBQUUsNkJBRlQ7QUFHRUMsb0JBQWdCLEVBQUUsaUJBSHBCO0FBSUVDLGNBQVUsRUFDUixtRkFMSjtBQU1FQyxTQUFLLEVBQUUsQ0FDTCxDQUFDLFdBQUQsRUFBYyxTQUFkLENBREssRUFFTCxDQUFDLFlBQUQsRUFBZSxRQUFmLENBRkssRUFHTCxDQUFDLFNBQUQsRUFBWSxVQUFaLENBSEssQ0FOVDtBQVdFQyxXQUFPLEVBQUU7QUFYWCxHQWhCZSxDQUFqQjtBQStCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQUEsOEJBQ0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsd0RBQUQ7QUFBUyxnQkFBUSxFQUFFTjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7S0F4Q3VCRCxRIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2plY3RcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIlZpbGxhIGxlcyBQaWVkcyBSb3VnZXNcIixcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvdmlsbGEtbGVzLXBpZWRzLXJvdWdlcy1ob21lcGFnZS5wbmdcIixcbiAgICAgIGltYWdlRGVzY3JpcHRpb246IFwiVmlsbGEgbGVzIFBpZWRzIFJvdWdlcyBob21lcGFnZVwiLFxuICAgICAgZGVjcmlwdGlvbjpcbiAgICAgICAgXCJSZXNwb25zaXZlIGJpbGluZ3VhbCB3ZWJzaXRlIHByZXNlbnRpbmcgbHV4dXJpb3VzIGhvbGlkYXkgaG9tZSBpbiBzb3V0aCBvZiBGcmFuY2Ugd2l0aCBpbWFnZSBnYWxsZXJpZSBhbmQgY29udGFjdCBmb3JtLlwiLFxuICAgICAgdG9vbHM6IFtcbiAgICAgICAgW1wiRnJhbWV3b3JrXCIsIFwiTmV4dC5qc1wiXSxcbiAgICAgICAgW1wiRGVwbG95bWVudFwiLCBcIlZlcmNlbFwiXSxcbiAgICAgICAgW1wiQ29udGFjdCBmb3JtXCIsIFwiU2VuZGdyaWRcIl0sXG4gICAgICAgIFtcIlN0eWxpbmdcIiwgXCJUYWlsd2luZFwiXSxcbiAgICAgICAgW1wiSW50ZXJuYXRpb25hbGlzYXRpb25cIiwgXCJyZWFjdC1pMThuXCJdLFxuICAgICAgXSxcbiAgICAgIHdlYnNpdGU6IFwiaHR0cHM6Ly92aWxsYS1sZXMtcGllZHMtcm91Z2VzLnZlcmNlbC5hcHAvZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkluc3RhZ3JhbSBjbG9uZVwiLFxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9pbnN0YWdyYW0tbG9naW4ucG5nXCIsXG4gICAgICBpbWFnZURlc2NyaXB0aW9uOiBcIkluc3RhZ3JhbSBjbG9uZVwiLFxuICAgICAgZGVjcmlwdGlvbjpcbiAgICAgICAgXCJJbnN0YWdyYW0gY2xvbmUgdXNpbmcgZmlyZWJhc2UgYW5kIGZpcmVzdG9yZSBmb3IgbG9naW4sIHNpZ25pbiBhbmQgaW1hZ2VzIHN0b3JhZ2VcIixcbiAgICAgIHRvb2xzOiBbXG4gICAgICAgIFtcIkZyYW1ld29ya1wiLCBcIk5leHQuanNcIl0sXG4gICAgICAgIFtcIkRlcGxveW1lbnRcIiwgXCJWZXJjZWxcIl0sXG4gICAgICAgIFtcIlN0eWxpbmdcIiwgXCJUYWlsd2luZFwiXSxcbiAgICAgIF0sXG4gICAgICB3ZWJzaXRlOiBcImh0dHBzOi8vaW5zdGFncmFtLTZsZmw1Z2xlcy1lbWlsaWVodW1iZXJ0LnZlcmNlbC5hcHAvbG9naW5cIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG14LTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiB3LWZ1bGwgc206dy00LzVcIj5cbiAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgPFByb2plY3QgcHJvamVjdHM9e3Byb2plY3RzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ })

});