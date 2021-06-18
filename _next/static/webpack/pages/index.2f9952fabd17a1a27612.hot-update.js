/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/projects.js":
/*!********************************!*\
  !*** ./components/projects.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./components/project.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/emilie/Web/portfolio/components/projects.js\";\n\n\nfunction Projects() {\n  var projects = [{\n    title: \"Villa les Pieds Rouges\",\n    imageFirst: \"/images/villa-les-pieds-rouges-homepage.png\",\n    imageSecond: \"/images/villa-les-pieds-rouges-plans.png\",\n    imageDescription: \"Villa les Pieds Rouges homepage\",\n    decription: \"Responsive bilingual website presenting luxurious holiday home in south of France with image gallerie and contact form.\",\n    tools: [[\"Framework\", \"Next.js\"], [\"Deployment\", \"Vercel\"], [\"Contact form\", \"Sendgrid\"], [\"Styling\", \"Tailwind\"], [\"Internationalisation\", \"react-i18n\"]],\n    website: \"https://villa-les-pieds-rouges.vercel.app/en\"\n  }, {\n    title: \"Instagram clone\",\n    imageFirst: \"/images/instagram-login.png\",\n    imageSecond: \"/images/instagram-dashboard.png\",\n    imageDescription: \"Instagram clone\",\n    decription: \"Instagram clone created with React and JavaScript. This project uses features like React hooks, Firebase (Firestore/auth). This React project has multiple pages: login, sign up, dashboard (to view/like/comment on photos), and user profiles. The sign-in page connects to Firebase when a user tries to sign in, and when a user signs up, Firebase auth is used to store the user in the Firebase auth database. After the application was built, it was deployed to Vercel. Lighthouse was also used to improve the website performance.\",\n    tools: [[\"Framework\", \"Next.js\"], [\"Deployment\", \"Vercel\"], [\"Storage\", \"Firestore\"], [\"Authentification\", \"Firebase\"], [\"Styling\", \"Tailwind\"], [\"Responsive\", \"yes\"]],\n    website: \"https://instagram-6lfl5gles-emiliehumbert.vercel.app/login\"\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"font-medium mt-24 mb-6 text-4xl\",\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: \"text-xl\",\n      children: \"Find below my latest projects.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project__WEBPACK_IMPORTED_MODULE_2__.default, {\n      projects: projects\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n}\n_c = Projects;\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy5qcz8zNTRjIl0sIm5hbWVzIjpbIlByb2plY3RzIiwicHJvamVjdHMiLCJ0aXRsZSIsImltYWdlRmlyc3QiLCJpbWFnZVNlY29uZCIsImltYWdlRGVzY3JpcHRpb24iLCJkZWNyaXB0aW9uIiwidG9vbHMiLCJ3ZWJzaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUNqQyxNQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxTQUFLLEVBQUUsd0JBRFQ7QUFFRUMsY0FBVSxFQUFFLDZDQUZkO0FBR0VDLGVBQVcsRUFBRSwwQ0FIZjtBQUlFQyxvQkFBZ0IsRUFBRSxpQ0FKcEI7QUFLRUMsY0FBVSxFQUNSLHlIQU5KO0FBT0VDLFNBQUssRUFBRSxDQUNMLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FESyxFQUVMLENBQUMsWUFBRCxFQUFlLFFBQWYsQ0FGSyxFQUdMLENBQUMsY0FBRCxFQUFpQixVQUFqQixDQUhLLEVBSUwsQ0FBQyxTQUFELEVBQVksVUFBWixDQUpLLEVBS0wsQ0FBQyxzQkFBRCxFQUF5QixZQUF6QixDQUxLLENBUFQ7QUFjRUMsV0FBTyxFQUFFO0FBZFgsR0FEZSxFQWlCZjtBQUNFTixTQUFLLEVBQUUsaUJBRFQ7QUFFRUMsY0FBVSxFQUFFLDZCQUZkO0FBR0VDLGVBQVcsRUFBRSxpQ0FIZjtBQUlFQyxvQkFBZ0IsRUFBRSxpQkFKcEI7QUFLRUMsY0FBVSxFQUNSLGdoQkFOSjtBQU9FQyxTQUFLLEVBQUUsQ0FDTCxDQUFDLFdBQUQsRUFBYyxTQUFkLENBREssRUFFTCxDQUFDLFlBQUQsRUFBZSxRQUFmLENBRkssRUFHTCxDQUFDLFNBQUQsRUFBWSxXQUFaLENBSEssRUFJTCxDQUFDLGtCQUFELEVBQXFCLFVBQXJCLENBSkssRUFLTCxDQUFDLFNBQUQsRUFBWSxVQUFaLENBTEssRUFNTCxDQUFDLFlBQUQsRUFBZSxLQUFmLENBTkssQ0FQVDtBQWVFQyxXQUFPLEVBQUU7QUFmWCxHQWpCZSxDQUFqQjtBQW9DQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLGlDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFHLGVBQVMsRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSw4REFBQyw2Q0FBRDtBQUFTLGNBQVEsRUFBRVA7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7S0E1Q3VCRCxRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9qZWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiVmlsbGEgbGVzIFBpZWRzIFJvdWdlc1wiLFxuICAgICAgaW1hZ2VGaXJzdDogXCIvaW1hZ2VzL3ZpbGxhLWxlcy1waWVkcy1yb3VnZXMtaG9tZXBhZ2UucG5nXCIsXG4gICAgICBpbWFnZVNlY29uZDogXCIvaW1hZ2VzL3ZpbGxhLWxlcy1waWVkcy1yb3VnZXMtcGxhbnMucG5nXCIsXG4gICAgICBpbWFnZURlc2NyaXB0aW9uOiBcIlZpbGxhIGxlcyBQaWVkcyBSb3VnZXMgaG9tZXBhZ2VcIixcbiAgICAgIGRlY3JpcHRpb246XG4gICAgICAgIFwiUmVzcG9uc2l2ZSBiaWxpbmd1YWwgd2Vic2l0ZSBwcmVzZW50aW5nIGx1eHVyaW91cyBob2xpZGF5IGhvbWUgaW4gc291dGggb2YgRnJhbmNlIHdpdGggaW1hZ2UgZ2FsbGVyaWUgYW5kIGNvbnRhY3QgZm9ybS5cIixcbiAgICAgIHRvb2xzOiBbXG4gICAgICAgIFtcIkZyYW1ld29ya1wiLCBcIk5leHQuanNcIl0sXG4gICAgICAgIFtcIkRlcGxveW1lbnRcIiwgXCJWZXJjZWxcIl0sXG4gICAgICAgIFtcIkNvbnRhY3QgZm9ybVwiLCBcIlNlbmRncmlkXCJdLFxuICAgICAgICBbXCJTdHlsaW5nXCIsIFwiVGFpbHdpbmRcIl0sXG4gICAgICAgIFtcIkludGVybmF0aW9uYWxpc2F0aW9uXCIsIFwicmVhY3QtaTE4blwiXSxcbiAgICAgIF0sXG4gICAgICB3ZWJzaXRlOiBcImh0dHBzOi8vdmlsbGEtbGVzLXBpZWRzLXJvdWdlcy52ZXJjZWwuYXBwL2VuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJJbnN0YWdyYW0gY2xvbmVcIixcbiAgICAgIGltYWdlRmlyc3Q6IFwiL2ltYWdlcy9pbnN0YWdyYW0tbG9naW4ucG5nXCIsXG4gICAgICBpbWFnZVNlY29uZDogXCIvaW1hZ2VzL2luc3RhZ3JhbS1kYXNoYm9hcmQucG5nXCIsXG4gICAgICBpbWFnZURlc2NyaXB0aW9uOiBcIkluc3RhZ3JhbSBjbG9uZVwiLFxuICAgICAgZGVjcmlwdGlvbjpcbiAgICAgICAgXCJJbnN0YWdyYW0gY2xvbmUgY3JlYXRlZCB3aXRoIFJlYWN0IGFuZCBKYXZhU2NyaXB0LiBUaGlzIHByb2plY3QgdXNlcyBmZWF0dXJlcyBsaWtlIFJlYWN0IGhvb2tzLCBGaXJlYmFzZSAoRmlyZXN0b3JlL2F1dGgpLiBUaGlzIFJlYWN0IHByb2plY3QgaGFzIG11bHRpcGxlIHBhZ2VzOiBsb2dpbiwgc2lnbiB1cCwgZGFzaGJvYXJkICh0byB2aWV3L2xpa2UvY29tbWVudCBvbiBwaG90b3MpLCBhbmQgdXNlciBwcm9maWxlcy4gVGhlIHNpZ24taW4gcGFnZSBjb25uZWN0cyB0byBGaXJlYmFzZSB3aGVuIGEgdXNlciB0cmllcyB0byBzaWduIGluLCBhbmQgd2hlbiBhIHVzZXIgc2lnbnMgdXAsIEZpcmViYXNlIGF1dGggaXMgdXNlZCB0byBzdG9yZSB0aGUgdXNlciBpbiB0aGUgRmlyZWJhc2UgYXV0aCBkYXRhYmFzZS4gQWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIHdhcyBidWlsdCwgaXQgd2FzIGRlcGxveWVkIHRvIFZlcmNlbC4gTGlnaHRob3VzZSB3YXMgYWxzbyB1c2VkIHRvIGltcHJvdmUgdGhlIHdlYnNpdGUgcGVyZm9ybWFuY2UuXCIsXG4gICAgICB0b29sczogW1xuICAgICAgICBbXCJGcmFtZXdvcmtcIiwgXCJOZXh0LmpzXCJdLFxuICAgICAgICBbXCJEZXBsb3ltZW50XCIsIFwiVmVyY2VsXCJdLFxuICAgICAgICBbXCJTdG9yYWdlXCIsIFwiRmlyZXN0b3JlXCJdLFxuICAgICAgICBbXCJBdXRoZW50aWZpY2F0aW9uXCIsIFwiRmlyZWJhc2VcIl0sXG4gICAgICAgIFtcIlN0eWxpbmdcIiwgXCJUYWlsd2luZFwiXSxcbiAgICAgICAgW1wiUmVzcG9uc2l2ZVwiLCBcInllc1wiXSxcbiAgICAgIF0sXG4gICAgICB3ZWJzaXRlOiBcImh0dHBzOi8vaW5zdGFncmFtLTZsZmw1Z2xlcy1lbWlsaWVodW1iZXJ0LnZlcmNlbC5hcHAvbG9naW5cIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBtdC0yNCBtYi02IHRleHQtNHhsXCI+UHJvamVjdHM8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhsJz5GaW5kIGJlbG93IG15IGxhdGVzdCBwcm9qZWN0cy48L3A+XG4gICAgICA8UHJvamVjdCBwcm9qZWN0cz17cHJvamVjdHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/projects.js\n");

/***/ })

});