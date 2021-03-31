webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/setMap.js":
/*!**********************************!*\
  !*** ./store/reducers/setMap.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ \"./store/actions/actionTypes.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility */ \"./store/utility.js\");\n/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ \"./components/UI/Spinner/Spinner.js\");\n/* harmony import */ var _util_translateCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/translateCategory */ \"./util/translateCategory.js\");\n\n\n\nvar _jsxFileName = \"/Users/benjamingordon/Documents/civic-alley-visualization/data-vis/store/reducers/setMap.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar DEFAULT_CENTER = {\n  lat: 40.635,\n  lng: -73.94\n};\nvar initialState = {\n  map: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 10\n  }, undefined),\n  mapProps: {},\n  zoom: 11,\n  markers: [],\n  center: DEFAULT_CENTER,\n  showDistricts: false,\n  clickedItem: null,\n  url: '/',\n  selectedBudgetItems: null,\n  selectedDistricts: null,\n  action: {},\n  loading: false // item: null, \n\n};\n\nvar setMap = function setMap(state, districts, selectedDistricts, councilMembers, selectedBudgetItems) {\n  return {\n    zoom: state.zoom,\n    districts: districts,\n    selectedDistricts: selectedDistricts,\n    councilMembers: councilMembers,\n    selectedBudgetItems: selectedBudgetItems\n  };\n};\n\nvar zoomMarker = function zoomMarker(state, action) {\n  return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n    zoom: 14,\n    center: action.center,\n    clickedItem: action.item\n  });\n};\n\nvar filterBudget = function filterBudget(participatoryBudget, councilMembers, category, year, district, minCost, maxCost, minVotes, maxVotes, councilMember) {\n  var newBudget = [];\n  var newCouncil = [];\n  Object.keys(participatoryBudget).map(function (key) {\n    newBudget.push(participatoryBudget[key]);\n  });\n  Object.keys(councilMembers).map(function (key) {\n    newCouncil.push(councilMembers[key]);\n  });\n  if (year !== '') newBudget = newBudget.filter(function (item) {\n    return Number(item.vote_year) === Number(year);\n  });\n  if (category !== '') newBudget = newBudget.filter(function (item) {\n    return Object(_util_translateCategory__WEBPACK_IMPORTED_MODULE_5__[\"translateCategoryText\"])(item.category) === category;\n  });\n  if (district !== '') newBudget = newBudget.filter(function (item) {\n    return item.council_district === district;\n  });\n  if (minCost !== '') newBudget = newBudget.filter(function (item) {\n    return Number(item.cost) >= Number(minCost);\n  });\n  if (maxCost !== '') newBudget = newBudget.filter(function (item) {\n    return Number(item.cost) <= Number(maxCost);\n  });\n  if (minVotes !== '') newBudget = newBudget.filter(function (item) {\n    return Number(item.votes) >= Number(minVotes);\n  });\n  if (maxVotes !== '') newBudget = newBudget.filter(function (item) {\n    return Number(item.votes) <= Number(maxVotes);\n  });\n\n  if (councilMember !== '') {\n    var councilMemberNew = councilMember.split(': ')[1];\n    var currDistrict = newCouncil.filter(function (member) {\n      return member.name === councilMemberNew;\n    })[[0]].district;\n    newBudget = newBudget.filter(function (item) {\n      return item.council_district === currDistrict;\n    });\n  }\n\n  return newBudget;\n};\n\nvar findItem = function findItem(budget, lat, lng, title) {\n  console.log('findItem', budget, lat, lng, title); // var clickedItem = budget.filter(item => Number(item.latitude) === Number(lat) && Number(item.longitude) === Number(lng) && item.title === title)[0];\n\n  var clickedItem = budget.filter(function (item) {\n    return item.cost > 1000;\n  });\n  console.log('clickedItem', clickedItem);\n  return {\n    clickedItem: clickedItem,\n    center: {\n      latitude: clickedItem.latitude,\n      longitude: clickedItem.longitude\n    },\n    zoom: 14\n  };\n};\n\nvar budgetFilterFromURL = function budgetFilterFromURL(budget, query) {\n  var newBudget = [];\n  Object.keys(budget).map(function (key) {\n    newBudget.push(budget[key]);\n  });\n  if (query.year) newBudget = newBudget.filter(function (item) {\n    return Number(item.vote_year) === Number(query.year);\n  });\n  if (query.category) newBudget = newBudget.filter(function (item) {\n    return Object(_util_translateCategory__WEBPACK_IMPORTED_MODULE_5__[\"translateCategoryText\"])(item.category) === query.category;\n  });\n  if (query.district) newBudget = newBudget.filter(function (item) {\n    return item.council_district === query.district;\n  });\n  if (query.minCost) newBudget = newBudget.filter(function (item) {\n    return Number(item.cost) >= Number(query.minCost);\n  });\n  if (query.maxCost) newBudget = newBudget.filter(function (item) {\n    return Number(item.cost) <= Number(query.maxCost);\n  });\n  if (query.minVotes) newBudget = newBudget.filter(function (item) {\n    return Number(item.votes) >= Number(query.minVotes);\n  });\n  if (query.maxVotes) newBudget = newBudget.filter(function (item) {\n    return Number(item.votes) <= Number(query.maxVotes);\n  });\n  return {\n    selectedBudgetItems: newBudget\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"SET_MAP\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        mapProps: setMap(state, action.districts, action.selectedDistricts, action.councilMembers, action.selectedBudgetItems)\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"UPDATE_MAP\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        mapProps: setMap(state, action.districts, action.selectedDistricts, action.councilMembers, action.selectedBudgetItems)\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"RESET_MAP\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        map: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 70\n        }, _this),\n        clickedItem: null\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ZOOM_MARKER\"]:\n      return zoomMarker(state, action);\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"RESET_CLICKED_ITEM\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        clickedItem: null,\n        zoom: 11,\n        center: DEFAULT_CENTER\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ZOOM_IN\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        zoom: state.zoom + 1\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ZOOM_OUT\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        zoom: state.zoom - 1\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"CENTER\"]:\n      console.log('centering!!!');\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        zoom: 11,\n        center: DEFAULT_CENTER,\n        clickedItem: null\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"SHOW_DISTRICTS\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        map: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 75\n        }, _this)\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"BUDGET_FILTER\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        selectedBudgetItems: filterBudget(action.budget, action.councilMembers, action.category, action.year, action.district, action.minCost, action.maxCost, action.minVotes, action.maxVotes, action.councilMember),\n        action: _objectSpread({}, action),\n        loading: false\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"BUDGET_FILTER_FROM_URL\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, budgetFilterFromURL(action.budget, action.query));\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"FIND_ITEM\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, findItem(action.budget, action.lat, action.lng, action.title));\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvc2V0TWFwLmpzPzVkNTEiXSwibmFtZXMiOlsiREVGQVVMVF9DRU5URVIiLCJsYXQiLCJsbmciLCJpbml0aWFsU3RhdGUiLCJtYXAiLCJtYXBQcm9wcyIsInpvb20iLCJtYXJrZXJzIiwiY2VudGVyIiwic2hvd0Rpc3RyaWN0cyIsImNsaWNrZWRJdGVtIiwidXJsIiwic2VsZWN0ZWRCdWRnZXRJdGVtcyIsInNlbGVjdGVkRGlzdHJpY3RzIiwiYWN0aW9uIiwibG9hZGluZyIsInNldE1hcCIsInN0YXRlIiwiZGlzdHJpY3RzIiwiY291bmNpbE1lbWJlcnMiLCJ6b29tTWFya2VyIiwidXBkYXRlT2JqZWN0IiwiaXRlbSIsImZpbHRlckJ1ZGdldCIsInBhcnRpY2lwYXRvcnlCdWRnZXQiLCJjYXRlZ29yeSIsInllYXIiLCJkaXN0cmljdCIsIm1pbkNvc3QiLCJtYXhDb3N0IiwibWluVm90ZXMiLCJtYXhWb3RlcyIsImNvdW5jaWxNZW1iZXIiLCJuZXdCdWRnZXQiLCJuZXdDb3VuY2lsIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInB1c2giLCJmaWx0ZXIiLCJOdW1iZXIiLCJ2b3RlX3llYXIiLCJ0cmFuc2xhdGVDYXRlZ29yeVRleHQiLCJjb3VuY2lsX2Rpc3RyaWN0IiwiY29zdCIsInZvdGVzIiwiY291bmNpbE1lbWJlck5ldyIsInNwbGl0IiwiY3VyckRpc3RyaWN0IiwibWVtYmVyIiwibmFtZSIsImZpbmRJdGVtIiwiYnVkZ2V0IiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJidWRnZXRGaWx0ZXJGcm9tVVJMIiwicXVlcnkiLCJyZWR1Y2VyIiwidHlwZSIsImFjdGlvblR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRztBQUFFQyxLQUFHLEVBQUUsTUFBUDtBQUFlQyxL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RCxFQUFRO0FBQUNMLDJCQUFtQixFQUFFVyxZQUFZLENBQUNULE1BQU0sQ0FBQ3NDLE1BQVIsRUFBZ0J0QyxNQUFNLENBQUNLLGNBQXZCLEVBQXVDTCxNQUFNLENBQUNXLFFBQTlDLEVBQXdEWCxNQUFNLENBQUNZLElBQS9ELEVBQXFFWixNQUFNLENBQUNhLFFBQTVFLEVBQXNGYixNQUFNLENBQUNjLE9BQTdGLEVBQXNHZCxNQUFNLENBQUNlLE9BQTdHLEVBQXNIZixNQUFNLENBQUNnQixRQUE3SCxFQUF1SWhCLE1BQU0sQ0FBQ2lCLFFBQTlJLEVBQXdKakIsTUFBTSxDQUFDa0IsYUFBL0osQ0FBbEM7QUFBaU5sQixjQUFNLG9CQUFNQSxNQUFOLENBQXZOO0FBQXNPQyxlQUFPLEVBQUU7QUFBL08sT0FBUixDQUFuQjs7QUFDaEMsU0FBSytDLDJFQUFMO0FBQXlDLGFBQU96Qyw2REFBWSxDQUFDSixLQUFELEVBQVF5QyxtQkFBbUIsQ0FBQzVDLE1BQU0sQ0FBQ3NDLE1BQVIsRUFBZ0J0QyxNQUFNLENBQUM2QyxLQUF2QixDQUEzQixDQUFuQjs7QUFDekMsU0FBS0csOERBQUw7QUFBNEIsYUFBT3pDLDZEQUFZLENBQUNKLEtBQUQsRUFBUWtDLFFBQVEsQ0FBQ3JDLE1BQU0sQ0FBQ3NDLE1BQVIsRUFBZ0J0QyxNQUFNLENBQUNiLEdBQXZCLEVBQTRCYSxNQUFNLENBQUNaLEdBQW5DLEVBQXdDWSxNQUFNLENBQUN1QyxLQUEvQyxDQUFoQixDQUFuQjs7QUFFNUI7QUFDSSxhQUFPcEMsS0FBUDtBQWhCUjtBQWtCSCxDQW5CRDs7QUFxQmUyQyxzRUFBZiIsImZpbGUiOiIuL3N0b3JlL3JlZHVjZXJzL3NldE1hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuaW1wb3J0IHt1cGRhdGVPYmplY3R9IGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXInO1xuaW1wb3J0IHt0cmFuc2xhdGVDYXRlZ29yeVRleHR9IGZyb20gJy4uLy4uL3V0aWwvdHJhbnNsYXRlQ2F0ZWdvcnknO1xuXG5jb25zdCBERUZBVUxUX0NFTlRFUiA9IHsgbGF0OiA0MC42MzUsIGxuZzogLTczLjk0IH07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBtYXA6IDxTcGlubmVyIC8+LFxuICAgIG1hcFByb3BzOiB7fSxcbiAgICB6b29tOiAxMSxcbiAgICBtYXJrZXJzOiBbXSxcbiAgICBjZW50ZXI6IERFRkFVTFRfQ0VOVEVSLFxuICAgIHNob3dEaXN0cmljdHM6IGZhbHNlLFxuICAgIGNsaWNrZWRJdGVtOiBudWxsLFxuICAgIHVybDogJy8nLFxuXG4gICAgc2VsZWN0ZWRCdWRnZXRJdGVtczogbnVsbCxcbiAgICBzZWxlY3RlZERpc3RyaWN0czogbnVsbCxcbiAgICBhY3Rpb246IHt9LCAgICBcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAvLyBpdGVtOiBudWxsLCBcbn1cblxuY29uc3Qgc2V0TWFwID0gKHN0YXRlLGRpc3RyaWN0cywgc2VsZWN0ZWREaXN0cmljdHMsIGNvdW5jaWxNZW1iZXJzLCBzZWxlY3RlZEJ1ZGdldEl0ZW1zKSA9PiB7ICBcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHpvb206IHN0YXRlLnpvb20sXG4gICAgICAgICAgICAgICAgZGlzdHJpY3RzOiBkaXN0cmljdHMsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREaXN0cmljdHM6IHNlbGVjdGVkRGlzdHJpY3RzLFxuICAgICAgICAgICAgICAgIGNvdW5jaWxNZW1iZXJzOiBjb3VuY2lsTWVtYmVycyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEJ1ZGdldEl0ZW1zOiBzZWxlY3RlZEJ1ZGdldEl0ZW1zLCAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbn1cblxuY29uc3Qgem9vbU1hcmtlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7ICAgIFxuXG4gICAgcmV0dXJuIHVwZGF0ZU9iamVjdCAoc3RhdGUsIHtcbiAgICAgICAgem9vbTogMTQsIFxuICAgICAgICBjZW50ZXI6IGFjdGlvbi5jZW50ZXIsIFxuICAgICAgICBjbGlja2VkSXRlbTogYWN0aW9uLml0ZW0sICAgICAgICBcbiAgICB9KTtcbn1cblxuY29uc3QgZmlsdGVyQnVkZ2V0ID0gKHBhcnRpY2lwYXRvcnlCdWRnZXQsIGNvdW5jaWxNZW1iZXJzLCBjYXRlZ29yeSwgeWVhciwgZGlzdHJpY3QsIG1pbkNvc3QsIG1heENvc3QsIG1pblZvdGVzLCBtYXhWb3RlcywgY291bmNpbE1lbWJlcikgPT4ge1xuICAgIGxldCBuZXdCdWRnZXQgPSBbXTtcbiAgICBsZXQgbmV3Q291bmNpbCA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHBhcnRpY2lwYXRvcnlCdWRnZXQpLm1hcChrZXkgPT4ge1xuICAgICAgICBuZXdCdWRnZXQucHVzaChwYXJ0aWNpcGF0b3J5QnVkZ2V0W2tleV0pXG4gICAgfSlcblxuICAgIE9iamVjdC5rZXlzKGNvdW5jaWxNZW1iZXJzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgbmV3Q291bmNpbC5wdXNoKGNvdW5jaWxNZW1iZXJzW2tleV0pXG4gICAgfSlcblxuXG4gICAgaWYoeWVhciAhPT0nJylcbiAgICAgICAgbmV3QnVkZ2V0ID0gbmV3QnVkZ2V0LmZpbHRlcihpdGVtID0+IE51bWJlcihpdGVtLnZvdGVfeWVhcikgPT09IE51bWJlcih5ZWFyKSk7XG4gICAgaWYoY2F0ZWdvcnkgIT09JycpXG4gICAgICAgIG5ld0J1ZGdldCA9IG5ld0J1ZGdldC5maWx0ZXIoaXRlbSA9PiB0cmFuc2xhdGVDYXRlZ29yeVRleHQoaXRlbS5jYXRlZ29yeSkgPT09IGNhdGVnb3J5KTsgICAgXG4gICAgaWYoZGlzdHJpY3QgIT09JycpXG4gICAgICAgIG5ld0J1ZGdldCA9IG5ld0J1ZGdldC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNvdW5jaWxfZGlzdHJpY3QgPT09IGRpc3RyaWN0KTtcbiAgICBpZihtaW5Db3N0ICE9PScnKVxuICAgICAgICBuZXdCdWRnZXQgPSBuZXdCdWRnZXQuZmlsdGVyKGl0ZW0gPT4gTnVtYmVyKGl0ZW0uY29zdCkgPj0gTnVtYmVyKG1pbkNvc3QpKTtcbiAgICBpZihtYXhDb3N0ICE9PScnKVxuICAgICAgICBuZXdCdWRnZXQgPSBuZXdCdWRnZXQuZmlsdGVyKGl0ZW0gPT4gTnVtYmVyKGl0ZW0uY29zdCkgPD0gTnVtYmVyKG1heENvc3QpKTtcbiAgICBpZihtaW5Wb3RlcyAhPT0nJylcbiAgICAgICAgbmV3QnVkZ2V0ID0gbmV3QnVkZ2V0LmZpbHRlcihpdGVtID0+IE51bWJlcihpdGVtLnZvdGVzKSA+PSBOdW1iZXIobWluVm90ZXMpKTtcbiAgICBpZihtYXhWb3RlcyAhPT0nJylcbiAgICAgICAgbmV3QnVkZ2V0ID0gbmV3QnVkZ2V0LmZpbHRlcihpdGVtID0+IE51bWJlcihpdGVtLnZvdGVzKSA8PSBOdW1iZXIobWF4Vm90ZXMpKTtcbiAgICBpZihjb3VuY2lsTWVtYmVyICE9PScnKXsgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhciBjb3VuY2lsTWVtYmVyTmV3ID0gY291bmNpbE1lbWJlci5zcGxpdCgnOiAnKVsxXTsgICAgICAgIFxuICAgICAgICB2YXIgY3VyckRpc3RyaWN0ID0gbmV3Q291bmNpbC5maWx0ZXIobWVtYmVyID0+IG1lbWJlci5uYW1lID09PSBjb3VuY2lsTWVtYmVyTmV3KVtbMF1dLmRpc3RyaWN0OyAgICAgICAgXG4gICAgICAgIG5ld0J1ZGdldCA9IG5ld0J1ZGdldC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNvdW5jaWxfZGlzdHJpY3QgPT09IGN1cnJEaXN0cmljdCk7XG4gICAgfSAgICBcblxuICAgIHJldHVybiBuZXdCdWRnZXQ7XG59XG5cbmNvbnN0IGZpbmRJdGVtID0gKGJ1ZGdldCwgbGF0LCBsbmcsIHRpdGxlKSA9PiB7ICBcbiAgICBjb25zb2xlLmxvZygnZmluZEl0ZW0nLGJ1ZGdldCwgbGF0LCBsbmcsIHRpdGxlKSAgICAgIFxuICAgIC8vIHZhciBjbGlja2VkSXRlbSA9IGJ1ZGdldC5maWx0ZXIoaXRlbSA9PiBOdW1iZXIoaXRlbS5sYXRpdHVkZSkgPT09IE51bWJlcihsYXQpICYmIE51bWJlcihpdGVtLmxvbmdpdHVkZSkgPT09IE51bWJlcihsbmcpICYmIGl0ZW0udGl0bGUgPT09IHRpdGxlKVswXTtcbiAgICB2YXIgY2xpY2tlZEl0ZW0gPSBidWRnZXQuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jb3N0ID4gMTAwMCk7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWRJdGVtJyxjbGlja2VkSXRlbSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xpY2tlZEl0ZW06IGNsaWNrZWRJdGVtLFxuICAgICAgICBjZW50ZXI6IHtsYXRpdHVkZTogY2xpY2tlZEl0ZW0ubGF0aXR1ZGUsIGxvbmdpdHVkZTogY2xpY2tlZEl0ZW0ubG9uZ2l0dWRlfSxcbiAgICAgICAgem9vbTogMTRcbiAgICB9XG59XG5cbmNvbnN0IGJ1ZGdldEZpbHRlckZyb21VUkwgPSAoYnVkZ2V0LCBxdWVyeSkgPT4ge1xuICAgIGxldCBuZXdCdWRnZXQgPSBbXTtcbiAgICBcbiAgICBPYmplY3Qua2V5cyhidWRnZXQpLm1hcChrZXkgPT4ge1xuICAgICAgICBuZXdCdWRnZXQucHVzaChidWRnZXRba2V5XSlcbiAgICB9KVxuXG4gICAgaWYocXVlcnkueWVhcilcbiAgICAgICAgbmV3QnVkZ2V0ID0gbmV3QnVkZ2V0LmZpbHRlcihpdGVtID0+IE51bWJlcihpdGVtLnZvdGVfeWVhcikgPT09IE51bWJlcihxdWVyeS55ZWFyKSk7XG4gICAgaWYocXVlcnkuY2F0ZWdvcnkpXG4gICAgICAgIG5ld0J1ZGdldCA9IG5ld0J1ZGdldC5maWx0ZXIoaXRlbSA9PiB0cmFuc2xhdGVDYXRlZ29yeVRleHQoaXRlbS5jYXRlZ29yeSkgPT09IHF1ZXJ5LmNhdGVnb3J5KTsgICAgXG4gICAgaWYocXVlcnkuZGlzdHJpY3QpXG4gICAgICAgIG5ld0J1ZGdldCA9IG5ld0J1ZGdldC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNvdW5jaWxfZGlzdHJpY3QgPT09IHF1ZXJ5LmRpc3RyaWN0KTtcbiAgICBpZihxdWVyeS5taW5Db3N0KVxuICAgICAgICBuZXdCdWRnZXQgPSBuZXdCdWRnZXQuZmlsdGVyKGl0ZW0gPT4gTnVtYmVyKGl0ZW0uY29zdCkgPj0gTnVtYmVyKHF1ZXJ5Lm1pbkNvc3QpKTtcbiAgICBpZihxdWVyeS5tYXhDb3N0KVxuICAgICAgICBuZXdCdWRnZXQgPSBuZXdCdWRnZXQuZmlsdGVyKGl0ZW0gPT4gTnVtYmVyKGl0ZW0uY29zdCkgPD0gTnVtYmVyKHF1ZXJ5Lm1heENvc3QpKTtcbiAgICBpZihxdWVyeS5taW5Wb3RlcylcbiAgICAgICAgbmV3QnVkZ2V0ID0gbmV3QnVkZ2V0LmZpbHRlcihpdGVtID0+IE51bWJlcihpdGVtLnZvdGVzKSA+PSBOdW1iZXIocXVlcnkubWluVm90ZXMpKTtcbiAgICBpZihxdWVyeS5tYXhWb3RlcylcbiAgICAgICAgbmV3QnVkZ2V0ID0gbmV3QnVkZ2V0LmZpbHRlcihpdGVtID0+IE51bWJlcihpdGVtLnZvdGVzKSA8PSBOdW1iZXIocXVlcnkubWF4Vm90ZXMpKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdGVkQnVkZ2V0SXRlbXM6IG5ld0J1ZGdldCwgICAgICAgIFxuICAgIH1cbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5TRVRfTUFQOiByZXR1cm4gdXBkYXRlT2JqZWN0KHN0YXRlLCB7bWFwUHJvcHM6IHNldE1hcChzdGF0ZSxhY3Rpb24uZGlzdHJpY3RzLCBhY3Rpb24uc2VsZWN0ZWREaXN0cmljdHMsIGFjdGlvbi5jb3VuY2lsTWVtYmVycywgYWN0aW9uLnNlbGVjdGVkQnVkZ2V0SXRlbXMpfSkgICAgICAgIFxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlVQREFURV9NQVA6IHJldHVybiB1cGRhdGVPYmplY3Qoc3RhdGUsIHttYXBQcm9wczogc2V0TWFwKHN0YXRlLGFjdGlvbi5kaXN0cmljdHMsIGFjdGlvbi5zZWxlY3RlZERpc3RyaWN0cywgYWN0aW9uLmNvdW5jaWxNZW1iZXJzLCBhY3Rpb24uc2VsZWN0ZWRCdWRnZXRJdGVtcyl9KSAgICAgICAgXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVTRVRfTUFQOiByZXR1cm4gdXBkYXRlT2JqZWN0KHN0YXRlLCB7bWFwOiA8U3Bpbm5lciAvPiwgY2xpY2tlZEl0ZW06IG51bGx9KSAgICAgICAgXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuWk9PTV9NQVJLRVI6IHJldHVybiB6b29tTWFya2VyKHN0YXRlLCBhY3Rpb24pXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVTRVRfQ0xJQ0tFRF9JVEVNOiByZXR1cm4gdXBkYXRlT2JqZWN0KHN0YXRlLCB7Y2xpY2tlZEl0ZW06IG51bGwsIHpvb206IDExLCBjZW50ZXI6IERFRkFVTFRfQ0VOVEVSfSlcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5aT09NX0lOOiByZXR1cm4gdXBkYXRlT2JqZWN0KHN0YXRlLCB7em9vbTogc3RhdGUuem9vbSArIDF9KVxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlpPT01fT1VUOiByZXR1cm4gdXBkYXRlT2JqZWN0KHN0YXRlLCB7em9vbTogc3RhdGUuem9vbSAtIDF9KVxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkNFTlRFUjogY29uc29sZS5sb2coJ2NlbnRlcmluZyEhIScpOyByZXR1cm4gdXBkYXRlT2JqZWN0KHN0YXRlLCB7em9vbTogMTEsIGNlbnRlcjogREVGQVVMVF9DRU5URVIsIGNsaWNrZWRJdGVtOiBudWxsfSlcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5TSE9XX0RJU1RSSUNUUzogcmV0dXJuIHVwZGF0ZU9iamVjdChzdGF0ZSwge21hcDogPFNwaW5uZXIgLz59KVxuXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuQlVER0VUX0ZJTFRFUjogcmV0dXJuIHVwZGF0ZU9iamVjdChzdGF0ZSwge3NlbGVjdGVkQnVkZ2V0SXRlbXM6IGZpbHRlckJ1ZGdldChhY3Rpb24uYnVkZ2V0LCBhY3Rpb24uY291bmNpbE1lbWJlcnMsIGFjdGlvbi5jYXRlZ29yeSwgYWN0aW9uLnllYXIsIGFjdGlvbi5kaXN0cmljdCwgYWN0aW9uLm1pbkNvc3QsIGFjdGlvbi5tYXhDb3N0LCBhY3Rpb24ubWluVm90ZXMsIGFjdGlvbi5tYXhWb3RlcywgYWN0aW9uLmNvdW5jaWxNZW1iZXIpLCBhY3Rpb246IHsuLi5hY3Rpb259LCBsb2FkaW5nOiBmYWxzZX0pXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuQlVER0VUX0ZJTFRFUl9GUk9NX1VSTDogcmV0dXJuIHVwZGF0ZU9iamVjdChzdGF0ZSwgYnVkZ2V0RmlsdGVyRnJvbVVSTChhY3Rpb24uYnVkZ2V0LCBhY3Rpb24ucXVlcnkpKVxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkZJTkRfSVRFTTogcmV0dXJuIHVwZGF0ZU9iamVjdChzdGF0ZSwgZmluZEl0ZW0oYWN0aW9uLmJ1ZGdldCwgYWN0aW9uLmxhdCwgYWN0aW9uLmxuZywgYWN0aW9uLnRpdGxlKSlcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/setMap.js\n");

/***/ })

})